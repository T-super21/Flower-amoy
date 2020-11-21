<template>
  <div id="Flowers">
    <pro-loading id="Loading_2"></pro-loading>
    <div id="Display_2">
      <keep-alive>
        <flower-pro class="flower-pro"></flower-pro>
      </keep-alive>
    </div>

  </div>
</template>
<script>
  import  FlowerPro from '@/components/Private/HomeHeader/HeaderTab/Flowers/views/Products'
  export default{
    name:'Flowers',
    components:{
      FlowerPro
    },
    mounted(){
      document.getElementById('Display_2').style.display = 'block' ;
      document.getElementById('Loading_2').style.display = 'none' ;
    }
  }
</script>

<style lang="stylus" scoped>
  #Flowers
    #Display_2
      .flower-pro
        margin-bottom:1rem
</style>
