<template>
  <div id="ProductsDatails" class="datails-slide">
    <back></back>
    <data-header :class="isFixed? 'fixed':''" ></data-header>
    <swiper-list ref="swiper"></swiper-list>
    <ship class="ship" ref="ship"></ship>
    <selects class="selects" ref="select"></selects>
    <comment class="comment" ref="comment"></comment>
    <products-datails class="prodatails" ref="datails"></products-datails>
    <bottom class="bottom"></bottom>
  </div>
</template>

<script>
  import Back from '@/components/Public/Back'
  import SwiperList from '@/components/Public/ProductsDatails/views/SwiperList'
  import Ship from '@/components/Public/ProductsDatails/views/Ship'
  import Comment from '@/components/Public/ProductsDatails/views/Comment'
  import Selects from '@/components/Public/ProductsDatails/views/Selects'
  import Bottom from '@/components/Public/ProductsDatails/views/Bottom'
  import ProductsDatails from '@/components/Public/ProductsDatails/views/ProductsDatails'
  import DataHeader from '@/components/Public/DataHeader'

  export default{
    name:'ProductsList',
    components:{
      Back,
      SwiperList,
      Ship,
      Comment,
      Selects,
      ProductsDatails,
      Bottom,
      DataHeader
    },
    data(){
      return{
        isFixed:false,
        isbottom:false
      }
    },
    mounted(){
      //监听屏幕滚动事件
      window.onscroll = this.headlescroll ;
    },
    methods:{
      headlescroll(){
        //获取swiper-list 的height
        let swiper = this.$refs.swiper.$el.clientHeight ;
        let comment = this.$refs.comment.$el.clientHeight ;
        let ship  = this.$refs.ship.$el.clientHeight ;
        // 屏幕滚动的距离
        let distance_1 = document.documentElement.scrollTop ;
        let distance_2 = document.body.scrollTop ;
        if(distance_1 >= swiper / 2 || distance_2 >= swiper / 2){
          this.isFixed = true ;
          //顶部标题的实时显示
          // let Comment = swiper + ship ;
          // if(distance_1 >= Comment + comment || distance_2 >= comment + Comment){
          //   this.isbottom = true ;

          // }else if(distance_1 >= Comment || distance_2 >= Comment){
          //   console.log("comment") ;

          // }

        }else{
          this.isFixed = false ;
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
#ProductsDatails
  background:#F3F3F3
  .ship
    margin-top:.2rem
    background:#FFFFFF
  .selects
    margin-top:.2rem
    background:#FFFFFF
  .comment
    margin-top:.2rem
    background:#FFFFFF
  .prodatails
    margin-top:.2rem
    background:#FFFFFF
  .bottom
    position:fixed
    z-index:100
    bottom:0rem
  .fixed
    display:block
    position:fixed
    z-index:90
    top:0rem
    width:100%
</style>
