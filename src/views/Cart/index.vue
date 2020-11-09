<template>
  <div class="cart">
    <cart-products></cart-products>
    <bottom-model></bottom-model>
  </div>
</template>

<script>
  import CartProducts from '@/components/Private/CartProducts'
  import BottomModel from '@/components/Public/BottomModel/Home' ;
  export default{
    name:'Cart',
    components:{
      BottomModel,
      CartProducts
    }
  }
</script>

<style lang="stylus" scoped>
  .cart
    background:#F3F3F3
</style>
