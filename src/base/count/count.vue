<!-- 计数器组件 -->
<template>
   <div>
       <div class="tit">实时行驶车辆（辆）</div>
       <div class="nums" ref="nums">
           <div v-for="(v,i) in arr" :class='chooseClass(v)' :key="i">{{v}}</div>
       </div>
   </div>
</template>

<script>

export default {
    data(){
        return {
            arr:[]
        }
    },
   props:{
       num: {
            type: Number,
            default:5436,
       },
   },
   mounted(){
       this.getChild()
   },
   methods: {
       getChild(){
           let n = this.num
           let temp = []
           let res = []
           while(n){
               temp.push(n % 10)
               n = Math.floor(n / 10) 
           }
           for(let i = 0; i < temp.length; i++){
               if(i && i % 3 == 0){
                   res.push(",")
               }
               res.push(temp[i]+'')
           }
           this.arr = res.reverse()
       },
       chooseClass(v){
           if(v == ","){
               return "ditem"
           }else{
               return "citem"
           }
       }
   },
   watch:{
       num(newnum,oldnum){
           this.getChild()
       }
   }
}
</script>
<style scoped>
  .tit{
    color: aliceblue;
    font-size: 25px;
  }
  .nums{
      flex: auto;
      text-align: center;
      margin-top: 30px;
  }
  .citem{
      display: inline-block;
      width: 45px;
      height: 95px;
      background-color: #0388fd;
      font-size: 80px;
      color: aliceblue;
      margin-left: 5px;
  }
  .ditem{
      display: inline-block;
      font-size: 80px;
      color: aliceblue;
  }
</style>