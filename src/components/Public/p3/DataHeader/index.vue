<template>
  <div class="Header">
    <div class="top" id="Top">
      <i
        v-for="(item,index) in Titlelist"
        :key="index"
        :class="{active: index === currentIndex}"
        @click="Clicktitle(index)"
      >
        {{item}}
      </i>
    </div>
  </div>
</template>

<script>
  export default{
    name:'DataHeader',
    data(){
      return{
        Titlelist:['商品','评价','详情'],
        currentIndex:0
      }
    },
    methods:{
      //title点击触发显示相应title
      Clicktitle(index){
        this.currentIndex = index ;
        //向父组件传出点击title时的index
        this.$emit('titleClick',index) ;
      }
    }
  }
</script>

<style lang="stylus" scoped>
.Header
  height:1rem
  background:#F3F3F3
  display:none
  .top
    display:flex
    text-align:center
    line-height:1rem
    font-size:.4rem
    // display:inline-block
    i
      flex:1
    .bottom
      border-bottom:solid 2px red
    .active
      color:red
</style>
