<template>
  <div id="Home">
    <pro-loading id="Loading_1"></pro-loading>
    <div id="Display_1" style="display: none;">
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-catalog></home-catalog>
      <home-products></home-products>
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
    }
    ,
    mounted(){
    	this.getHomeData()
    },

    methods:{
      //加载请求
    	getHomeData(){
    		axios.get("/api/index.json").then(this.getHomeDataSucc)
    	},
      //获取index.json的数据
    	getHomeDataSucc(res){
    		res = res.data ;
    		if(res.data){
    			const data = res.data ;
    			this.swiperList = data.swiperList ;
    		}
    	}
    }
  }
</script>

<style lang="stylus" scoped>
</style>
