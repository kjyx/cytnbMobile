<template>
<div class="con">
  <div class="title">
    当前位置：首页＞就医指南
  </div>
  <van-tabs color="#0080ff" :active="active">
    <van-tab title="专家门诊">
      <ul class="news-list" style="margin-top: 20px">
          <li v-for="item in zhuanjialist" :key="item.id"  @click="$router.push({path:'newsinfo',query:{id:item.id}})">
            <h3>{{ item.newsTitle }}</h3>
            <h5>{{ item.createTime.slice(0,10) }}</h5>
            <p>{{ item.newsDescribe }}</p>
          </li>
        <van-pagination v-model="docPagenum"  @change="zhuanjiaChange"  mode="simple" :page-count="zhuanjiaNum" />
      </ul>
    </van-tab>
    <van-tab title="诊室分布">
      <img src="@/assets/zhenshifenbu1.jpg" alt="" class="img1">
      <img src="@/assets/zhenshifenbu2.jpg" alt="" class="img1">
    </van-tab>
    <van-tab title="就诊流程">
      <img src="@/assets/jiuzhenliucheng.jpg" alt="" class="img1">
    </van-tab>
    <van-tab title="医保报销">
      <img src="@/assets/yibaozhengce.png" alt="" class="img1">
    </van-tab>
    <van-tab title="体检须知">
      <img src="@/assets/tijianxuzhi.png" alt="" class="img1">
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
import {getDoctorList, getNewsList} from "@/api/api";
export default {
  name: "jiuyizhinan",
  data() {
    return {
      active:0,
      zhuanjialist:[],
      zhuanjiaNum:null,
      docPagenum:null
    }
  },
  methods:{
    zhuanjiaChange(pageNum) {
      this.loadzhuanjiaList(12,pageNum)
    },
    async loadzhuanjiaList(type=null,pageNum=1,pageSize=5) {
      let query = {
      }
      query.newsType = type
      query.pageNum = pageNum
      query.pageSize = pageSize
      const res = await getNewsList(query)
      this.zhuanjialist = res.data.records
      this.total = res.totalPage
    },
  },
  mounted() {
    this.loadzhuanjiaList(14)
    if (this.$route.query.id){
      this.active = parseInt(this.$route.query.id)
    }
  }
}
</script>

<style scoped lang="less">
.con {
  padding: 3.333333vw 4.666667vw;
}
.title {
  height: 29px;
  font-size: 30px;
  font-family: SimHei;
  color: #848484;
  line-height: 30px;
  margin-bottom: 40px;
}
.img1 {
  display: block;
  width: 100%;
  height: auto;
}
/deep/ .van-tabs__content{
  margin-top: 20px;
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
