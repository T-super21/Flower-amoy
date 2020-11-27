<template>
  <div class="usrForm">
    <div class="actform">
      <form action="" method="get">
        <span class="iconfont top">&#xe609;</span>
        <input type="email" class="inp" placeholder="user@qq.com" maxlength="17" required/></br>
        <span class="iconfont buttom">&#xe629;</span>
        <input type="password" class="inp" placeholder="密码、独立密码或授权码" maxlength="12" required/></br>
        <input type="submit" class="sub" value="登录"/>
      </form>
    </div>
  </div>
</template>

<script>
  export default{
    name:"UsrForm"
  }
</script>

<style lang="stylus" scoped>
  .usrForm
    background-color:rgba(0,0,0,0.4)
    margin:.5rem .6rem .5rem .6rem
    border-radius:.5rem
    .actform
      text-align:center
      line-height:1.5rem
      span
        position:relative
        top:.1rem
        right:.1rem
        font-size:.5rem
        color:lightblue
      span.top
        color:#C88597
      span.buttom
        color:#245EC2
      input.inp
        border-radius:.1rem
        width:4rem
        height:.6rem
      input.sub
        width:5rem
        height:.6rem
        color:white
        background:#32BE77
        border-radius:1rem
        font-size:.3rem
        font-weight:bold
        letter-spacing:.1rem
        margin:0rem auto
</style>
