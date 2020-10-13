<template>
  <div id="Gardening">
    <pro-loading id="Loading_4"></pro-loading>
    <div id="Display_4" >
          Gardening
    </div>

  </div>
</template>
<script>
  export default{
    name:'Gardening',
    mounted(){
          document.getElementById('Display_4').style.display = 'block' ;
          document.getElementById('Loading_4').style.display = 'none' ;
    }
  }
</script>

<style>
</style>
