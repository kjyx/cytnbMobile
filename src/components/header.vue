<template>
<div class="header">
  <div class="top">
    <img src="@/assets/dingbu.jpg" alt="">
  </div>
  <div class="bd2 flex-col">
    <div class="group2 flex-row">
            <span class="paragraph1">
              咨询
              <br />
              热线
            </span>
      <div class="main1">
        <span class="word2">0394-8386288/8386299</span>
        <span class="word3">河南省周口市黄河路与八一路交叉口</span>
      </div>
      <div class="main2 flex-col" @click="PopupShow = true">
        <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/pslnusa38xchaxspsoxnrmzcot2rlhsg4k32dce949-ff1d-491e-abad-9cfd84f8fc43"
        />
      </div>
    </div>
  </div>
  <van-popup
      v-model="PopupShow"
      position="right"
      :closeable="true"
      style="height:100vh;width:40vh;background-color: #9fcfff;">
    <div class="popup-box">
      <ul class="nav-list" id="nav">
        <li @click="$router.push('/index');">主页</li>
        <li @click="$router.push('/aboutme');">医院概况</li>
        <li @click="$router.push('/departmentlist');">科室导航</li>
        <li @click="$router.push('/doctorteam');">医疗团队</li>
        <li @click="$router.push('/jiuyizhinan');">就医指南</li>
        <li @click="$router.push('/newscenter');">新闻中心</li>
        <li @click="$router.push('/kepubingli');">科普病例</li>
        <li @click="$router.push('/dangjianwenhua');">党建文化</li>
        <li @click="$router.push('/message');">联系我们</li>
      </ul>
    </div>
  </van-popup>
</div>
</template>
<script>
export default {
  name:'Header',
  data() {
    return{
      PopupShow:false,
      num:1
    }
  },
  components:{
  },
  watch:{
    $route(to,from){
      this.PopupShow = false
    }
  },
  mounted() {
  }
}
</script>
<style lang="less" scoped>
.top {
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
.img1 {
  z-index: 15;
  width: 100vw;
  height: 8.27vw;
}

.bd1 {
  z-index: 16;
  height: 20.94vw;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps9xkejfl5ghdvh0dn5ege8n3r2n5s4hbd75c7932-b68a-49de-b3e0-3a32aa181b08)
  100% no-repeat;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
.mod1 {
  z-index: auto;
  width: 88.4vw;
  height: 13.07vw;
}
.word1 {
  z-index: 41;
  width: 88.4vw;
  height: 6.14vw;
  color: rgba(255, 255, 255, 1);
  font-size: 6.26vw;
  font-family: FZLTTHK--GBK1-0;
  text-align: left;
  white-space: nowrap;
  line-height: 6.27vw;
  display: block;
}
.info1 {
  z-index: 17;
  width: 38.67vw;
  height: 3.87vw;
  color: rgba(255, 255, 255, 1);
  font-size: 4vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 4vw;
  align-self: flex-start;
  display: block;
  margin: 3.06vw 0 0 22.4vw;
}

.bd2 {
  background-color: #2495ff;
  z-index: 18;
  height: 13.6vw;
  align-self: flex-start;
  width: 99.87vw;
  align-items: flex-end;
}
.group2 {
  z-index: auto;
  width: 92.4vw;
  height: 13.6vw;
}
.paragraph1 {
  z-index: 31;
  width: 7.6vw;
  height: 8.54vw;
  color: rgba(255, 255, 255, 1);
  font-size: 4vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  line-height: 4.67vw;
  white-space: nowrap;
  margin-top: 2.8vw;
  display: block;
}
.main1 {
  z-index: 30;
  width: 47.47vw;
  height: 8vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  margin: 2.5vw 0 0 4.8vw;
  display: flex;
  flex-direction: column;
}
.word2 {
  z-index: auto;
  width: 47.47vw;
  color: rgba(255, 255, 255, 1);
  font-size: 4.4vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  white-space: nowrap;
}
.word3 {
  z-index: auto;
  width: 52vw;
  color: rgba(255, 255, 255, 1);
  font-size: 2.93vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
.main2 {
  background-color: rgba(0, 128, 255, 1);
  z-index: 19;
  height: 13.6vw;
  margin-left: 18.30vw;
  width: 14.4vw;
  justify-content: flex-start;
  padding-top: 3.2vw;
  align-items: center;
}
.pic1 {
  z-index: 20;
  width: 7.2vw;
  height: 6.67vw;
}
.header{
  height: 43vw;
}
.popup-box {
  padding-top: 80px;padding-left: 35px;
}
.nav-list{
  display: flex;
  flex-direction: column;
  color: white;
  li{
    text-align: left;
    padding-left: 20px;
    line-height: 130px;
    border-bottom: 0.5px solid #ffffff;
  }
}
/deep/ .van-icon{
  color: white;
}
</style>
