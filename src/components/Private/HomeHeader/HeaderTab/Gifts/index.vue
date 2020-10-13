<template>
  <div id="Gifts">
    <pro-loading id="Loading_5"></pro-loading>
    <div id="Display_5" >
      Gifts
    </div>

  </div>
</template>

<script>
  export default{
    name:'Gifts',
    mounted(){
      document.getElementById('Display_5').style.display = 'block' ;
      document.getElementById('Loading_5').style.display = 'none' ;
    }
  }
</script>

<style>
</style>
