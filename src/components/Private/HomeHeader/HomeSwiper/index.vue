<template>
  <div id="Swiper" class="wrapper">
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          v-for="item of swiperList"
          :key="item.id"
        >
         <img :src="item.imgUrl" :alt="item.name">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
  export default{
    name:'HomeSwiper',
    //接收父组件传来的swiperList
    props:{
    	swiperList:Array
    },
    data(){
      return{
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true,
          autoplay:5000,
          speed:1500,
          autoplayDisableOnInteraction:false, //用户操作swiper之后，是否禁止autoplay
          mousewheel:true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background:#fff ;
.wrapper >>> .swiper-pagination-bullet
  border-radius:0rem
  height:.05rem
  width:.6rem
#Swiper
  .swiper
    margin:.1rem .2rem .2rem .2rem
    border-radius:.3rem
    height:3rem
    img
      width:100%
      height:100%

</style>
