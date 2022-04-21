<template>
  <div class="con">
    <div class="title">
      当前位置：首页＞党建文化
    </div>
    <van-tabs color="#0080ff" @click="newsClick">
      <van-tab v-for="item in newsNameList" :title="item.title" :name="item.id" :key="item.id">
      </van-tab>
    </van-tabs>
    <ul class="news-list" style="margin-top: 20px" @click="$router.push('newsinfo?id=8')">
      <li v-for="item in newsList" :key="item.id">
        <h3>{{ item.newsTitle }}</h3>
        <h5>{{ item.createTime.slice(0,10) }}</h5>
        <p>{{ item.newsDescribe }}</p>
      </li>
    </ul>
    <van-pagination v-model="docPagenum"  @change="newsChange"  mode="simple" :page-count="newsNum" />
  </div>
</template>

<script>
import {getNewsList} from "@/api/api";

export default {
  name: "党建文化",
  data() {
    return {
      newsNameList:[
        {
          title:'党建活动',
          id:20,
        },
        {
          title:'工会活动',
          id:21,
        },
        {
          title:'党史天天读',
          id:22,
        },
      ],
      newsList:[],
      newsNum:null,
      type:null,
      docPagenum:null
    }
  },
  methods:{
    newsChange(pageNum) {
      this.loadnewsList(this.type,pageNum)
    },
    async loadnewsList(type=null,pageNum=1,pageSize=5) {
      let query = {
      }
      if (type !== 0) {
        query.newsType = type
      }
      query.pageNum = pageNum
      query.pageSize = pageSize
      const res = await getNewsList(query)
      this.newsList = res.data.records
      this.newsNum = res.data.totalPage
    },
    newsClick(id) {
      this.type  = id
      this.loadnewsList(id)
    }
  },
  mounted() {
    this.loadnewsList(20)
  }
}
</script>

<style scoped lang="less">
.con{
  padding: 40px;
}
.title {
  height: 29px;
  font-size: 30px;
  font-family: SimHei;
  color: #848484;
  line-height: 30px;
  margin-bottom: 40px;
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
.van-tabs__nav {
  margin-bottom: 20px;
}
</style>
