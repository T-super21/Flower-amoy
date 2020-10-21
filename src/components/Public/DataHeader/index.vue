<template>
  <div class="Header">
    <div class="top" id="Top">
      <i >商品</i>
      <i >评价</i>
      <i>详情</i>
    </div>
  </div>
</template>

<script>
  export default{
    name:'DataHeader'
  }
</script>

<style lang="stylus" scoped>
.Header
  height:1rem
  background:lightblue
  display:none
  .top
    display:flex
    text-align:center
    line-height:1rem
    font-size:.4rem
    // display:inline-block
    i
      flex:1
    .bottom
      border-bottom:solid 2px red
</style>
