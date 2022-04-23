<template>
  <div class="con">
    <div class="title">
      当前位置：首页＞科普病例
    </div>
    <van-tabs color="#0080ff" :active="active" @click="newsClick">
      <van-tab v-for="item in newsNameList" :title="item.title" :name="item.id" :key="item.id">
      </van-tab>
    </van-tabs>
    <ul class="news-list" style="margin-top: 20px">
      <li v-for="item in newsList" :key="item.id" @click="$router.push({path:'/newsinfo',query:{id:item.id}})">
        <h3>{{ item.newsTitle }}</h3>
        <h5>{{ item.createTime | formatTimer }}</h5>
        <p>{{ item.newsDescribe }}</p>
      </li>
    </ul>
    <van-pagination v-if="newsNum > 5" v-model="docPagenum" @change="newsChange" mode="simple" :page-count="page" :total-items="newsNum"/>
  </div>
</template>

<script>
import {getNewsList} from "@/api/api";

export default {
  name: "kepubingli",
  filters: {
    formatTimer: (value) => {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + MM + '-' + d;
    }
  },
  data() {
    return {
      newsNameList: [
        {
          title: '典型病例',
          id: 15,
        },
        {
          title: '健康知识',
          id: 16,
        },
        {
          title: '防疫知识',
          id: 18,
        },
        {
          title: '健康食谱',
          id: 24
        }
      ],
      newsList: [],
      newsNum: null,
      type: null,
      docPagenum: null,
      active: null,
      page:null
    }
  },
  mounted() {
    this.loadnewsList(this.$route.query.id)
    this.active = parseInt(this.$route.query.id)
  },
  methods: {
    newsChange(pageNum) {
      this.loadnewsList(this.type, pageNum)
    },
    async loadnewsList(type = null, pageNum = 1, pageSize = 5) {
      let query = {}
      if (type === null) {
        query.newsType = 16
      } else {
        query.newsType = type
      }
      query.pageNum = pageNum
      query.pageSize = pageSize
      const res = await getNewsList(query)
      this.newsList = res.data.records
      this.newsNum = res.data.total
      this.page = res.data.pages
    },
    newsClick(id) {
      this.type = id
      this.loadnewsList(id)
    }
  },

}
</script>

<style scoped lang="less">
.con {
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

    h1 {
      font-weight: 400;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    h5 {
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
