import{
	ADD_COUNTER,
	ADD_TO_CART
} from '@/store/mutations_types.js'

export default{
    //数量增加
    [ADD_COUNTER](state,payload){
      payload.count ++ ;
    },
    //增加到购物车
    [ADD_TO_CART](state,payload){
      state.cartList.push(payload) ;
    }
  }
