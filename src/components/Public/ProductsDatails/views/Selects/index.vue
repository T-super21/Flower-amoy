<template>
  <div class="Selects">
    <i class="i1">选择</i>
    <i class="i2">规格</i>
    <i class="i3">
      <span class="iconfont">&#xe608;</span>
    </i>
  </div>
</template>

<script>
  export default{
    name:'Selects'
  }
</script>

<style lang="stylus" scoped>
.Selects
  // background-color:#B5D592
  height:1rem
  .i1
    margin-left:.2rem
    line-height:1rem
    font-size:.4rem
    font-weight:bold
  .i2
    margin-left:.4rem
  .i3
    float:right
    span
      line-height :1rem
      margin-right:.2rem
      font-size:.4rem
      // color:#C8C8C8
</style>
