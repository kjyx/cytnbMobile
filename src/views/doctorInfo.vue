<template>
<div class="con">
  <p class="title">当前位置:首页>专家团队</p>
  <div class="newInfo-box">
    <div class="top">
      <img
          class="img"
          referrerpolicy="no-referrer"
          :src="`${baseUrl}${doctorList.dockerFengmian}`"
      />
      <h3>{{doctorList.dockerTitle}}</h3>
      <h4>{{doctorList.positionTitle}}</h4>
    </div>
    <div class="context" v-html="doctorList.dockerContext">
    </div>
  </div>
</div>
</template>

<script>
import {getDoctorInfo} from "@/api/api";
import {mapState} from "vuex";
export default {
  name: "doctorInfo",
  data(){
    return{
      doctorList:{}
    }
  },
  mounted() {
    this.loadDoctorInfo()
  },
  methods:{
    async loadDoctorInfo() {
      const res = await getDoctorInfo(this.$route.params.id)
      this.doctorList = res.data
      console.log(this.doctorList)
    },
  },
  computed:{
    ...mapState(['baseUrl'])
  }
}
</script>

<style scoped lang="less">
.con{
  padding: 25px 35px;
  .title {
    width: 357px;
    height: 29px;
    font-size: 30px;
    color: #848484;
    line-height: 30px;
  }
  .newInfo-box{
    display: flex;
    flex-direction: column;
    .top{
      padding: 16.13vw 31.2vw 0;
      margin-bottom: 10px;
      h3{
        margin-top: 50px;
        margin-bottom: 30px;
        height: 28px;
        font-size: 30px;
        color: #292929;
      }
      h4{
        width: 235px;
        height: 24px;
        font-size: 25px;
        color: #848484;
        line-height: 35px;
        margin-bottom:75px;
      }
    }
    .context{
      font-size: 30px;
      color: #848484;
      line-height: 40px;
    }
  }
  .img {
    width: 32.4vw;
    height: 42.54vw;
  }
}
</style>
