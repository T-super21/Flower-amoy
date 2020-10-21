<template>
  <div class="Ship">
    <i class="i1">发货</i>
    <i class="i2">
      <span class="iconfont">&#xe64d;</span>
      <i>广东广州</i>
    </i>

  </div>
</template>

<script>
  export default{
    name:'Ship'
  }
</script>

<style lang="stylus" scoped>
.Ship
  // background:lightblue
  height:1rem
  .i1
    margin-left:.2rem
    line-height:1rem
    font-size:.4rem
    font-weight:bold
  .i2
    margin-left:.4rem
    i
      font-size:.4rem
      margin-left:.2rem
    span
      font-size:.4rem

</style>
