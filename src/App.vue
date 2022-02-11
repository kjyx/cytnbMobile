<template>
  <div id="app">
    <Header/>
    <mainbanner v-if="!$route.meta.bannerShow"></mainbanner>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/Footer";
import mainbanner from "@/components/mainbanner";
export default {
  data() {
    return {
      bannerShow:true
    }
  },
  components:{
    Footer,
    Header,
    mainbanner
  },
  computed:{
  },
  watch:{
  },
  mounted() {
  }
}
</script>
<style lang="less">
#app{
  max-width: 100vw;
  overflow: hidden;
}
</style>
