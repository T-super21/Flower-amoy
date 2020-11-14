import{
	ADD_COUNTER,
	ADD_TO_CART
} from '@/store/mutations_types.js'

export default{
    addCart(context,payload){
      return new Promise((resolve,reject) =>{
        //据id值判断数组中是否有相同商品
        let oldProduct = context.state.cartList.find(item => item.id === payload.id) ;
        if(oldProduct){
          //数量直接加1
          // oldProduct.count += 1 ;
          context.commit(ADD_COUNTER,oldProduct) ;
          resolve("该商品数量 + 1") ;
        }else{
          //没有就直接add count并push到cartList中
          payload.count = 1 ;
          payload.checked = true ;
          // state.cartList.push(payload) ;
          context.commit(ADD_TO_CART,payload) ;
          resolve("成功加入购物车") ;
        }
      })
    }
  }
