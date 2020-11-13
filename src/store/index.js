import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'

//使用Vuex
Vue.use(Vuex)

//创建Store对象
const state={
  //定义购物车中的数组，接收的是对象
  cartList:[]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

//挂载Vue实例上
export default store
