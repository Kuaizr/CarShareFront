<template>
  <div id="app" :style=note>
    <div class="header">
      <div class="left"></div>
      <div class="title">驾驶行为可视化平台</div>
      <div class="right"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      note: {
            backgroundImage: "url(" + require("../src/assets/img/background.png") + ")",
            backgroundRepeat: "repeat-y",
            }
    }
  }
}
</script>

<style>
  
  .header{
    /* margin-top: 10px; */
    margin-bottom: 10px;
  }
  .left{
    position: relative;
    left: 0px;
    top: -10px;
    display: inline-block;
    width: 37%;
    border:2px solid rgb(0, 137, 255);
    background-color: rgb(0, 137, 255);
  }
  .title{
    text-align: center;
    padding: 0 33px 0 33px;
    display: inline-block;
    font-size: 33px;
    border-left:4px solid rgb(0, 137, 255);
    border-right:4px solid rgb(0, 137, 255);
    color: rgb(84, 246, 252);
  }
  .right{
    position: relative;
    top: -10px;
    right: 0px;
    display: inline-block;
    width: 37.1%;
    border:2px solid rgb(0, 137, 255);
    background-color: rgb(0, 137, 255);
  }
</style>
