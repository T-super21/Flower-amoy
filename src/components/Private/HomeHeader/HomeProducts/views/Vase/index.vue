<template>
  <div id="Vase">
    <vase></vase>
  </div>
</template>

<script>
  import vase from '@/components/Private/HomeHeader/HomeProducts/views/Vase/views'

  export default{
    name:'Vase',
    components:{
      vase
    }
  }
</script>

<style lang="stylus" scoped>
  #Vase
    margin:.2rem 0 .2rem 0
    border:0.5px lightblue solid
    height:6rem
</style>
