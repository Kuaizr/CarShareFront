import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//挂载echart原型对象
// Vue.prototype.$echarts = window.echarts
import * as echarts from 'echarts'
// import { GridComponent } from 'echarts/components';
// echarts.use([GridComponent]);
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
