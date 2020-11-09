<template>
  <div>
    <cart-header></cart-header>
    <products></products>
  </div>
</template>

<script>
  import CartHeader from '@/components/Private/CartProducts/views/Header'
  import Products from '@/components/Private/CartProducts/views/Products'

  export default{
    name:'CartProducts',
    components:{
      CartHeader,
      Products
    }
  }
</script>

<style>
</style>
