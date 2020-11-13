<template>
  <div class="Check">
    <div class="checked" :class="{check: isChecked}"></div>
  </div>
</template>

<script>
  export default{
    name:"Checkbox",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .Check
    .checked
      border:1px solid lightblue
      width:.2rem
      height:.2rem
      margin-top:1.25rem
      margin-left:.1rem
      border-radius:.5rem
    .check
      background:red
</style>
