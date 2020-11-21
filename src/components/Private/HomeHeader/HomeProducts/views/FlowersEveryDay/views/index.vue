<template>
  <div class="FlowersEveryDay">
    <div
      class="products"
      v-for="(item,index) in evedayflower"
      :key="item.index"
      @click="Getindex(index)"
    >
      <div class="top">
        <img :src="item.imgUrl" alt="图片">
      </div>
      <div class="bottom">
        <p class="p1">{{item.name}}</p>
        <p class="p2">{{item.note}}</p>
        <p class="p3">￥{{item.price}}</p>
      </div>
   </div>
  </div>
</template>

<script>
  export default{
    name:'views',
    data(){
      return{
      }
    },
    props:{
      evedayflower:Array
    },
    methods:{
      //获取商品被点击的index,并通过路由传值
      Getindex(dayindex){
        // console.log(dayindex) ;
        this.$router.push('/datails/home/p1' + dayindex) ;
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .FlowersEveryDay
      column-count:2
      -webkit-column-count:2
      .products
        -webkit-column-break-inside:avoid
        margin:.2rem 0 .2rem 0
        border-radius:.2rem
        background:#FFFFFF
        .top
          img
            width:100%
            height:100%
            border-radius:.2rem .2rem 0 0
            margin:0 0 .1rem 0
        .bottom
          margin-left:.1rem
          .p1
            font-size:.4rem
            letter-spacing:.1rem
            margin-bottom:.2rem
          .p2
            display:block
            // overflow:hidden 解决window.onscroll事件不能触发的问题
            color:#999999
            margin-bottom:.2rem
          .p3

            font-weight:bold
            font-size:.3rem
            color:#D3B54A
</style>
