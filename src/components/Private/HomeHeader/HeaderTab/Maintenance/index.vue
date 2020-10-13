<template>
  <div id="Maintenance">
    <pro-loading id="Loading_3"></pro-loading>
    <div id="Display_3" >
          Maintenance
    </div>

  </div>
</template>

<script>
  export default{
    name:'Maintenance',
    mounted(){
      document.getElementById('Display_3').style.display = 'block' ;
      document.getElementById('Loading_3').style.display = 'none' ;
    }
  }
</script>

<style>
</style>
