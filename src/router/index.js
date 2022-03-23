import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/index',
    meta: {
      title: "河南科技职业大学第五附属医院-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    }
  },
  {
    path: '/index',
    name: 'Home',
    component: index,
    meta:{
      title: "河南科技职业大学第五附属医院-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
      bannerShow:true
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "关于我们-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import(/* webpackChunkName: "about.vue" */ '../views/about.vue')
  },
  {
    path: '/test',
    name: 'About',
    component: () => import('../views/test.vue')
  },
  {
    path: '/newscenter',
    name: '新闻中心',
    meta: {
      title: "新闻中心-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/newscenter.vue')
  },
  {
    path: '/doctorteam',
    name: '专家团队',
    meta: {
      title: "专家团队-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('@/views/doctorTeam')
  },
  {
    path: '/doctorInfo/:id?',
    name: 'doctorInfo',
    component: () => import('../views/doctorInfo.vue')
  },
  {
    path: '/departmentlist',
    name: '科室列表',
    meta: {
      title: "科室列表-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/departmentList.vue')
  },
  {
    path: '/departmentInfo',
    name: '科室详情',
    meta: {
      title: "科室详情-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/departmentInfo.vue')
  },
  {
    path: '/message',
    name: '联系我们',
    meta: {
      title: "联系我们-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/message.vue')
  },
  {
    path: '/aboutme',
    name: '联系我们',
    meta: {
      title: "联系我们-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/aboutme.vue')
  },
  {
    path: '/jiuyizhinan',
    name: '就医指南',
    meta: {
      title: "就医指南-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/jiuyizhinan.vue')
  },
  {
    path: '/kepubingli',
    name: '就医指南',
     meta: {
      title: "就医指南-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/kepubingli.vue')
  },
  {
    path: '/dangjianwenhua',
    name: '党建文化',
     meta: {
      title: "党建文化-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/dangjianwenhua.vue')
  },
  {
    path: '/newsInfo',
    name: '新闻详情',
     meta: {
      title: "新闻详情-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/newsInfo.vue')
  },
  {
    path: '/jiuzhenliucheng',
    name: '就诊流程',
     meta: {
      title: "就诊流程-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/jiuzhenliucheng.vue')
  },
  {
    path: '/zhenshifenbu',
    name: '诊室分布',
     meta: {
      title: "诊室分布-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/zhenshifenbu.vue')
  },
  {
    path: '/yuyueguahao',
    name: '留言',
     meta: {
      title: "留言-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/messageme.vue')
  },
  {
    path: '/yibaozhengce',
    name: 'yibaozhengce',
     meta: {
      title: "医保政策-周口承悦糖尿病医院",
      keywords:"河南科技职业大学第五附属医院,周口承悦糖尿病医院,周口糖尿病医院",
      description:"河南科技职业大学附属第五医院(周口承悦糖尿病医院) 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市城镇职工、城乡居民医保定点医",
    },
    component: () => import('../views/yibaozhengce.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title=to.meta.title
    next()
  }else {
    next()
  }
})

router.afterEach(()=>{
  window.scrollTo(0,0)
})
export default router
