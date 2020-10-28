<template>
  <div id="FlowersEveryDay">
    <flowerseveryday :evedayflower="evedayflower"></flowerseveryday>
  </div>
</template>

<script>
  import {GetDatas} from '@/network/home'

  import flowerseveryday from '@/components/Private/HomeHeader/HomeProducts/views/FlowersEveryDay/views'

  export default{
    name:'FlowersEveryDay',
    components:{
      flowerseveryday
    },
    data(){
      return{
        evedayflower:[]
      }
    },
    mounted(){
      //封装的GetDatas函数请求json数据
      GetDatas().then(res =>{
        var ret = res.data.ret ;
        if(ret == true){
          this.evedayflower = res.data.data.evedayflower ;
        }else{
          console.log("Json 数据获取失败！") ;
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
#FlowersEveryDay
  margin:.2rem 0 .2rem 0
</style>
