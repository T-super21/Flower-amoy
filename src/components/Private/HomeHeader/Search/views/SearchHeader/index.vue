<template>
  <div class="SearchHeader">
    <div class="header">
      <span class="iconfont">
        &#xe603;
      </span>
      <input
        type="text"
        class="Text"
        placeholder="搜索"
      />
    </div>
  </div>
</template>


<script>
  export default{
    name:'SearchHeader'
  }
</script>

<style lang="stylus" scoped>
  .SearchHeader
    .header
      position:fixed
      border:1px solid white
      margin-left:1rem
      top:.25rem
      height:.6rem
      border-radius:.5rem
      .Text
        line-height:.6rem
        font-size:.3rem
        border-radius:0 .5rem .5rem 0
      .iconfont
        background:#F3F3F3
        margin-left:.2rem
</style>
