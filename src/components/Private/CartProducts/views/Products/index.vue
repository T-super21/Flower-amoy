<template>
  <div class="Products">
    <!-- 获取Vuex中的state的cartList并渲染 -->
    <div class="products">
      <ul>
        <li
          v-for="(item,index) in $store.state.cartList"
          :key="item.index"
          >
          <div class="left">
            <img :src="item.image" alt="图片">
          </div>
          <div class="right">
            <div class="top">
              <div>{{item.title}}</div>
              <i>{{item.note}}</i>
            </div>
            <div class="bottom">
              <i>￥{{item.price}}</i>
              <span>x{{item.count}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:'Products'
  }
</script>

<style lang="stylus" scoped>
  .Products
    .products
      margin-top:1rem
      margin-bottom:1rem
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
              i
                font-size:.4rem
                color:#FF7C3F
                font-weight:bold
              span
                float:right
                font-size:.4rem
                margin-right:.2rem


</style>
