<template>
  <div>
    <user-lay class="User"></user-lay>
    <bottom-model></bottom-model>
  </div>
</template>

<script>
  import UserLay from '@/components/Private/User'
	import BottomModel from '@/components/Public/BottomModel/Home'
  export default{
    name:'User',
    components:{
      BottomModel,
      UserLay
    }
  }
</script>

<style lange="stylus" scoped>
</style>
