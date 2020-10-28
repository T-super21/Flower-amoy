<template>
  <div id="Curing">
    <curing :productsList="productsList"></curing>
  </div>
</template>

<script>
  import {GetDatas} from '@/network/home'
  import curing from '@/components/Private/HomeHeader/HomeProducts/views/Curing/views'

  export default{
    name:'Curing',
    components:{
      curing
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
  #Curing
    margin:.2rem 0 .2rem 0
</style>
