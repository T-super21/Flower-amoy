<template>
  <div class="CartPro">
    <cart-header></cart-header>
    <products :allSelect="allSelect"></products>
    <all-count class="count"></all-count>
  </div>
</template>

<script>
  import CartHeader from '@/components/Private/CartProducts/views/Header'
  import Products from '@/components/Private/CartProducts/views/Products'
  import AllCount from '@/components/Private/CartProducts/views/AllCount'

  export default{
    name:'CartProducts',
    components:{
      CartHeader,
      Products,
      AllCount
    },
    data(){
      return{
        allSelect:true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .count
    position:fixed
    z-index:100
    bottom:1rem
    background:#F3F3F3
</style>
