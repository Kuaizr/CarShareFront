<template>
  <div>
    <div class="bdiv choose">
      <div class="C-area">
        选择区域<br>
        <select>
          <option value ="1">成都市金牛区</option>
          <option value ="2">成都市成化区</option>
          <option value="3">成都市青羊区</option>
          <option value="4">成都市锦江区</option>
      </select>
      </div>
      <div class="C-way">
        选择道路<br>
        <select>
          <option value ="1">二环高架路</option>
          <option value="">凤凰山高架路</option>
          <option value="">新泉路</option>
          <option value="">北大街</option>
          <option value="">新华大道江汉路</option>
          <option value="">西北桥河边街</option>
          <option value="">人民北路</option>
          <option value="">府河桥西路</option>
          <option value="">八里桥路</option>
          <option value="">福祥街</option>
          <option value="">交桂二巷</option>
          <option value="">凤凰山高架</option>
          <option value="">花径路</option>
          <option value="">站西桥东巷</option>
          <option value="">顺沙巷</option>
          <option value="">吉祥街</option>
          <option value="">公交专用道</option>
          <option value="">中同仁路</option>
          <option value="">金仙桥路</option>
          <option value="">新华大道沙湾路</option>
          <option value="">金荣巷</option>
          <option value="">树蓓巷</option>
          <option value="">西安北路</option>
          <option value="">万和路</option>
          <option value="">马鞍北路</option>
          <option value="">新村河边街</option>
          <option value="">为民路</option>
          <option value="">站前路</option>
          <option value="">站西桥西巷</option>
          <option value="">双耀二路</option>
          <option value="">圃园南一路</option>
          <option value="">西青路</option>
          <option value="">荆竹坝西街</option>
          <option value="">中环路金府路段</option>
          <option value="">星汉路</option>
          <option value="">沙洲街</option>
          <option value="">曲水路</option>
          <option value="">赛云台东二路</option>
      </select>
      </div>
      <div class="C-date">
        选择日期<br>
        <input class="select" type="date" id="txtDate" />
      </div>
      <div class="C-time">
        选择时间<br>
        <select>
          <option value="0">0：00</option>
          <option value="1">1：00</option>
          <option value="2">2：00</option>
          <option value="3">3：00</option>
          <option value="4">4：00</option>
          <option value="5">5：00</option>
          <option value="6">6：00</option>
          <option value="7">7：00</option>
          <option value="8">8：00</option>
          <option value="9">9：00</option>
          <option value="10">10：00</option>
          <option value="11">11：00</option>
          <option value="12">12：00</option>
          <option value="13">13：00</option>
          <option value="14">14：00</option>
          <option value="15">15：00</option>
          <option value="16">16：00</option>
          <option value="17">17：00</option>
          <option value="18">18：00</option>
          <option value="19">19：00</option>
          <option value="20">20：00</option>
          <option value="21">21：00</option>
          <option value="22">22：00</option>
          <option value="23">23：00</option>
      </select>
      </div>
    </div>
    <div class="bdiv ways">
      <div class="bdiv tag">
        道路情况
      </div>
      <div class="car">
        <div class="imgwrapper">
          <img src="../assets/img/car.png" alt="">
        </div>
        <div class="ba">
          <span style="margin-left:40px;color:#fff;font-size:14px;">道路等级</span><br>
          <span style="margin-left:40px;color:#ffff40;font-size:14px;">干道</span>
        </div>
      </div>
      <div class="cave">
        <div class="imgwrapper">
          <img src="../assets/img/cave.png" alt="">
        </div>
        <div class="ba">
          <span style="margin-left:40px;color:#fff;font-size:14px;">隧道</span><br>
          <span style="margin-left:40px;color:#fe5968;font-size:14px;">否</span>
        </div>
      </div>
      <div class="qiao">
        <div class="imgwrapper">
          <img src="../assets/img/qiao.png" alt="">
        </div>
        <div class="ba">
          <span style="margin-left:40px;color:#fff;font-size:14px;">桥梁</span><br>
          <span style="margin-left:40px;color:#f6c846;font-size:14px;">是</span>
        </div>
      </div>
      <div class="cloud">
        <div class="imgwrapper">
          <img src="../assets/img/cloud.png" alt="">
        </div>
        <div class="ba">
          <span style="margin-left:40px;color:#fff;font-size:14px;">天气</span><br>
          <span style="margin-left:40px;color:#46be3e;font-size:14px;">多云</span>
        </div>
      </div>
    </div>
    <div class="bdiv figure1">
      <div class="figtitle">危险驾驶行为区域热力图
        <select class="s-map" v-model="val">
          <option value ="1">超速</option>
          <option value ="2">急加(减)速</option>
          <option value="3">相对危险</option>
      </select>
      </div>
      <Hotmap :val="value"></Hotmap>
    </div>
    <div class="bdiv figure2">
      <div class="figtitle">成都市24小时危险驾驶次数</div>
      <Chart :X="this.time" :Y="this.counts" :option="this.option2"></Chart>
    </div>
    <div class="bdiv figure3">
      <div class="figtitle">实时危险次数</div>
      <Chart :X="this.grade" :Y="this.nums" :option="this.option3"></Chart>
    </div>
    <div class="bdiv figure4">
      <div class="figtitle">危险区域排行</div>
      <Chart :X="this.areas" :Y="this.scores" :option="this.option4"></Chart>
    </div>
    <div class="count">
      <Count :num="num"></Count>
    </div>
  </div>
</template>

<script>

import Chart from '../base/charts/charts.vue' 
import Hotmap from '../base/hotmap/hotmap.vue'
import Count from '../base/count/count.vue'

