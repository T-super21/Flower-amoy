<template>
  <div class="ProductsDatails">
    <div class="header">
      <span>————</span>
      商品详情
      <span>————</span>
    </div>
    <div class="border">
      <i>文字说明:玫瑰</i>
      <div class="Img">
        <img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1406916636,3053694953&fm=26&gp=0.jpg" alt="图片">
        <img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3574281276,2304074473&fm=26&gp=0.jpg" alt="图片">
        <img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1091934395,3795795842&fm=26&gp=0.jpg" alt="图片">
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'ProductsDatails'
  }
</script>

<style lang="stylus" scoped>
.ProductsDatails
  margin-bottom:1rem
  .header
    text-align:center
    background:#F3F3F3
    font-size:.4rem
    span
      color:#E6E6E6
  .border
    margin-top:.2rem
    // background:lightblue
    i
      margin:.2rem .2rem .2rem .2rem
      font-size:.3rem
    div.Img
      margin:.2rem .2rem .2rem .2rem
      img
        width:100%
        margin-bottom:.2rem
</style>
