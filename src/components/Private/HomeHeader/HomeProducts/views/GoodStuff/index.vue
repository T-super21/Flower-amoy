<template>
  <div id="GoodStuff">
    <goodstuff :productsList="productsList"></goodstuff>
  </div>
</template>

<script>
  import {GetDatas} from '@/network/home'
  import axios from 'axios'
  import goodstuff from '@/components/Private/HomeHeader/HomeProducts/views/GoodStuff/views'
  export default{
    name:'GoodStuff',
    components:{
      goodstuff
    },
    data(){
      return{
        productsList:[]
      }
    },
    mounted(){
      //封装的GetDatas函数请求json数据
      GetDatas().then(res =>{
        var ret = res.data.ret ;
        // console.log(res) ;
        if(ret == true){
          this.productsList = res.data.data.productsList ;
        }else{
          console.log("Json 数据获取失败！") ;
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
#GoodStuff
  margin:.2rem 0 .2rem 0
</style>
