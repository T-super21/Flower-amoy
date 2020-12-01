<template>
  <div class="materBott">
    <div class="bottom_1">
      <div class="iconfont">&#xe607;</div>
      <i>客服</i>
    </div>
    <router-link tag="div" to="/cart" class="bottom_1">
      <div class="iconfont">&#xe602;</div>
      <i>购物车</i>
    </router-link>
    <div
      class="bottom_2 bone"
      @click="AddToCart"
      >
      加入购物车
    </div>
    <div class="bottom_2 btwo">
      立即购买
    </div>
  </div>
</template>

<script>
  export default{
    name:"MaterBottom",
    methods:{
      AddToCart(){
        this.$emit('addCart') ;
      }
    }
  }
</script>

<style lang="stylus" scoped>
.materBott
  background:#FFFFFF
  width:100%
  height:1rem
  display:flex
  div
    flex:1
    text-align:center
  div.bottom_1
    line-height:.55rem
    font-size:.2rem
    .iconfont
      font-size:.5rem
      color:#6B6B6B
  div.bottom_2
    color:#FFFFFF
    line-height:1rem
    font-size:.3rem
    font-weight:bold

  div.bone
    background:#E4C96B
  div.btwo
    background:#454545
</style>
