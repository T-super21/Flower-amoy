<template >
  <div class="search">
    <back></back>
    <search-header></search-header>
  </div>
</template>

<script>
  import Back from '@/components/Public/Back'
  import SearchHeader from '@/components/Private/HomeHeader/Search/views/SearchHeader'
  export default{
    name:"Search",
    components:{
      Back,
      SearchHeader
    }
  }
</script>

<style lang="stylus" scoped>
  .search
    height:6rem
    border:1px solid red
    background:#F3F3F3
</style>
