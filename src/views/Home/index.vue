<template>
  <div id="Home">
    <home-header ref="header" :class="isFixed? 'fixed':''"></home-header>
    <bottom-model></bottom-model>

<!-- 	keep-alive解决每次切换路由时重载慢的问题！keep-alive:加载切换后有缓存！-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
    import BottomModel from '@/components/Public/BottomModel/Home';
    import HomeHeader from '@/components/Private/HomeHeader/HomeHeader';
export default{
  name:'Home',
  data(){
    return{
      isFixed:false
    }
  },
  components:{
    BottomModel,
    HomeHeader
  },
  //监听滚动事件
  mounted(){
    window.onscroll = this.handleScroll ;
  },
  methods:{
    handleScroll(){
      //获取header组件的属性的高度
      let header = this.$refs.header.$el.clientHeight ;
      if(document.documentElement.scrollTop >= header){
        this.isFixed = true ;
      }else{
        this.isFixed = false ;
      }
    }
  }
  }
</script>

<style lang="stylus" scoped>
  #Home
    background-color:#F3F3F3
    .fixed
      position:fixed
      top:0
      z-index:100
</style>
