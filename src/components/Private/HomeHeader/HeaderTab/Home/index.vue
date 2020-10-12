<template>
  <div id="Home">
    <home-swiper></home-swiper>
    <home-catalog></home-catalog>
    <home-products></home-products>
  </div>
</template>

<script>
  import HomeSwiper from '@/components/Private/HomeHeader/HomeSwiper' ;
  import HomeCatalog from '@/components/Private/HomeHeader/HomeCatalog' ;
  import HomeProducts from '@/components/Private/HomeHeader/HomeProducts' ;
  export default{
    name:'Home',
    components:{
      HomeSwiper,
      HomeCatalog,
      HomeProducts

    }
  }
</script>

<style lang="stylus" scoped>
</style>
