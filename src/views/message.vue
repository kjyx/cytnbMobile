<template>
<div>
  <h1>联系我们</h1>
  <div id="container"></div>
</div>
</template>

<script>
export default {
  name: "message",
  methods:{
    init(){
      var map = new BMapGL.Map('container');
      var point = new BMapGL.Point(114.662337,33.61048);
      map.centerAndZoom(point, 17);

      var marker = new BMapGL.Marker(point);
      var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
      map.addControl(zoomCtrl);
      map.addOverlay(marker);
      var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
      map.addControl(scaleCtrl);
// 创建信息窗口
      var opts = {
        width: 200,
        height: 100,
        title: '周口承悦糖尿病医院'
      };
      var infoWindow = new BMapGL.InfoWindow('地址：八一路与黄河路交汇处', opts);
// 点标记添加点击事件
      marker.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point); // 开启信息窗口
      });
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 610px;
  margin: 30px 0;
}
h1 {
  text-align: center;
  margin: 0px;
  line-height: 100px;
  border-bottom: 1px solid #1674B3;
}
</style>