<template>
  <div class="MatePro">
    <back></back>
    <mate-header :class="isFixed? 'fixed': '' " class="header" @titleClick="titleClick" ref="header"></mate-header>
    <mate-swiper :index="index" class="swiper" ref="swiper"></mate-swiper>
    <mate-ship :Pro="Pro" class="ship"></mate-ship>
    <mate-comm class="comment" ref="comment"></mate-comm>
    <mate-select class="selects"></mate-select>
    <mate-deta class="prodatails" :Pro="Pro" :index="index" ref="Imgs"></mate-deta>
    <toast :message="message" :show="show"></toast>
    <mate-bott class="bottom" @addCart="addCart"></mate-bott>
  </div>
</template>

<script>
  import {GetDatas} from '@/network/home.js'
  import MateHeader from '@/components/Public/Materials-Deta/views/Header'
  import MateSwiper from '@/components/Public/Materials-Deta/views/SwiperList'
  import MateShip from '@/components/Public/Materials-Deta/views/Ship'
  import MateComm from '@/components/Public/Materials-Deta/views/Comment'
  import MateSelect from '@/components/Public/Materials-Deta/views/Selects'
  import MateDeta from '@/components/Public/Materials-Deta/views/Details'
  import MateBott from '@/components/Public/Materials-Deta/views/Bottom'
  import Toast from '@/components/Public/Toast/Toast.vue'


	import Back from '@/components/Public/Back'
export default{
    name:"MaterDeta",
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
    components:{
      Back,
      MateHeader,
      MateSwiper,
      MateShip,
      MateComm,
      MateSelect,
      MateDeta,
      MateBott,
      Toast
    },
    mounted(){
      //请求数据
      GetDatas().then(res =>{
        var ret = res.data.ret ;
        if(ret == true){
          let index = parseInt(this.index) ;
          this.Pro = res.data.data.materials[index] ;
        }else{
          console.log("获取数据失败!") ;
        }
      }),
      window.onscroll = this.headerscroll ;
      document.body.scrollTop = 0 ;
      document.documentElement.scrollTop = 0 ;
    },
    methods:{
      //屏幕滚动和标题联动
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
      //点击跳转相应内容
      titleClick(index){
        document.documentElement.scrollTop = this.themTopYs[index] ;
        document.body.scrollTop = this.themTopYs[index] ;
      },
      //添加到购物车
      addCart(){
        //声明购物车的对象
        const productsmater = {};
        // console.log(this.Pro.datalist[0],this.Pro.name,this.Pro.price) ;

        //获取点击购买时的图片，标题，简介，价格并赋值给productsmater
        productsmater.id = this.Pro.id ;
        productsmater.image = this.Pro.imgUrl ;
        productsmater.title = this.Pro.name ;
        productsmater.note = this.Pro.note ;
        productsmater.price = this.Pro.price ;

        //把productsmater添加到Vuex中
        this.$store.dispatch('addCart',productsmater).then(res =>{
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
  .MatePro
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
