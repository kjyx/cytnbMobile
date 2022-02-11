import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'Home',
    component: index,
    meta:{
      bannerShow:true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about.vue" */ '../views/about.vue')
  },
  {
    path: '/test',
    name: 'About',
    component: () => import('../views/test.vue')
  },
  {
    path: '/newscenter',
    name: '新闻中心',
    component: () => import('../views/newscenter.vue')
  },
  {
    path: '/doctorteam',
    name: '专家团队',
    component: () => import('../views/doctorTeam.vue')
  },
  {
    path: '/doctorInfo/:id?',
    name: 'doctorInfo',
    component: () => import('../views/doctorInfo.vue')
  },
  {
    path: '/departmentlist',
    name: '科室列表',
    component: () => import('../views/departmentList.vue')
  },
  {
    path: '/departmentInfo',
    name: '科室详情',
    component: () => import('../views/departmentInfo.vue')
  },
  {
    path: '/message',
    name: '联系我们',
    component: () => import('../views/message.vue')
  },
  {
    path: '/aboutme',
    name: '联系我们',
    component: () => import('../views/aboutme.vue')
  },
  {
    path: '/jiuyizhinan',
    name: '就医指南',
    component: () => import('../views/jiuyizhinan.vue')
  },
  {
    path: '/kepubingli',
    name: '就医指南',
    component: () => import('../views/kepubingli.vue')
  },
  {
    path: '/dangjianwenhua',
    name: '党建文化',
    component: () => import('../views/dangjianwenhua.vue')
  },
  {
    path: '/newsInfo',
    name: '新闻详情',
    component: () => import('../views/newsInfo.vue')
  },
  {
    path: '/jiuzhenliucheng',
    name: '就诊流程',
    component: () => import('../views/jiuzhenliucheng.vue')
  },
  {
    path: '/zhenshifenbu',
    name: '诊室分布',
    component: () => import('../views/zhenshifenbu.vue')
  },
  {
    path: '/yuyueguahao',
    name: '留言',
    component: () => import('../views/messageme.vue')
  },
  {
    path: '/yibaozhengce',
    name: 'yibaozhengce',
    component: () => import('../views/yibaozhengce.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(()=>{
  window.scrollTo(0,0)
})
export default router
