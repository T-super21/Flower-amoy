<template>
  <div id="Home">
    <pro-loading id="Loading_1"></pro-loading>
    <div id="Display_1" style="display: none;">
      <home-swiper></home-swiper>
      <home-catalog></home-catalog>
      <home-products></home-products>
    </div>

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
