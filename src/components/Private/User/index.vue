<template>
  <div class="user">
    <div class="user_1">
      <img class="bgimg" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2529537377,1858410080&fm=15&gp=0.jpg" alt="图片">
      <div class="header">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3667248706,1082586138&fm=26&gp=0.jpg" alt="图片">
      </div>
        <div class="bg">
          <div class="actform">
            <form action="" method="post">
              <span>姓名:</span><input type="text" class="inp" placeholder="姓名" required/></br>
              <span>密码:</span><input type="password" class="inp" placeholder="密码" required/></br>
              <input type="submit" class="sub" value="登录"/>
            </form>
           </div>
          <div class="bottom">
            <div class="left">
              注册
            </div>
            <div class="right">
              忘记密码?
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
  export default{
    name:'UserLay'
  }
</script>
<style lang="stylus" scoped>
.user
  color:white
  .user_1
    img.bgimg
      position:fixed
      z-index:-1
      top:0rem
      height:100%
      width:100%
    .header
      color:red
      width:3rem
      height:3rem
      border-radius:1.5rem
      text-align:center
      margin:1rem auto
      border:1px solid lightblue
      img
        line-height:3rem
        width:100%
        height:100%
        border-radius:1.5rem
    .bg
      background-color:rgba(0,0,0,0.4)
      margin:.5rem .6rem 0rem .6rem
      border-radius:.5rem
      .actform
        text-align:center
        line-height:1rem
        span
          font-size:.4rem
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
