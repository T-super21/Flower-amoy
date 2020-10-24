<template>
  <div id="SwiperList">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(item,index) in topImgs"
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
  export default{
    name:'SwiperList',
      data(){
        return{
          swiperOption:{
            pagination:'.swiper-pagination'
          },
        topImgs:[]
        }
      },
      props:{
        flowerindex:String,
        Pro:''
      },
      mounted(){
        //基于路由传来商品点击的index,获取index下的商品详情信息(datalist)
        var Topimgsindex = parseInt(this.flowerindex) ;
        this.axios.get('/api/index.json').then((res)=>{{
          var ret = res.data.ret ;
          if(ret == true){
            this.topImgs = res.data.data.productsList[Topimgsindex].datalist ;
          }
        }})
      }
  }
</script>

<style lang="stylus" scoped>
#SwiperList
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
