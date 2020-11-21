<template>
  <div class="flo-defa">
    <back></back>
    <flo-header :class="isFixed? 'fixed': '' " @titleClick="titleClick" ref="header"></flo-header>
    <flo-swiper :index="index" ref="swiper"></flo-swiper>
    <flo-ship :Pro="Pro" class="ship"></flo-ship>
    <flo-select class="selects"></flo-select>
    <flo-comment class="comment" ref="comment"></flo-comment>
    <flo-deta class="prodatails" :Pro="Pro" :index="index" ref="Imgs"></flo-deta>
    <toast :message="message" :show="show"></toast>
    <flo-bottom class="bottom" @addCart="addCart"></flo-bottom>
  </div>
</template>

<script>
  import {GetDatas} from '@/network/home.js'
  import Back from '@/components/Public/Back'
  import FloHeader from '@/components/Public/Flowers-Deta/views/Header'
  import FloSwiper from '@/components/Public/Flowers-Deta/views/SwiperList'
  import FloShip from '@/components/Public/Flowers-Deta/views/Ship'
  import FloComment from '@/components/Public/Flowers-Deta/views/Comment'
  import FloDeta from '@/components/Public/Flowers-Deta/views/Details'
  import FloBottom from '@/components/Public/Flowers-Deta/views/Bottom'
  import FloSelect from '@/components/Public/Flowers-Deta/views/Selects'
  import Toast from '@/components/Public/Toast/Toast.vue'



  export default{
    name:"FlowerDeta",
    components:{
      Back,
      FloHeader,
      FloSwiper,
      FloShip,
      FloComment,
      FloDeta,
      FloBottom,
      FloSelect,
      Toast
    },
    data(){
      return{
        Pro:"",
        isFixed:false,
        themTopYs:[],
        currentIndex:0,
        message:'',
        show:false
      }
    },
    props:['index'],
    mounted(){
      //请求数据
      GetDatas().then(res =>{
        var ret = res.data.ret ;
        if(ret == true){
          let index = parseInt(this.index) ;
          this.Pro = res.data.data.flowers[index] ;
        }else{
          console.log("获取数据失败!") ;
        }
      }),
      window.onscroll = this.headerscroll ;
      document.body.scrollTop = 0 ;
      document.documentElement.scrollTop = 0 ;
    },
    methods:{
      headerscroll(){
        //获取swiper-list 的height
        let swiper = this.$refs.swiper.$el.clientHeight ;
        let comment = this.$refs.comment.$el.clientHeight ;

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
      titleClick(index){
        document.documentElement.scrollTop = this.themTopYs[index] ;
        document.body.scrollTop = this.themTopYs[index] ;
      },
      addCart(){
        //声明购物车的对象
        const productsflo = {};
        // console.log(this.Pro.datalist[0],this.Pro.name,this.Pro.price) ;

        //获取点击购买时的图片，标题，简介，价格并赋值给productsflo
        productsflo.id = this.Pro.id ;
        productsflo.image = this.Pro.imgUrl ;
        productsflo.title = this.Pro.name ;
        productsflo.note = this.Pro.note ;
        productsflo.price = this.Pro.price ;

        //把productsflo添加到Vuex中
        this.$store.dispatch('addCart',productsflo).then(res =>{
          //加入购物车提示信息(加入新商品or数量加一)
          this.message = res ;
          this.show = true ;
          setTimeout(() =>{
            this.show = false ;
            this.message = '' ;
          },2000)
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
.flo-defa
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
    margin-bottom:1rem
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
