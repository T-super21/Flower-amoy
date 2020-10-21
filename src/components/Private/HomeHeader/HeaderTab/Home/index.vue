<template>
  <div id="Home">
    <pro-loading id="Loading_1"></pro-loading>
    <div id="Display_1" style="display: none;">
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-catalog></home-catalog>
      <home-products class="products"></home-products>
    </div>

  </div>
</template>

<script>
  //引入axios
	import axios from 'axios'

  import HomeSwiper from '@/components/Private/HomeHeader/HomeSwiper' ;
  import HomeCatalog from '@/components/Private/HomeHeader/HomeCatalog' ;
  import HomeProducts from '@/components/Private/HomeHeader/HomeProducts' ;
  export default{
    name:'Home',
    components:{
      HomeSwiper,
      HomeCatalog,
      HomeProducts

    },
    data(){
    	return{
    		swiperList:[]
    	}
    },
    mounted(){
      //获取json数据
      this.axios.get("/api/index.json").then((res)=>{
        var ret = res.data.ret ;
        if(ret == true){
          var swiperList = res.data.data.swiperList ;
          this.swiperList = swiperList ;
        }else{
          console.log("Json 数据获取失败！") ;
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
#Home
  #Display_1
    .products
      margin-bottom:1rem
</style>
