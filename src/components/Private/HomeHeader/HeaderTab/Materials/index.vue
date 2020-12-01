<template>
  <div id="Materials">
    <pro-loading id="Loading_6"></pro-loading>
    <div id="Display_6" >
          <pro-mater></pro-mater>
    </div>

  </div>
</template>

<script>
  import ProMater from '@/components/Private/HomeHeader/HeaderTab/Materials/views/Products'
  export default{
    name:'Materials',
    components:{
      ProMater
    },
    mounted(){
      document.getElementById('Display_6').style.display = 'block' ;
      document.getElementById('Loading_6').style.display = 'none' ;
    }
  }
</script>

<style>
</style>
