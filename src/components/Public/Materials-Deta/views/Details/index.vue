<template>
  <div class="materDeta">
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
  import {GetDatas} from '@/network/home.js'
  export default{
    name:"MaterDetails",
    data(){
      return{
        Buttomimg:[]
      }
    },
    props:{
      Pro:'',
      index:String
    },
    mounted(){
      //获取详情页的数据datalists
      GetDatas().then(res =>{
        let ret = res.data.ret ;
        if(ret == true){
          let index = parseInt(this.index) ;
          this.Buttomimg = res.data.data.materials[index].datalists ;
        }else{
          console.log("获取数据失败!") ;
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .materDeta
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
