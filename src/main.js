// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 底部导航
import '@/assets/style/css/Bottom-Model.css'
import '@/assets/style/iconfont.css'

// 解决产商和网络延迟
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import fastClick from 'fastClick'

//Homeheader
import '@/assets/style/css/HomeHeader.css'

//HomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//数据加载慢时，全局Loading加载效果
import ProLoading from '@/components/Private/Loading/ProLoading'
Vue.component('ProLoading',ProLoading) ;

//全局引入axios
import axios from 'axios'
Vue.prototype.axios = axios ;



Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper) //使用swiper

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
