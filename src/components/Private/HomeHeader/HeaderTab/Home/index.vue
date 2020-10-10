<template>
  <div id="Home">
    <home-swiper></home-swiper>
    <home-catalog></home-catalog>
  </div>
</template>

<script>
  import HomeSwiper from '@/components/Private/HomeHeader/HomeSwiper' ;
  import HomeCatalog from '@/components/Private/HomeHeader/HomeCatalog' ;
  export default{
    name:'Home',
    components:{
      HomeSwiper,
      HomeCatalog

    }
  }
</script>

<style>
</style>
