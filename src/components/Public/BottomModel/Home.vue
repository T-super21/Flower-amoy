<template>
  <div id="Bottom">
    <router-link tag="div" to="/home" class="nav-box">

        <span class="iconfont">&#xe601;</span>
        <p>首页</p>

    </router-link>
    <router-link tag="div" to="/cart" class="nav-box">

        <span class="iconfont">&#xe602;</span>
        <p>购物车</p>

    </router-link>
    <router-link tag="div" to="/user" class="nav-box">

        <span class="iconfont">&#xe600;</span>
        <p>我的</p>


    </router-link>
   </div>
</template>

<script>
  export default{
    name:'BottomModel'
    }
</script>

<style scoped>
</style>
