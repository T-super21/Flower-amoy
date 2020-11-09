<template>
  <div class="Header">
    <div class="header">
      <span>购物车({{$store.state.cartList.length}})</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'CartHeader'
  }
</script>

<style lang="stylus" scoped>
  .Header
    .header
      position:fixed
      z-index:100
      width:100%
      top:0rem
      text-align:center
      height:1rem
      line-height:1rem
      font-weight:bold
      color:white
      font-size:.4rem
      background:#FF8F97
</style>
