<template>
<div class="con">
  <p class="nav_line">当前位置:首页>科室列表</p>
  <div class="department-con">
    <div class="departmentcon-item">
      <h1>临床科室</h1>
      <ul>
        <li v-for="item in linchuangList" :key="item.id" @click="toDepartmentInfo(item.title)"><div class="box">{{ item.title }}</div></li>
      </ul>
    </div>
    <div class="departmentcon-item">
      <h1>医学医技科</h1>
      <ul>
        <li v-for="item in yijiyiyueList" :key="item.id" @click="toDepartmentInfo(item.title)"><div class="box">{{ item.title }}</div></li>
      </ul>
    </div>
    <div class="departmentcon-item">
      <h1>辅助科室</h1>
      <ul>
        <li v-for="item in fuzhukeshiList" :key="item.id" @click="toDepartmentInfo(item.title)"><div class="box">{{ item.title }}</div></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {getDepartmentList} from "@/api/api";

export default {
  name: "departmentList",
  data() {
    return {
      linchuangList:[],
      yijiyiyueList:[],
      fuzhukeshiList:[]
    }
  },
  methods:{
    async loadLingchuang() {
      let query = {
        pageSize:20,
        pageNum:1,
        departmentType:1
      }
      const res = await getDepartmentList(query)
      res.rows.forEach((item) => {
        this.linchuangList.push({
          title:item.departmentName,
          id:item.id
        })
      })
    },
    async loadYijiyiyue() {
      let query = {
        pageSize:20,
        pageNum:1,
        departmentType:2
      }
      const res = await getDepartmentList(query)
      res.rows.forEach((item) => {
        this.yijiyiyueList.push({
          title:item.departmentName,
          id:item.id
        })
      })
    },
    async loadFuzhu() {
      let query = {
        pageSize:20,
        pageNum:1,
        departmentType:3
      }
      const res = await getDepartmentList(query)
      res.rows.forEach((item) => {
        this.fuzhukeshiList.push({
          title:item.departmentName,
          id:item.id
        })
      })
    },
    toDepartmentInfo(name){
      this.$router.push({path:'/departmentinfo',query:{name:name}})
    }
  },
  mounted() {
    this.loadFuzhu()
    this.loadLingchuang()
    this.loadYijiyiyue()
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
    .departmentcon-item{
      h1{
        padding-left: 20px;
        display: block;
        height: 100px;
        line-height: 100px;
        border-bottom: 1px solid #ccc;
        font-size: 34px;
        font-weight: bold;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        padding-top: 50px;
        li{
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 50px;
          .box{
            text-align: center;
            line-height: 88px;
            font-size: 30px;

            width: 274px;
            height: 88px;
            background: #DFDFDF;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>