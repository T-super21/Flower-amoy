<template>
  <div id="ProductsDatails" class="datails-slide">
    <back></back>
    <data-header :class="isFixed? 'fixed':''" @titleClick="titleClick" ref="header"></data-header>
    <swiper-list ref="swiper" :vaseindex="vaseindex" :Pro="Pro"></swiper-list>
    <ship class="ship" ref="ship" :Pro="Pro"></ship>
    <selects class="selects" ref="select" :Pro="Pro"></selects>
    <comment class="comment" ref="comment" :Pro="Pro"></comment>
    <products-datails class="prodatails" ref="Imgs" :Pro="Pro" :vaseindex="vaseindex"></products-datails>
    <bottom class="bottom"></bottom>
  </div>
</template>

<script>
  import {GetDatas} from '@/network/home'

  import Back from '@/components/Public/Back'
  import SwiperList from '@/components/Public/p2/ProductsDatails/views/SwiperList'
  import Ship from '@/components/Public/p2/ProductsDatails/views/Ship'
  import Comment from '@/components/Public/p2/ProductsDatails/views/Comment'
  import Selects from '@/components/Public/p2/ProductsDatails/views/Selects'
  import Bottom from '@/components/Public/p2/ProductsDatails/views/Bottom'
  import ProductsDatails from '@/components/Public/p2/ProductsDatails/views/ProductsDatails'
  import DataHeader from '@/components/Public/p2/DataHeader'

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
        Pro:'',
        themTopYs:[],
        currentIndex:0
      }
    },
    props:['vaseindex'],
    mounted(){
      //监听屏幕滚动事件
      window.onscroll = this.headlescroll ;

      //datalist页面的渲染
      GetDatas().then(res =>{
        var Index = parseInt(this.vaseindex) ;
        var ret = res.data.ret ;
        if(ret == true){
          this.Pro = res.data.data.vase[Index] ;
        }else{
          consoel.log("Json数据请求失败！") ;
        }
      })
    },
    methods:{
      //屏幕滑动距离是否满足可以显示顶部导航栏
      headlescroll(){
        //获取swiper-list 的height
        let swiper = this.$refs.swiper.$el.clientHeight ;
        let comment = this.$refs.comment.$el.clientHeight ;
        let ship  = this.$refs.ship.$el.clientHeight ;

        //屏幕滚动之后获取组件的距离
        this.themTopYs = [] ;
        this.themTopYs.push(0) ;
        this.themTopYs.push(this.$refs.comment.$el.offsetTop - 60) ;
        this.themTopYs.push(this.$refs.Imgs.$el.offsetTop - 60) ;

        //获取屏幕的实时滚动距离(解决兼容性问题)
        let distance_1 = document.documentElement.scrollTop ;
        let distance_2 = document.body.scrollTop ;

        //监听屏幕滚动时,据子组件点击标题传入的index和内容联动
        let length = this.themTopYs.length ;
        let slides = this.themTopYs ;
        for(let i = 0 ; i < length ; i++){
          //根据相应组件的offsetTop(themTopYs数组)下标值去确定title的index
          if((i < length -1 && (distance_1 >= slides[i] || distance_2 >= slides[i]) && (distance_1 <= slides[i+1] || distance_2 <= slides[i+1])) || (i === length -1 && (distance_1 >= slides[i] || distance_2 >= slides[i]))){
            this.currentIndex = i ;
            this.$refs.header.currentIndex = this.currentIndex ;
          }
        }

        //屏幕滚动距离是否显示顶部的导航栏
        if(distance_1 >= swiper / 2 || distance_2 >= swiper / 2){
          this.isFixed = true ;
        }else{
          this.isFixed = false ;
        }
      },
      //接收子组件点击后的index，点击后去到相应的内容
      titleClick(index){
        document.documentElement.scrollTop = this.themTopYs[index] ;
        document.body.scrollTop = this.themTopYs[index] ;
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
