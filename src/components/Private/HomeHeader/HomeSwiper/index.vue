<template>
  <div id="Swiper" class="wrapper">
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          v-for="item of headerimg"
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
    data(){
      return{
          headerimg:[
              {
                id:'001',
                imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=138731116,4014214238&fm=26&gp=0.jpg',
                name:'花'
              },
              {
                id:'002',
                imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1655716899,2719900506&fm=26&gp=0.jpg',
                name:'花'
              },
              {
                id:'003',
                imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1649738106,62513137&fm=26&gp=0.jpg',
                name:'花'
              }
          ],
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
