<template>
  <div id="Vase">
    <vase :productsList="productsList"></vase>
  </div>
</template>

<script>
  import {GetDatas} from '@/network/home'
  
  import vase from '@/components/Private/HomeHeader/HomeProducts/views/Vase/views'
  export default{
    name:'Vase',
    components:{
      vase
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
  #Vase
    margin:.2rem 0 .2rem 0
</style>
