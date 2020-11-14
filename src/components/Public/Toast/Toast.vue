<template>
  <div class="Toast" v-show="show">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
  export default{
    name:"Toast",
    props:{
      message:{
        type:String,
        default:''
      },
      show:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .Toast
    position:fixed
    z-index:100
    top:3rem
    background-color:rgba(0,0,0,.6)
    color:white
    padding:.2rem
    transform:translate(-50%,-50%)
    left:50%
    top:50%
</style>
