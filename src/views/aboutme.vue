<template>
<div class="con">
  <div class="title">
    当前位置：首页＞关于我们
  </div>
  <van-tabs color="#0080ff" :active="active">
    <van-tab title="医院介绍">
      <p style="text-align: center">河南科技职业大学附属第五医院</p>
      <div>
        （周口承悦糖尿病医院）
        我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市 城镇职工、城乡居民医保定点直补单位、省内及跨省异地就医住院费用直接结算定点医疗机构。

        我院聘请省、市知名专家教授，组建强大专家团队，技术力量雄厚，是以内分泌糖尿病为核心科室，开展足病科、眼科、心脑血管科、呼吸内科、甲状腺科、中医科、骨科、骨骼矫形科、疼痛康复科、儿童生长发育科、不育不孕科、营养科以及健康体检中心等特色科室的“大专科、小综合”医院。

        我院规模宏大，环境优美，设施设备先进齐全，拥有美国GE CT、核磁共振、数字化DR、德国罗氏电化 学发光仪、日本希森美康血液分析仪、美国感觉神经定量测量仪、美国VISTA周围血管诊断系统、美力敦胰岛素泵、韩国双能X线骨密度测定仪、挪威奥菲全自动特种蛋白分析系统、无散瞳眼底照相仪、眼底激光治疗仪等高端诊疗设备和专业体检设备。
      </div>
    </van-tab>
    <van-tab title="医院发展">
      <ul class="news-list" style="margin-top: 20px">
        <li v-for="item in fazhanList" :key="item.id">
          <h3>{{ item.newsTitle }}</h3>
          <h5>{{ item.createTime.slice(0,10) }}</h5>
          <p>{{ item.newsDescribe }}</p>
        </li>
      </ul>
    </van-tab>
    <van-tab title="医院文化">
      <img src="@/assets/yiyuanwenhua.png" alt="" style="display:block;width: 100%;height: auto">
    </van-tab>
    <van-tab title="院容院貌">
      <ul class="yuanrongList">
        <li v-for="item in yuanrongyuanmaoList" :key="item.id">
          <img :src="`${$store.state.baseUrl}${item.honorFengmian}`" alt="">
          <p>{{ item.honorTitle }}</p>
        </li>
      </ul>
    </van-tab>
    <van-tab title="荣誉资质">
      <ul class="yuanrongList">
        <li v-for="item in rongyuzizhiList" :key="item.id">
          <img :src="`${$store.state.baseUrl}${item.honorFengmian}`" alt="">
          <p>{{ item.honorTitle }}</p>
        </li>
      </ul>
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
import {getNewsList,getRyzzList} from "@/api/api";

export default {
  name: "aboutme",
  data() {
    return {
      active:0,
      navList:[
        {
          title:'医院介绍',
          id:null,
        },
        {
          title:'院长介绍',
          id:1,
        },
        {
          title:'医院发展',
          id:2,
        },
        {
          title:'医院文化',
          id:3,
        },
        {
          title:'院容院貌',
          id:4,
        },
      ],
      fazhanList:[],
      rongyuzizhiList:[],
      yuanrongyuanmaoList:[]
    }
  },
  methods:{
    async loadNewsList(type=null,pageNum=1,pageSize=5) {
      let query = {
      }
      query.newsType = type
      query.pageNum = pageNum
      query.pageSize = pageSize
      const res = await getNewsList(query)
        this.fazhanList = res.rows
      this.total = res.total
    },
    async loadRyzzList(pagenum = 1) {
      let query = {
        pageNum:pagenum,
        pageSize:10,
        honorType:1
      }
      const res = await getRyzzList(query)
      console.log(res)
      this.rongyuzizhiList = res.rows
      this.total = res.total
    },
    async loadrongyuList(pagenum = 1) {
      let query = {
        pageNum:pagenum,
        pageSize:10,
        honorType:2
      }
      const res = await getRyzzList(query)
      console.log(res)
      this.yuanrongyuanmaoList = res.rows
      this.total = res.total
    },
  },
  mounted() {
    this.loadNewsList(10)
    this.loadRyzzList()
    this.loadrongyuList()
    console.log(this.rongyuzizhiList,this.yuanrongyuanmaoList)
  }
}
</script>

<style scoped lang="less">
.yuanrongList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 45%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      display: block;
      width: 100%;
      height: auto;
      background-color: #1674B3;
    }
    p {
      margin-bottom: 10px;
      text-align: center;
    }
  }
}
.con {
 padding: 5.333333vw;
}
.title {
  height: 29px;
  font-size: 30px;
  font-family: SimHei;
  color: #848484;
  line-height: 30px;
  margin-bottom: 40px;
}
.van-tabs {
}
/deep/ .van-tab__pane {
  padding-top: 20px;
}
.news-list {
li {
  margin-bottom: 30px;
h1{
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
h5{
  margin-top: 6px;
  font-size: 18px;
  color: #848484;
}
p {
  margin-top: 15px;
  font-size: 28px;
  color: #848484;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
}
}
</style>