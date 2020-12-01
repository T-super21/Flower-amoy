<template>
  <div class="materpro">
    <div class="products"
      v-for="(item,index) in this.materials"
      :key="item.index"
      @click="GetIndex(index)"
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
  import {GetDatas} from '@/network/home.js'
  export default{
    name:"ProMater",
    data(){
      return{
        materials:[]
      }
    },
    mounted(){
      //请求数据
      GetDatas().then(res =>{
        var ret = res.data.ret ;
        if(ret == true){
        this.materials = res.data.data.materials ;
        // console.log(this.materials) ;
        }else{
          console.log("数据获取失败!") ;
        }
      })
    },
    methods:{
      //点击传递index，动态路由
      GetIndex(index){
        this.$router.push('/datails/materials/mp0' + index) ;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .materpro
    column-count:2
    -webkit-column-count:2
    margin-left:.2rem
    margin-right:.2rem
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
