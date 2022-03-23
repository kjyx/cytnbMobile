<template>
  <div class="con">
    <div class="title">
      当前位置：首页＞新闻
    </div>
    <div>
      <h3 class="biaoti">{{ infoList.newsDescribe }}</h3>
      <h3 class="creattime">{{ infoList.createTime.slice(0,10) }}</h3>
      <div v-html="infoList.newsContext"></div>
      <van-button type="info" @click="$router.back()" style="text-align: center; width: 90vw; margin-top: 30px">返回</van-button>
    </div>
  </div>
</template>

<script>
import {getNewsInfo} from '@/api/api'
export default {
  name: "newsInfo",
  data() {
    return {
      infoList:[]
    }
  },
  methods:{
    async loadNewsInfo() {
      const res = await  getNewsInfo(this.$route.query.id)
      this.infoList = res.data
      console.log(res)
    }
  },
  mounted() {
    this.loadNewsInfo()
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
.biaoti{
  margin-bottom: 20px;
  font-size: 32px;
}
.creattime{
  font-size: 16px;
  margin-bottom: 15px;
  color: #848484;
}
</style>
