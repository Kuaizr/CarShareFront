<!-- 热力图 -->
<template>
   <div class="hotmap">
       <div ref="hotmap"></div>
   </div>
</template>

<script>
import heatmap from 'echarts/lib/chart/heatmap';//热力图

import bmap from 'echarts/extension/bmap/bmap';//bmap

export default {
   components: {},
   data() {
       return {
           option:{
                animation: false,
                bmap: {
                    center: [120.13066322374, 30.240018034923],
                    zoom: 14,
                    roam: true
                },
                visualMap: {
                    show: false,
                    top: 'top',
                    min: 0,
                    max: 5,
                    seriesIndex: 0,
                    calculable: true,
                    inRange: {
                        color: ['blue', 'blue', 'green', 'yellow', 'red']
                    }
                },
                series: [{
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    data: [],
                    pointSize: 5,
                    blurSize: 6
                }],
                grid:{
                    height:130,
                    top: 13
                }
            },
            chart: null,
       };
   },
   //监听属性 类似于data概念
   mounted(){
       this.initChart()

       this.chart.setOption(this.option)
    var bmap = this.chart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
   },
   methods: {
       initChart(){
           this.chart = this.$echarts.init(this.$refs.hotmap)
       },
   },
}
</script>
<style scoped>
.hotmap{
    width: 100%;
    height: 100%;
}
</style>