<template>
<div class="con">
  <p class="nav_line">当前位置:首页>科室列表</p>
  <div class="department-con">
    <div class="departmentcon-title">
      <h1>{{ departmentInfo.departmentTitle }}</h1>
      <div class="swiper departmentFengmian">
        <img :src="`${$store.state.baseUrl}${departmentInfo.departmentFengmian}`" alt="">
      </div>
      <div class="text-info">
        <div v-html="departmentInfo.departmentContext"></div>
      </div>
    </div>
    <div class="doctor-list">
      <h1>相关专家</h1>
      <div class="swiper-container swiper" ref="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in doctorList" :key="item.id">
              <!-- 内容 -->
              <div class="doctor-box">
                <img :src="`${baseUrl}${item.dockerFengmian}`" alt="">
                <div>
                  <h3>{{item.dockerTitle}}</h3>
                  <p>{{item.positionTitle}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <!-- 左箭头 -->
          <!-- 右箭头 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
    </div>
    <div class="doctor-list">
      <h1>康复案例</h1>
      <div class="swiper-container swiper" ref="swiperTwo">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in kangfuList" :key="item.id">
            <!-- 内容 -->
            <div class="doctor-box" style="margin-top: 30%">
              <img :src="`${baseUrl}${item.caseFengmian}`" alt="">
              <p>{{item.caseTitle}}</p>
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <!-- 左箭头 -->
        <!-- 右箭头 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
import {getDepartmentInfo} from '@/api/api'
import {mapState} from "vuex";
export default {
  name: "departmentInfo",
  data() {
    return {
      // 最上面
      departmentInfo:{},
      // 医生
      doctorList:[],
      // 康复案例
      kangfuList:[]
    }
  },
  methods:{
    init() {
      this.swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: 2,
        autoplay:true,
        slidesPerGroup: 2,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        loopAdditionalSlides : 0,
        grabCursor : true,
        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
      this.swiper = new Swiper(this.$refs.swiperTwo, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        autoplay:true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        grabCursor : true,
        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
    },
    async loadInfo() {
      const res = await  getDepartmentInfo(this.$route.query.name)
      this.departmentInfo = res.data
      this.doctorList = res.dockerInfos
      this.kangfuList = res.caseInfos
      console.log(res)
    },
  },
  mounted() {
    this.init()
    this.loadInfo()
  },
  computed:{
    ...mapState(['baseUrl'])
  }
}
</script>

<style scoped lang="less">
.con{
  padding: 25px 35px;
  .nav_line {
    width: 357px;
    height: 29px;
    font-size: 30px;
    color: #848484;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .department-con {
    .departmentcon-title{
      h1{
        display: block;
        height: 100px;
        line-height: 100px;
        font-size: 34px;
        font-weight: bold;
      }
      .swiper{
        height: 560px;
        background-color: #848484;
      }
      .departmentFengmian {
        img {
          display: block;
          width: 100%;
          height: 560px;
        }
      }
      .text-info{
        color: #848484;
        font-size: 30px;
        line-height: 50px;
      }
    }
    .doctor-list{
      h1{
        display: block;
        height: 100px;
        line-height: 100px;
        font-size: 34px;
        font-weight: bold;
      }
      .swiper{
        //height: 480px;
      }
      .swiper-slide {
        padding: 0 50px;
        overflow: hidden;
      }
      .doctor-box{
        margin: 30px auto 0;
        position: relative;
        overflow: hidden;
        img{
          display: block;
          width: 100%;
          height: auto;
        }
        text-align: center;
        .left {
          position: absolute;
          top: 35%;
          left: -30%;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #1674B3;
          color: white;
          line-height: 60px;
        }
        .right {
          line-height: 60px;
          color: white;
          background-color: #1674B3;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          position: absolute;
          top: 35%;
          right: -30%;
        }
      }
    }
    .kangfu-list{
      h1{
        display: block;
        height: 100px;
        line-height: 100px;
        font-size: 34px;
        font-weight: bold;
      }
    }
  }
}
</style>
