import axios from 'axios'
import {Toast} from "vant";

// 全局loding
let loadingInstance = null
const config ={
    baseURL:'http://139.224.68.167:9087',
    timeout:5000
}
const request = axios.create(config)
let httpCode = {
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时'
}
// 请求拦截器
request.interceptors.request.use((config)=>{
    loadingInstance = Toast.loading({
        message:'加载中',
        forbidClick: true,
    })
    return config
})

// 响应拦截器
request.interceptors.response.use(res=>{
        loadingInstance.close()
        if(res.status === 200) {
            return Promise.resolve(res.data)
        }else {
            Toast.fail({
                message:'加载失败',
                duration:3000
            });
        }},
    // 错误
    (error)=>{
        loadingInstance.close()
        if (error.response) {
            // 根据返回类型提示用户
            let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message
            Toast.fail(tips);
            return Promise.reject(error)
        }else {
            // 没有响应
            Toast.fail('请求超时,请刷新重试');
            return Promise.reject(new Error('请求超时,请刷新重试'))
        }
    }
)
export default request