<template>
  <div id="GoodStuff">
    <goodstuff></goodstuff>
  </div>
</template>

<script>
  import goodstuff from '@/components/Private/HomeHeader/HomeProducts/views/GoodStuff/views'
  export default{
    name:'GoodStuff',
    components:{
      goodstuff
    }
  }
</script>

<style lang="stylus" scoped>
#GoodStuff
  margin:.2rem 0 .2rem 0
</style>
