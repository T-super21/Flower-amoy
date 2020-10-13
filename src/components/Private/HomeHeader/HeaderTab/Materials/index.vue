<template>
  <div id="Materials">
    <pro-loading id="Loading_6"></pro-loading>
    <div id="Display_6" >
          Materials
    </div>

  </div>
</template>

<script>
  export default{
    name:'Materials',
    mounted(){
      document.getElementById('Display_6').style.display = 'block' ;
      document.getElementById('Loading_6').style.display = 'none' ;
    }
  }
</script>

<style>
</style>
