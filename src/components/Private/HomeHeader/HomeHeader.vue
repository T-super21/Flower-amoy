<template>
  <div id="home-header">
    <div class="Header fontcolor">
    	<i>花淘吧</i>
      <span>让我们一起淘天下</span>
    </div>
    <div class="Search">
      <div class="homesearch">
        <span class="iconfont ">&#xe603;</span>
        发现你要的商品
      </div>
      <span class="homenews iconfont">
        &#xe604;
      </span>
    </div>
    <div class="Model fontcolor">
      <ul>
        <router-link tag="li" to="/home/home">首页</router-link>
        <router-link tag="li" to="/home/flowers">花卉</router-link>
        <router-link tag="li" to="/home/materials">资材</router-link>
        <router-link tag="li" to="/home/gardening">园艺</router-link>
        <router-link tag="li" to="/home/gifts">礼品</router-link>
        <router-link tag="li" to="/home/Materials">养护</router-link>
        <!-- <div class="sort">
          <span>图标</span>
          分类
        </div> -->
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:'HomeHeader'
  }
</script>

<style lang="stylus" scoped>
.fontcolor
  color:#F0F0F0

.Header
  padding-top:.2rem
  padding-bottom:.2rem
  margin-left:0.2rem
  width:100%
  i
    font-size:0.5rem
  span
    font-size:0.3rem
    margin-left:0.5em

.Search
  display:flex
  margin-left:.2rem

  margin-bottom:.2rem
  .homesearch
    flex:1
    height:.64rem
    background-color:white
    border-radius:.5rem
    span
      line-height:.64rem
  .homenews
    line-height:.64rem
    span
      float:right
.Model
  height:.64rem
  line-height:.64rem
  ul
    display:flex
    li
      flex:1
      float:left
      text-align:center
      font-size:.3rem
      transition:0.5s
    .router-link-active
      font-size:.4rem
      transition:0.5s
      // border-bottom:10px solid red
</style>
