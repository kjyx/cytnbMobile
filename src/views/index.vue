<template>
  <div class="page flex-col">
    <div class="group1 flex-col">
      <div class="box1 flex-col">
        <van-swipe class="my-swipe img2" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in bannerList" :key="item.id">
            <img
              class="img2"
              referrerpolicy="no-referrer"
              :src="`${$store.state.baseUrl}${item.image}`"
             />
          </van-swipe-item>
        </van-swipe>
        <div class="bd4 flex-col"  @click="$router.push({path:'/aboutme',query:{id:0}})">
          <div class="outer1 flex-col">
            <div class="outer2 flex-row">
              <span class="info2">医院概况</span>
              <div class="box2 flex-col"><span class="info3">查看更多</span></div>
            </div>
            <img
                class="pic6"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/pst8elqusxc0rv6lp1lt7chs5xk0ekl0wd8bd884b5b-61f1-4c5f-a315-f3eed986601b"
            />
            <span class="txt1">河南科技职业大学附属第五医院</span>
            <span class="infoBox1">
              河南科技职业大学附属第五医院河南科技职业大学附属第
              <br />
              <br/>
              五医院河南科技职业大学附属第五医院
            </span>
          </div>
        </div>
        <div class="bd8">
          <div class="newsTitle">
            <div v-for="item in newsTitleList" :key="item.id" :class="{'newsactive':item.id===newsCurrent}" @click="newsChange(item.id)">{{ item.title }}</div>
          </div>
          <ul class="news-list">
            <li v-for="item in newsList" :key="item.id" @click="toNewsInfo(item.id)">{{ item.newsTitle }}</li>
          </ul>
        </div>
        <div class="bd6 flex-row">
          <span class="word5" >特色科室</span>
          <div class="box3 flex-col" @click="$router.push({path:'/departmentlist'})"><span class="word6">查看更多</span></div>
        </div>
        <div class="bd7 flex-col">
          <div class="layer1 flex-col">
            <div class="word7">
              <p :class="{ 'active' : item.id===current }" v-for="item in departmentCurrentList" :key="item.id" @click="switchDer(item.id)">{{item.title}}</p>
            </div>
            <div class="main3 flex-col"></div>
            <ul class="departmentList">
              <li v-for="item in departmentList" :key="item.id" @click="$router.push({path:'/departmentinfo',query:{name:item.title}})">
                {{ item.title }}
              </li>
            </ul>
          </div>
        </div>
        <div style="margin:25px 0">
          <span class="info4">专家团队</span>
          <div class="box">
            <van-swipe class="my-swipe bd5" ref="doctorlist"  :loop="false">
              <van-swipe-item v-for="item in doctorList" :key="item.id">
                <div class="doctor-box" >
                  <img :src="`${$store.state.baseUrl}${item.dockerFengmian}`" alt="" @click="$router.push({name:'doctorInfo',params:{id:item.id}})">
                  <div>
                    <h3>{{item.dockerTitle}}</h3>
                    <p>{{item.positionTitle}}</p>
                  </div>
                </div>
              </van-swipe-item>
            </van-swipe>
            <div class="left" @click="$refs.doctorlist.prev()">&lt;</div>
            <div class="right" @click="$refs.doctorlist.next()">&gt;</div>
          </div>
        </div>

        <div class="bd3 flex-row" style="margin-bottom: 30px">
          <div @click="$router.push({path:'/jiuyizhinan',query:{id:3}})">
            <img
                class="pic2"
                referrerpolicy="no-referrer"
                src="../assets/01.png"
            />
          </div>
          <div @click="$router.push({path:'/doctorteam'})">
            <img
                class="pic2"
                referrerpolicy="no-referrer"
                src="../assets/02.png"
            />
          </div>
          <img
              @click="$router.push({path:'/jiuyizhinan',query:{id:2}})"
              class="img3"
              referrerpolicy="no-referrer"
              src="../assets/03.png"
          />
          <img
              @click="$router.push({path:'/jiuyizhinan',query:{id:1}})"
              class="pic3"
              referrerpolicy="no-referrer"
              src="../assets/04.png"
          />
          <img
              @click="$router.push('/yuyueguahao')"
              class="pic4"
              referrerpolicy="no-referrer"
              src="../assets/05.png"
          />
          <img
              @click="$router.push('/message')"
              class="pic5"
              referrerpolicy="no-referrer"
              src="../assets/06.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getDepartmentList, getDoctorList, getNewsList} from '@/api/api'
