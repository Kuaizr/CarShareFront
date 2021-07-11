<!-- 图表的基本实现 -->
<template>
   <div class="chart-container">
       <div class="chart" ref="art">
           这里渲染图表
       </div>
   </div>
</template>

<script>

export default {
   props: {
       X: {
            type: Array,
       },
       Y: {
           type: Array,
       },
       option: {
           type: Object,
       }
   },
   data() {
       return {
           chart: null,
       };
   },
   //监听属性 类似于data概念
   mounted() {
       this.$nextTick(() => {
            this.initChart()
            this.updateChart()
        })
       
   },
   methods: {
       initChart(){
           this.chart = this.$echarts.init(this.$refs.art)
       },
       updateChart(){
           let optionOfthis = this.option
           optionOfthis.xAxis.data = this.X
           for(let i = 0;i < this.Y.length; i++){
               optionOfthis.series[i].data = this.Y[i]
           }
           this.chart.setOption(optionOfthis)
       }
   },
}
</script>
<style scoped>
.chart-container{
    width: 100%;
    height: 85%;
}
.chart{
    width: 100%;
    height: 100%;
}
</style>