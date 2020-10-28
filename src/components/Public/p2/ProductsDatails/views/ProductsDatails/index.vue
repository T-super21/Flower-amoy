<template>
  <div class="ProductsDatails">
    <div class="header">
      <span>————</span>
      商品详情
      <span>————</span>
    </div>
    <div class="border">
      <i>{{Pro.desc}}</i>
      <div class="Img">
        <img
          v-for="(item,index) in Buttomimg"
          :key="index"
          :src="item"
          alt="图片"
        >

      </div>
    </div>
  </div>
</template>

<script>
  import {GetDatas} from '@/network/home'
  export default{
    name:'ProductsDatails',
    props:{
      Pro:'',
      //接收index
      vaseindex:String
    },
    data(){
      return{
        Buttomimg:[]
      }
    },
    mounted(){
      //基于商品点击index(flowerindex)来获取相关的详情的(datalists)图片
      GetDatas().then(res =>{
        var Butimgindex = parseInt(this.vaseindex) ;
        var ret = res.data.ret ;
        if(ret == true){
          this.Buttomimg = res.data.data.vase[Butimgindex].datalists ;
        }else{
          consoel.log("Json数据请求失败!") ;
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
.ProductsDatails
  margin-bottom:1rem
  .header
    text-align:center
    background:#F3F3F3
    font-size:.4rem
    span
      color:#E6E6E6
  .border
    margin-top:.2rem
    // background:lightblue
    i
      display:block
      text-indent:.65rem
      margin:.2rem .2rem .2rem .2rem
      font-size:.3rem
      line-height:.4rem
    div.Img
      margin:.2rem .2rem .2rem .2rem
      img
        width:100%
        margin-bottom:.2rem
</style>