export default {
  name: 'm',
  components:{
    Chart,
    Hotmap,
    Count
  },
  data () {
    return {
      val:1,
      value:1,
      points:[],
      num:5346,
      areas: ['No.1\n\n金牛区','No.2\n\n成华区','No.3\n\n青羊区','No.4\n\n锦江区'],
      scores: [[44,30,22,6]],
      option4:{
         xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: "#fff",
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
			      max: 70,
			      interval: 10,
            splitLine:{
        　　　　show:false
        　　},
            axisLine:{
               show: true
            }
        },
        series: [{
            type: 'pictorialBar',
            symbol: 'triangle',
            label: {
              show: true,
              position: 'top',
              textStyle:{
                fontSize: 10,
                color: "#0089ff"
              }
            },
        }]
      },
      grade:['相对危险','急加(减)速','超速'],
      nums:[[12,16,9]],
      option3:{
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: "#b0b3c7",
                }
            }
        },
        yAxis: {
            type: 'value',
        },
        series: [{
            type: 'bar',
            barWidth:20,
            itemStyle: {
                width:20,
                barBorderRadius: 40,
                color: '#ffff40',
            },
            label: {
              show: true,
              position: 'top',
              textStyle:{
                fontSize: 10,
                color: "#0089ff"
              }
            },
        }],
        grid:{
          height:85,
          top: 40
        }
      },
      time:['0时','1时','2时','3时','4时','5时','6时','7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时',],
      counts:[[10,23,54,23,67,400,600,576,345,243,354,345,67,234,56,343,535,655,232,453,212,232,10,0],
              [10,23,54,23,67,243,354,345,67,234,56,343,400,600,576,345,535,655,232,453,212,232,10,0],
              [10,23,56,343,535,655,232,453,212,232,10,0,54,23,67,400,600,576,345,243,354,345,67,234]],
      option2:{
        legend:{
          orient: 'vertical',
          x:'right',      //可设定图例在左、右、居中
          padding:[0,20,0,20],
          data:['急加(减)速','相对危险','超速'],
          textStyle:{
              fontSize: 14,//字体大小
              color: '#ffffff'//字体颜色
          },
        },
        xAxis:{
          type: 'category',
          axisLabel: {
            interval:0,
            rotate:40
          },
          axisLine: {
                lineStyle: {
                    color: "#fff",
                }
            }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle:{
                 color: ['#6a6e83'],
                 width: 1,
                type: 'solid'
            }
          }
        },
        series:[
          {
            name: '相对危险',
            type: 'line',
            color:['red'],
            symbolSize:10,
            label: {
              show: true,
              position: 'top',
              textStyle:{
                fontSize: 10,
                color: "red"
              }
            },
          },
          {
            name: '急加(减)速',
            type: 'line',
            color:['green'],
            symbolSize:10,
            label: {
              show: true,
              position: 'top',
              textStyle:{
                fontSize: 10,
                color: "green"
              }
            },
          },
          {
            name: '超速',
            type: 'line',
            color:['yellow'],
            symbolSize:10,
            label: {
              show: true,
              position: 'top',
              textStyle:{
                fontSize: 10,
                color: "yellow"
              }
            },
          }
        ],
        grid:{
          height:130,
          top: 13
        }
      }
    }
  },
  watch:{
      val(val,oldval){
        console.log(val)
        if(val == 1){
          this.value = 1
        }else if(val == 2){
          this.value = 2
        }else{
          this.value = 3
        }
      }
  }
}
</script>


<style scoped>
  @import '../assets/css/css.css';
  .choose{
    width: 400px;
    height: 250px;
  }
  .ways{
    position: absolute;
    top: 350px;
    width: 400px;
    height: 400px;
  }
  .tag{
    position: relative;
    width: 120px;
    height: 50px;
    left: 33%;
    top: -25px;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    color: aliceblue;
    font-size: 20px;
    background-color: rgb(0,137,255);
    margin: 3px;
  }
  .figure1{
    position: absolute;
    left: 490px;
    top: 60px;
    width:550px ;
    height: 450px;
  }
  .figure2{
    position: absolute;
    left: 430px;
    top: 550px;
    width: 670px;
    height: 200px;
  }
  .figure3{
    position: absolute;
    top: 60px;
    right: 10px;
    width: 400px;
    height: 200px;
  }
  .figure4{
    position: absolute;
    right: 10px;
    top: 270px;
    width: 400px;
    height: 280px;
  }

  .figtitle{
    color: aliceblue;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 3px;
  }
  .C-area{
    position: relative;
    left: 30px;
    top: 30px;
    color: aliceblue;
    font-size: 24px;
  }
  .C-way{
    position: relative;
    left: 230px;
    top: -42px;
    color: aliceblue;
    font-size: 24px;
  }
  .C-date{
    position: relative;
    left: 30px;
    top: 20px;
    color: aliceblue;
    font-size: 24px;
  }
  .C-time{
    position: relative;
    left: 230px;
    top: -52px;
    color: aliceblue;
    font-size: 24px;
  }
  .select{
    width: 130px;
    height: 35px;
    border-radius: 10px;
  }
  select{
    width: 130px;
    height: 35px;
    border-radius: 10px;
  }
  .s-map{
    width: 150px;
    height: 30px;
    position: relative;
    left: 160px;
  }
  .count{
    position: absolute;
    width: 400px;
    height: 180px;
    right: 10px;
    top: 570px;
  }
  .imgwrapper{
    text-align: center;
    width: 100px;
    height: 60px;
    background-color: #0738c9;
    margin-left: 50px;
    margin-bottom: -20px;
    z-index: 999;
  }
  .ba{
    position: relative;
    left: 150px;
    top: -20px;
    height: 40px;
    width: 190px;
    background-image: url('../assets/img/ba.png');
  }
</style>
