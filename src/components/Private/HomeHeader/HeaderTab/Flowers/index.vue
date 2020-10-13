<template>
  <div id="Flowers">
    <pro-loading id="Loading_2"></pro-loading>
    <div id="Display_2">
          Flowers
    </div>

  </div>
</template>
<script>
  export default{
    name:'Flowers',
    mounted(){
      document.getElementById('Display_2').style.display = 'block' ;
      document.getElementById('Loading_2').style.display = 'none' ;
    }
  }
</script>

<style>
</style>
