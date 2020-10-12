<template>
  <div id="FlowersEveryDay">
    <flowerseveryday></flowerseveryday>
  </div>
</template>

<script>
  import flowerseveryday from '@/components/Private/HomeHeader/HomeProducts/views/FlowersEveryDay/views'

  export default{
    name:'FlowersEveryDay',
    components:{
      flowerseveryday
    }
  }
</script>

<style lang="stylus" scoped>
#FlowersEveryDay
  margin:.2rem 0 .2rem 0
  border:0.5px lightblue solid
  height:6rem
</style>
