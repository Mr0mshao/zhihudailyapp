import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index.js'
import VueResource from 'vue-resource'
import store from './vuex/store.js'
Vue.use(VueResource)

//日期全局过滤器
Vue.filter("formatDate", function (value) {
  var _week = new Date()
  _week.setFullYear(parseInt(value.substr(0,4)))
  _week.setMonth(parseInt(value.substr(4,2)-1)) //月份从0开始计算
  _week.setDate(parseInt(value.substr(6,2)))
  // console.log(value.substr(0,4),value.substr(4,2),value.substr(6,2),_week)
  var weekday=new Array(7)
	weekday[0]="星期天"
	weekday[1]="星期一"
	weekday[2]="星期二"
	weekday[3]="星期三"
	weekday[4]="星期四"
	weekday[5]="星期五"
	weekday[6]="星期六"
  var middleState = value.substring(4).split("");
  middleState.splice(2,0,"月")
  middleState.splice(middleState.length,0,"日")
  var middleState2 = middleState.toString().replace(/,/g,'')+weekday[_week.getDay()]
  return middleState2
})


FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
