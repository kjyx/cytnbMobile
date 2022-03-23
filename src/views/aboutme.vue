<template>
<div class="con">
  <div class="title">
    当前位置：首页＞关于我们
  </div>
  <van-tabs color="#0080ff" :active="active">
    <van-tab title="医院介绍">
      <div v-for="item in aboutMe" :key="item.id">
        <p style="text-align: center; font-weight: 800; font-size: 18px;padding-bottom: 10px">{{item.title}}</p>
        <p style="text-align: center;padding-bottom: 10px">（周口承悦糖尿病医院）</p>
        <div style="line-height: 23px; text-indent: 2em" v-html="item.conter">
        </div>
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
      <van-pagination
          mode="simple"
          v-model="yrym.pageNum"
          :total-items="total1"
          :items-per-page="yrym.pageSize"
          @change="loadrongyuList"
      >

      </van-pagination>
    </van-tab>
    <van-tab title="荣誉资质">
      <ul class="yuanrongList">
        <li v-for="item in rongyuzizhiList" :key="item.id">
          <img :src="`${$store.state.baseUrl}${item.honorFengmian}`" alt="">
          <p>{{ item.honorTitle }}</p>
        </li>
      </ul>
      <van-pagination
          mode="simple"
          v-model="ryzz.pageNum"
          :total-items="total"
          :items-per-page="ryzz.pageSize"
          @change="loadRyzzList"
      >
      </van-pagination>
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
import {getNewsList,getRyzzList} from "@/api/api";
import {reqAboutMe} from "../../../chengyue/src/api/api";

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
      yuanrongyuanmaoList:[],
      ryzz:{
        pageNum:1,
        pageSize:10,
        honorType:1
      },
      total:'',
      yrym:{
        pageNum:1,
        pageSize:10,
        honorType:2
      },
      total1:'',
      aboutMe:[]
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
      this.ryzz.pageNum = pagenum
      const res = await getRyzzList(this.ryzz)
      console.log(res)
      this.rongyuzizhiList = res.rows
      this.total = res.total
    },



    async loadrongyuList(pagenum = 1) {
      this.yrym.pageNum = pagenum
      const res = await getRyzzList(this.yrym)
      this.yuanrongyuanmaoList = res.rows
      this.total1 = res.total
    },

    async getAboutMe(){
      let query = {
        pageNum:1,
        pageSize:10
      }
      let result = await reqAboutMe(query)
      console.log(result)
      this.aboutMe = result.rows
    }
  },
  mounted() {
    this.loadNewsList(10)
    this.loadRyzzList()
    this.loadrongyuList()
    this.getAboutMe()
    // console.log(this.rongyuzizhiList,this.yuanrongyuanmaoList)
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
