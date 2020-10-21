<template>
  <div id="SwiperList">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3761083504,3769519560&fm=5" alt="图片">
      </swiper-slide>
      <swiper-slide>
        <img src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3761083504,3769519560&fm=5" alt="图片">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="bottom">
      <p class="p1">
        <span class="span1">￥</span><span>53.00</span>
      </p>
      <p class="p2">桔梗花 <span>【包邮到家】</span></p>
      <p class="p3">颜色翠绿，花型艳丽，姿势雅致大气</p>
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
          }
        }
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