import {mapState} from "vuex";
import {reqBanner} from "../../../chengyue/src/api/api";
export default {
  data() {
    return {
      newsList:[],
      fuzhukeshiList: [], yijiyiyueList: [], linchuangList: [],
      current:1,
      newsCurrent:1,
      departmentList:[],
      bannerList:[],
      newsTitleList:[
        {
          title:'医院要闻',
          id:1,
        },
        {
          title:'媒体报道',
          id:2,
        },
        {
          title:'学术交流',
          id:3,
        },
        {
          title:'公益活动',
          id:4,
        },
      ],
      departmentCurrentList:[
        {
          title:'临床科室',
          id:1,
        },
        {
          title:'医技医学部',
          id:2,
        },
        {
          title:'辅助科室',
          id:3,
        }
      ],
      loopData0: [
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/ps07myy0h14rdsph2f3nl5c89pak4zvbcku2e814e27-69d4-47a5-af8f-f46cb91adcaf'
        },
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/pskncyvq3j4n0rx07zvuj5s55rq33hgmdqb4b807ad-c152-4127-bc49-60527de6880b'
        },
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/psjfp634f91klzuqgkbidgkic343n70uryf98d1708d-497f-4bf9-a7b8-ad4632e7a969'
        },
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/psyfvez5mn7lo76yb8qbavlj6j7yt8oseh554fdbaad-23f4-4272-b249-860f1ba0db9b'
        },
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/psiinoymamscj9x5jqarldqup3ekfbdeawde97f2de-1eb4-4879-b43b-cc4328371ce1'
        },
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/ps5p6smtrs4ctee7z4pgb3u52d3g6xum0j72090ab2-b262-4ac3-9b98-572046cad97b'
        },
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/ps572wlf9io4hof8krjvzyag63ew1sfvthi03f28cd4-c0fe-4cce-8336-7601cb962293'
        },
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/psjot93whwa1j39uls4pni86gjtv4lhpij77b790ddd-86c3-42ed-a025-e1b0b50d3997'
        },
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/ps7lys9mfd7gfvk612ewa9mhckivza0c4xr12efb712-75ec-4f22-8f66-9ddfb506e431'
        },
        {
          lanhuimage0:
              'https://lanhu.oss-cn-beijing.aliyuncs.com/ps8sgbhkxs05p2ophkek4nqqypwj6vsngij9460286b-630e-46ad-84f8-43d01326ad9b'
        }
      ],
      constants: {},
      doctorList:[],
    };
  },
  mounted() {
    this.loadDoctorList()
    this.loadLingchuang()
    this.loadYijiyiyue()
    this.loadFuzhu()
    this.loadNewsList(1)
    this.departmentList = this.linchuangList
    this.getBannerList()
  },
  methods: {
    toNewsInfo(id){
      console.log(id)
      this.$router.push({path:'/newsinfo',query:{id:id}
      })
    },
    async loadNewsList(type=null,pageNum=1,pageSize=5) {
      let query = {
      }
      query.newsType = type
      query.pageNum = pageNum
      query.pageSize = pageSize
      const res = await getNewsList(query)
      this.newsList = res.rows
      this.total = res.total
    },
    async loadDoctorList() {
      let query = {
        pageNum:1,
        pageSize:10
      }
      const res = await getDoctorList(query)
      console.log(res)
      this.doctorList = res.rows
      // console.log(res.rows)
    },
    switchDer(id){
      this.current = id
      if (id===1) {
        this.departmentList = this.linchuangList
      }
      if (id===2) {
        this.departmentList = this.yijiyiyueList
      }
      if (id===3) {
        this.departmentList = this.fuzhukeshiList
      }
    },
    newsChange(id){
      this.newsCurrent = id
      this.loadNewsList(id)
    },
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

    // 获取banner数据
    async getBannerList(){
      let query = {
        pageNum:1,
        pageSize:10
      }
      let result = await reqBanner(query)
      if(result.code === 200){
        this.bannerList = result.rows
      }
    }
  },
  computed:{
    ...mapState(["baseUrl"]),
  }
};
</script>

