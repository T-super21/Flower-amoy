<template>
  <div class="userHeader">
    <div class="header">
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3667248706,1082586138&fm=26&gp=0.jpg" alt="图片">
      <div class="name">小玄</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"UsHeader"
  }
</script>

<style lang="stylus" scoped>
  .userHeader
    .header
      width:2rem
      height:2rem
      border-radius:1.5rem
      text-align:center
      margin:1.5rem auto
      border:1px solid lightblue
      img
        line-height:3rem
        width:100%
        height:100%
        border-radius:1.5rem
      .name
        max-height:.5rem
        width:100%
        color:black
        text-align:center
        font-family:KaiTi
        margin-top:.3rem
        overflow:hidden
        font-size:.5rem




</style>
