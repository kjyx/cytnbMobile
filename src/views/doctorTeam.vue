<template>
<div class="con">
  <p class="title">
    当前位置: 首页>医生团队
  </p>
  <van-tabs color="#0080ff">
    <van-tab title="专家介绍">
      <ul class="doctor-list">
        <li v-for="item in doctorList" :key="item.id">
          <img :src="`${$store.state.baseUrl}${item.dockerFengmian}`" alt="" @click="$router.push({name:'doctorInfo',params:{id:item.id}})">
          <h3>{{ item.dockerTitle }}</h3>
          <h3>{{ item.direction }}</h3>
          <h3>{{ item.positionTitle }}</h3>
        </li>
      </ul>
      <van-pagination v-model="docPagenum"  @change="docChang"  mode="simple" :page-count="pageCount" />
    </van-tab>
    <van-tab title="专家访谈">
      <ul class="news-list" style="margin-top: 20px">
        <li v-for="item in zhuanjiaList" :key="item.id">
          <h3>{{ item.newsTitle }}</h3>
          <h5>{{ item.createTime.slice(0,10) }}</h5>
          <p>{{ item.newsDescribe }}</p>
        </li>
      </ul>
      <van-pagination v-model="zhuanjiaNum"  @change="zhuanjiaChange"  mode="simple" :page-count="zhuanjiaNum" />
    </van-tab>
    <van-tab title="家庭医生">
      <ul class="news-list" style="margin-top: 20px">
        <li v-for="item in jiatingList" :key="item.id">
          <h3>{{ item.newsTitle }}</h3>
          <h5>{{ item.createTime.slice(0,10) }}</h5>
          <p>{{ item.newsDescribe }}</p>
        </li>
      </ul>
      <van-pagination v-model="docPagenum"  @change="jiatingChange"  mode="simple" :page-count="jiatingNum" />
    </van-tab>

  </van-tabs>

</div>
</template>

<script>
import {getDoctorList,getNewsList} from "@/api/api";
export default {
  name: "doctorTeam",
  data() {
    return {
      doctorList:[],
      docTotalItems:null,
      docPagenum:1,// 分页当前页
      pageCount:null,
      zhuanjiaList:[],
      jiatingList:[],
      zhuanjiaNum:null,
      jiatingNum:null
    }
  },
  methods:{
    docChang(pageNum) {
      this.loadDoctorList(pageNum)
    },
    zhuanjiaChange(pageNum) {
      this.loadzhuanjiaList(12,pageNum)
    },
    jiatingChange(pageNum) {
      this.loadzhuanjiaList(13,pageNum)
    },
    async loadzhuanjiaList(type=null,pageNum=1,pageSize=5) {
      let query = {
      }
      query.newsType = type
      query.pageNum = pageNum
      query.pageSize = pageSize
      const res = await getNewsList(query)
      this.zhuanjiaList = res.rows
      this.total = res.totalPage
    },
    async loadjiatingList(type=null,pageNum=1,pageSize=5) {
      let query = {
      }
      query.newsType = type
      query.pageNum = pageNum
      query.pageSize = pageSize
      const res = await getNewsList(query)
      this.jiatingList = res.rows
      this.zhuanjiaNum = res.totalPage
    },
    async loadDoctorList(pageNum=1) {
      let query = {
        pageNum:pageNum,
        pageSize:6
      }
      const res = await getDoctorList(query)
      this.pageCount = res.totalPage
      this.docPagenum = pageNum
      this.doctorList = res.rows
    }
  },
  mounted() {
    this.loadDoctorList()
    this.loadzhuanjiaList(12)
    this.loadjiatingList(13)
  }
}
</script>

<style scoped lang="less">
.con{
  padding: 25px 15px;
  .doctor-list {
    display: flex;
    flex-wrap: wrap;
    li {
      h3 {
        &:not(:nth-of-type(1)) {
          color: #848484;
        }
      }
      height: 520px;
      img{
        width: 250px;
        height: 320px;
      }
      width: 50%;
      padding: 50px;
      text-align: center;
      h3{
        line-height: 30px;
        font-size: 30px;
        margin-bottom: 5px;
      }
    }
  }
}
.title{
  color: #999999;
  margin-bottom: 40px;
}
.news-list {
  padding: 0 50px;
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