<template>
  <div class="con">
    <div class="title">
      当前位置：首页＞新闻中心
    </div>
    <van-tabs color="#0080ff" :active="active" @click="changenews">
      <van-tab v-for="item in newsNameList" :title="item.title" :name="item.id" :key="item.id">
      </van-tab>
    </van-tabs>
    <ul class="news-list" style="margin-top: 20px">
      <li v-for="item in newsList" :key="item.id" @click="$router.push({path:`/newsInfo?id=${item.id}`})">
        <h3>{{ item.newsTitle }}</h3>
        <h5>{{ item.createTime.slice(0, 10) }}</h5>
        <p>{{ item.newsDescribe }}</p>
      </li>
    </ul>
    <van-pagination v-model="docPagenum" @change="newsChange" mode="simple" :page-count="newsNum"/>
  </div>
</template>

<script>
import {getNewsList} from "@/api/api";

export default {
  name: "newscenter",
  data() {
    return {
      active:null,
      newsNameList: [
        {
          title: '全部新闻',
          id: null,
        },
        {
          title: '医院要闻',
          id: 1,
        },
        {
          title: '媒体报道',
          id: 2,
        },
        {
          title: '学术交流',
          id: 3,
        },
        {
          title: '公益活动',
          id: 4,
        },
        {
          title: '专题视频',
          id: 5,
        },
        {
          title: '最美护士',
          id: 6,
        },
        {
          title: '疫情报道',
          id: 17,
        },
      ],
      newsList: [],
      newsNum: null,
      type: null,
      docPagenum: null
    }
  },
  methods: {
    changenews(id) {
      if (id === 7) {
        id = 17
      }
      this.type = id
      this.loadnewsList(id)
    },
    newsChange(pageNum) {
      this.loadnewsList(this.type, pageNum)
    },
    async loadnewsList(type = null, pageNum = 1, pageSize = 5) {
      let query = {}
      if (type !== 0) {
        query.newsType = type
      }
      query.pageNum = pageNum
      query.pageSize = pageSize
      const res = await getNewsList(query)
      this.newsList = res.data.records
      this.newsNum = res.data.pages
    },
  },
  mounted() {
    this.loadnewsList(this.$route.query.id)
    this.active = parseInt(this.$route.query.id)
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
