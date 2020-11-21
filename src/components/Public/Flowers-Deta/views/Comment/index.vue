<template>
  <div class="floComment">
    <i class="i1">评价</i>
    <i class="i2">
      查看评论
      <span class="iconfont">&#xe608;</span>
    </i>
    <div class="i3">
      还没有评论哦~
    </div>
  </div>
</template>

<script>
  export default{
    name:"FloComment"
  }
</script>

<style lang="stylus" scoped>
.floComment
  // background:#FFE87C
  height:1.5rem
  .i1
    margin-left:.2rem
    line-height:1rem
    font-size:.4rem
    font-weight:bold
  .i2
    float:right
    line-height:1rem
    font-size:.4rem
    span
      margin-right:.2rem
      font-size:.4rem
      // color:#C8C8C8
  .i3
    text-align:center
    color:#C8C8C8
    font-size:.4rem
</style>
