<template>
  <div class="usrBtn">
    <div class="bottom">
      <div class="left">注册</div>
      <div class="right">忘记密码?</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"UserBtn"
  }
</script>

<style lang="stylus" scoped>
  .usrBtn
    .bottom
      width:3rem
      height:1rem
      margin:0 auto
      .left
        float:left
        line-height:1rem
      .right
        float:right
        line-height:1rem
</style>