<style scoped lang="less">
.page {
  z-index: 1;
  position: relative;
  width: 100vw;
  overflow: hidden;
  .group1 {
    z-index: 2;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps6fq4du9dc5coky91gy04q8eqpgy3e6yc4047c0d-0484-40f5-954a-ae7b92c473a1)
    100% no-repeat;
    width: 100vw;
    justify-content: flex-start;
    .box1 {
      z-index: auto;
      width: 100vw;
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
        .mod1 {
          z-index: auto;
          width: 88.4vw;
          height: 13.07vw;
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
        }
      }
      .bd2 {
        background-color: rgba(159, 207, 255, 1);
        z-index: 18;
        height: 13.6vw;
        align-self: flex-start;
        width: 99.87vw;
        align-items: flex-end;
        .group2 {
          z-index: auto;
          width: 92.4vw;
          height: 13.6vw;
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
            font-size: 0;
            font-family: SourceHanSansCN-Regular;
            text-align: left;
            white-space: nowrap;
            line-height: 8vw;
            margin: 2.93vw 0 0 4.8vw;
            .word2 {
              z-index: auto;
              width: 47.47vw;
              height: 8vw;
              color: rgba(255, 255, 255, 1);
              font-size: 4.4vw;
              font-family: SourceHanSansCN-Regular;
              text-align: left;
              white-space: nowrap;
              line-height: 8vw;
            }
            .word3 {
              z-index: auto;
              width: 47.47vw;
              height: 8vw;
              color: rgba(255, 255, 255, 1);
              font-size: 2.93vw;
              font-family: SourceHanSansCN-Regular;
              text-align: left;
              line-height: 5.47vw;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .main2 {
            background-color: rgba(0, 128, 255, 1);
            z-index: 19;
            height: 13.6vw;
            margin-left: 18.14vw;
            width: 14.4vw;
            justify-content: flex-start;
            padding-top: 3.2vw;
            align-items: center;
            .pic1 {
              z-index: 20;
              width: 7.2vw;
              height: 6.67vw;
            }
          }
        }
      }
      .img2 {
        z-index: 21;
        width: 99.6vw;
        height: 53.34vw;
        align-self: flex-end;
        margin-right: 0.14vw;
      }
      .bd3 {
        z-index: auto;
        width: 92vw;
        height: 70.14vw;
        flex-wrap: wrap;
        margin: 5.46vw 0 0 4.26vw;
        .wrap1 {
          z-index: 22;
          height: 33.47vw;
          background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psbe8bkh8lvn8uhrljkh7s7ehhw8j0cklbp6161ba43-3b9e-42fe-8054-7d810ec88041)
          100% no-repeat;
          width: 27.6vw;
          justify-content: flex-end;
          padding-bottom: 12.4vw;
          align-items: center;
          margin: 0 4.66vw 3.2vw 0;
          .word4 {
            z-index: 32;
            width: 15.2vw;
            height: 3.87vw;
            color: rgba(255, 255, 255, 1);
            font-size: 4vw;
            font-family: SourceHanSansCN-Regular;
            text-align: left;
            white-space: nowrap;
            line-height: 4vw;
            display: block;
          }
        }
        .pic2 {
          z-index: 23;
          width: 27.6vw;
          height: 33.47vw;
          margin: 0 4.53vw 3.2vw 0;
          pointer-events: none;
          vertical-align: sub;
        }
        .img3 {
          z-index: 24;
          width: 27.6vw;
          height: 33.47vw;
          margin-bottom: 3.2vw;
        }
        .pic3 {
          z-index: 25;
          width: 27.6vw;
          height: 33.47vw;
          margin: 0 4.66vw 3.2vw 0;
        }
        .pic4 {
          z-index: 26;
          width: 27.6vw;
          height: 33.47vw;
          margin: 0 4.53vw 3.2vw 0;
        }
        .pic5 {
          z-index: 27;
          width: 27.6vw;
          height: 33.47vw;
          margin-bottom: 3.2vw;
        }
      }
      .bd4 {
        z-index: 28;
        height: 101.34vw;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psev0435le9autmh9202jjfqawkbovdrqda7689583-bd60-437c-8ce1-71ea18885dde)
        100% no-repeat;
        align-self: flex-start;
        width: 99.87vw;
        justify-content: flex-end;
        padding-bottom: 4.14vw;
        align-items: center;
        .outer1 {
          z-index: auto;
          width: 89.74vw;
          height: 91.6vw;
          .outer2 {
            z-index: auto;
            width: 87.6vw;
            height: 6vw;
            margin-left: 1.6vw;
            justify-content: space-between;
            .info2 {
              z-index: 37;
              width: 18.54vw;
              height: 4.8vw;
              color: rgba(0, 0, 0, 1);
              font-size: 4.8vw;
              font-family: NotoSansHans-Bold;
              text-align: left;
              white-space: nowrap;
              line-height: 4.8vw;
              margin-top: 0.8vw;
              display: block;
            }
            .box2 {
              z-index: 33;
              height: 6vw;
              background-color: #2495ff;
              width: 26vw;
              justify-content: flex-start;
              padding-top: 1.34vw;
              align-items: center;
              .info3 {
                z-index: 34;
                width: 11.2vw;
                height: 2.8vw;
                color: rgba(255, 255, 255, 1);
                font-size: 2.93vw;
                font-family: SourceHanSansCN-Regular;
                text-align: left;
                white-space: nowrap;
                line-height: 2.94vw;
                display: block;
              }
            }
          }
          .pic6 {
            z-index: 29;
            width: 89.74vw;
            height: 58.4vw;
            margin-top: 6.94vw;
          }
          .txt1 {
            z-index: 42;
            width: 49.6vw;
            height: 3.34vw;
            color: rgba(29, 29, 29, 1);
            font-size: 3.46vw;
            font-family: FZLTTHK--GBK1-0;
            text-align: left;
            white-space: nowrap;
            line-height: 3.47vw;
            align-self: flex-start;
            margin-top: 4.14vw;
            display: block;
            letter-spacing: 0.5px;
          }
          .infoBox1 {
            z-index: 49;
            width: 88.27vw;
            height: 9.6vw;
            color: rgba(98, 98, 98, 1);
            font-size: 3.46vw;
            font-family: NotoSansHans-DemiLight;
            text-align: left;
            line-height: 3.47vw;
            white-space: nowrap;
            align-self: flex-start;
            display: block;
            margin: 3.2vw 0 0 0.26vw;
            letter-spacing: .5px;
          }
        }
      }
      .info4 {
        z-index: 40;
        width: 18.94vw;
        height: 4.8vw;
        color: rgba(0, 0, 0, 1);
        font-size: 4.8vw;
        font-family: NotoSansHans-Bold;
        text-align: left;
        white-space: nowrap;
        line-height: 4.8vw;
        align-self: flex-start;
        display: block;
        margin: 5vw 0 8vw 6vw;
      }
      .box{
        position: relative;
        .bd5 {
          z-index: auto;
          justify-content: space-between;
          .van-swipe-item{
            display: flex;
            justify-content: center;
            align-items: center;
            .doctor-box{
              position: relative;
              img{
                width: 300px;
                height: 400px;
              }
              text-align: center;
            }
          }
          .img4 {
            z-index: 38;
            width: 37.07vw;
            height: 58.54vw;
          }
          .pic7 {
            z-index: 39;
            width: 37.07vw;
            height: 58.54vw;
          }
        }
        .left {
          position: absolute;
          top: 35%;
          left: 10%;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #2495ff;
          color: white;
          line-height: 60px;
          text-align: center;
        }
        .right {
          line-height: 60px;
          color: white;
          background-color: #2495ff;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          position: absolute;
          top: 35%;
          right: 10%;
          text-align: center;
        }
      }
      .bd6 {
        z-index: auto;
        width: 85.74vw;
        height: 6vw;
        justify-content: space-between;
        margin: 12.66vw 0 0 6.66vw;
        .word5 {
          z-index: 48;
          width: 18.67vw;
          height: 4.67vw;
          color: rgba(0, 0, 0, 1);
          font-size: 4.8vw;
          font-family: NotoSansHans-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 4.8vw;
          margin-top: 0.54vw;
          display: block;
        }
        .box3 {
          z-index: 35;
          height: 6vw;
          background-color: #2495ff;
          width: 26vw;
          justify-content: flex-start;
          padding-top: 1.34vw;
          align-items: center;
          .word6 {
            z-index: 36;
            width: 11.2vw;
            height: 2.8vw;
            color: rgba(255, 255, 255, 1);
            font-size: 2.93vw;
            font-family: SourceHanSansCN-Regular;
            text-align: left;
            white-space: nowrap;
            line-height: 2.94vw;
            display: block;
          }
        }
      }
      .bd7 {
        z-index: 3;
        //height: 129.07vw;
        //background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psx0cmcd8vtuan9if7tq0tnybhgt60vhpg1e2937e2-8106-4ac0-a835-1cf07316cdab) -3.34vw -2.8vw
        //no-repeat;
        background-size: 100.66vw 136.86vw;
        align-self: flex-start;
        width: 93.87vw;
        justify-content: flex-start;
        padding-top: 5.2vw;
        align-items: flex-end;
        margin: 6vw 0 0 2.8vw;
        .layer1 {
          z-index: auto;
          width: 93.6vw;
          //height: 89.07vw;
          .word7 {
            display: flex;
            justify-content: space-between;
            text-align: center;
            padding: 0 30px;
            z-index: 43;
            height: 3.6vw;
            color: rgba(29, 29, 29, 1);
            line-height: 3.6vw;
          }
          .main3 {
            z-index: 4;
            width: 93.6vw;
            height: 0.67vw;
            background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps10o0owrlp2lgzod4zf2575v8aemtgulzl880488f2-6df1-4781-9ed4-932c21e1f24b) -3.34vw -2.8vw
            no-repeat;
            background-size: 100.4vw 7.46vw;
            margin-top: 3.34vw;
          }
          .main4 {
            z-index: auto;
            width: 83.34vw;
            height: 74.14vw;
            flex-wrap: wrap;
            margin: 7.33vw 0 0 4.66vw;
            .img5 {
              z-index: 5;
              width: 39.74vw;
              height: 11.47vw;
              margin: 0 3.2vw 3.86vw 0;
              &:nth-child(2n) {
                margin-right: 0;
              }
              &:nth-last-child(-n + 2) {
                margin-bottom: 0;
              }
              &:nth-child(2n) {
                margin-right: 0;
              }
              &:nth-last-child(-n + 2) {
                margin-bottom: 0;
              }
            }
          }
        }
      }
      .pic8 {
        z-index: 47;
        width: 100vw;
        height: 30.14vw;
      }
      .bd8 {
        z-index: 44;
        width: 99.34vw;
        //height: 65.87vw;
        background-size: 100vw 77.86vw;
        .newsTitle{
          display: flex;
          padding: 40px 30px;
          justify-content: space-between;
          div{
            width: 150px;
            border-radius: 10px;
            text-align: center;
          }
        }
      }
      .bd9 {
        z-index: 46;
        width: 99.87vw;
        height: 31.74vw;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psho1r76m3e40lrzayqyb0mnk83vhkeohz75557867-4dae-4e83-93c7-290c615a089a) -0.14vw
        0vw no-repeat;
        background-size: 100vw 31.73vw;
        align-self: flex-start;
        margin-top: 1.07vw;
      }
      .bd10 {
        z-index: 45;
        width: 99.87vw;
        height: 64.54vw;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psmrz5wmui6qezap296m40b9m55ks2qjstjed0a28ef-4d70-4404-889a-2d08b1cdc932) -0.14vw
        0vw no-repeat;
        background-size: 100vw 64.53vw;
        align-self: flex-start;
      }
    }
  }
  .active{
    color: #1674B3;
  }
  .departmentList{
    display: flex;
    flex-flow: wrap;
    padding-left: 15px;
    li{
      color: #848484;
      margin-top: 50px;
      flex: 0 0 300px;
      margin-right: 70px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      border: 1px solid #ccc;
    }
    li:nth-of-type(2n){
      margin-right: 0;
    }
  }
  .newsactive{
    width: 150px;

    background-color: #1674B3;
    color: white;
  }
  .news-list {
    //height: 600px;
    padding:0 30px;
    li{
      line-height: 70px;
      height: 70px;
      font-size: 30px;
      color: #848484;
      border-bottom: 1px solid #cccccc;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}

/deep/ .van-swipe__indicators{
  display: none;
}
</style>
