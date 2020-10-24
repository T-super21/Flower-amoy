<template>
  <div id="ProductsDatails" class="datails-slide">
    <back></back>
    <data-header :class="isFixed? 'fixed':''" ></data-header>
    <swiper-list ref="swiper" :flowerindex="flowerindex" :Pro="Pro"></swiper-list>
    <ship class="ship" ref="ship" :Pro="Pro"></ship>
    <selects class="selects" ref="select" :Pro="Pro"></selects>
    <comment class="comment" ref="comment" :Pro="Pro"></comment>
    <products-datails class="prodatails" ref="datails" :Pro="Pro" :flowerindex="flowerindex"></products-datails>
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
        isbottom:false,
        Pro:''
      }
    },
    props:['flowerindex'],
    mounted(){
      //监听屏幕滚动事件
      window.onscroll = this.headlescroll ;

      //datalist页面的渲染
      this.axios.get('/api/index.json').then((res)=>{
        var Index = parseInt(this.flowerindex) ;
        var ret = res.data.ret ;
        if(ret == true){
          this.Pro = res.data.data.productsList[Index] ;
        }
      })
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
