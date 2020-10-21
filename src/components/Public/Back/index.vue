<template>
  <div >
    <i id="back" @touchstart="handleback" class="iconfont">&#xe668;</i>
  </div>
</template>

<script>
  export default{
    name:'Back',
    methods:{
      handleback(){
        this.$router.back() ;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #back
  	position:fixed
  	font-size:.5rem
  	font-weight:bold
  	color:red
  	z-index:100
  	border-radius:.2rem
  	margin-top:.3rem
  	margin-left:.2rem
</style>
