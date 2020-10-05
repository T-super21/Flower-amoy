<template>
  <div id="Home">
    <home-header></home-header>
    <bottom-model></bottom-model>

<!-- 	keep-alive解决每次切换路由时重载慢的问题！keep-alive:加载切换后有缓存！-->    
    <keep-alive>
      <router-view/>
    </keep-alive>


  </div>
</template>

<script>
    import BottomModel from '@/components/Public/BottomModel/Home';
    import HomeHeader from '@/components/Private/HomeHeader/HomeHeader';
export default{
  name:'Home',
  components:{
    BottomModel,
    HomeHeader
  }
  }
</script>

<style>
</style>
