<template>
  <div class="mateSwiper wrapper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(item,index) in Topimgs"
        :key="index"
      >
        <img :src="item" alt="图片">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="bottom">
      <p class="p1">
        <span class="span1">￥</span><span>{{Pro.price}}</span>
      </p>
      <p class="p2">{{Pro.name}} <span>【包邮到家】</span></p>
      <p class="p3">{{Pro.note}}</p>
    </div>
  </div>
</template>

<script>
  import {GetDatas} from '@/network/home.js'
  export default{
    name:"MaterSwiper",
    data(){
      return{
        swiperOption:{
          pagination:'.swiper-pagination'
        },
        Pro:'',
        Topimgs:[]
      }
    },
    props:{
      index:String
    },
    mounted(){
      GetDatas().then(res =>{
        let ret = res.data.ret ;
        if(ret == true){
          let index = parseInt(this.index) ;
          this.Pro = res.data.data.materials[index] ;
          this.Topimgs = this.Pro.datalist ;
          // console.log(this.Topimgs) ;
        }else{
          consoe.log("获取数据失败!") ;
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background:#FFFFFF
.mateSwiper
  .swiper
    min-width:100%
    height:5.5rem
    img
      width:100%
      height:100%
  .bottom
    background-color:#FFFFFF
    .p1
      color:#D3B54A
      font-size:.5rem
      padding-top:.2rem
      padding-left:.2rem
      .span1
        font-size:.3rem
        font-weight:bold
    .p2
      margin-left:.2rem
      margin-top:.2rem
      font-size:.4rem
      font-weight:bold
    .p3
      margin-top:.2rem
      margin-left:.2rem
      color:#9D9D9D
      font-family:'黑体'
      padding-bottom:.2rem
</style>
