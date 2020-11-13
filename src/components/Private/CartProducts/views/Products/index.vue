<template>
  <div class="Products">
    <!-- 获取Vuex中的state的cartList并渲染 -->
    <div class="products">
      <ul>
        <li
          v-for="(item,index) in $store.state.cartList"
          :key="item.index"
          >
          <checkbox 
            :is-checked="item.checked" 
            @click.native="checkclick(index)"/>
          <div class="left">
            <img :src="item.image" alt="图片">
          </div>
          <div class="right">
            <div class="top">
              <div>{{item.title}}</div>
              <i>{{item.note}}</i>
            </div>
            <div class="bottom">
              <div class="bott_left">￥{{parseFloat(item.price * item.count).toFixed(2)}}</div>
              <div class="bott_center">
                <button @click="delCount(index)">-</button>
                <i>{{item.count}}</i>
                <button @click="addCount(index)">+</button>
            </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Checkbox from '@/components/Private/CartProducts/views/Checkbox'
  export default{
    name:'Products',
    methods:{
     //减小数量
      delCount(index){
    //  		console.log("-") ;
        if(this.$store.state.cartList[index].count > 1){
          this.$store.state.cartList[index].count -- ;
        }
      },
     //增加数量
      addCount(index){
    //  		console.log("+") ;
        if(this.$store.state.cartList[index].count < 9){
          this.$store.state.cartList[index].count ++ ;
        }
      },
      //点击单选按钮后，改模型的checked状态(取反)
      checkclick(index){
        this.$store.state.cartList[index].checked = ! this.$store.state.cartList[index].checked ;
      }
    },
    components:{
      Checkbox
    }
  }
</script>

<style lang="stylus" scoped>
  .Products
    .products
      margin-top:1rem
      margin-bottom:1.6rem
      ul
        li
          height:2.5rem
          margin-top:.2rem
          display:flex
          background:white
          border:1px solid white

          .left
            margin:.1rem .1rem .1rem .1rem
            float:left
            width:1.6rem
            border-radius:.2rem
            img
              width:100%
              height:100%
              border-radius:.2rem
          .right
            height:2.5rem
            float:right
            background:white
            flex:1
            .top
              margin:.1rem .2rem .2rem .2rem
              div
                font-size:.4rem
              i
                display:block
                margin-top:.3rem
                color:#989798
            .bottom
            	display:flex
            	line-height:.5rem
            	.bott_left
            		flex:1
            		color:#FF6921
            		font-size:.4rem
            		font-weight:bold
            	.bott_center
            		flex:1
            		button
            			width:.8rem
            			font-weight:bold


</style>
