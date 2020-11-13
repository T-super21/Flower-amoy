import Vue from 'vue'
import Vuex from 'vuex'

//使用Vuex
Vue.use(Vuex)

//创建Store对象
const store = new Vuex.Store({
  state:{
    //定义购物车中的数组，接收的是对象
    cartList:[]
  },
  mutations:{
    addCart(state,payload){
      let oldProduct = state.cartList.find(item => item.id === payload.id) ;
      //据id值判断数组中是否有相同商品
      if(oldProduct){
        //数量直接加1
        oldProduct.count += 1 ;
      }else{
        //没有就直接add count并push到cartList中
        payload.count = 1 ;
        payload.checked = true ;
        state.cartList.push(payload) ;
      }
    }
  }
})

//挂载Vue实例上
export default store
