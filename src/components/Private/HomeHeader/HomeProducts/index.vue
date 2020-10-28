<template>
  <div id="HomeProducts">
    <div class="products">
      <ul>
        <router-link
          v-for="(item,index) in ProductsList"
          :key="item.index"
          tag="li"
          :to="item.to"
        >
          <span @click="TitleIndex(index)">{{item.desc}}</span>
        </router-link >

      </ul>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  export default{
    name:'HomeProducts',
    data(){
      return{
        ProductsList:[
          {
            id:'001',
            desc:'金秋好货',
            to:'/home/home/goodstuff'
          },
          {
            id:'002',
            desc:'每日好花',
            to:'/home/home/flowerseveryday'
          },
          {
            id:'003',
            desc:'花瓶花盆',
            to:'/home/home/vase'
          },
          {
            id:'004',
            desc:'花店养护',
            to:'/home/home/curing'
          }
        ]
      }
    },
    methods:{
      //据点击标题的index来确定显示那个商品的详情页
      TitleIndex(index){
        // console.log(index) ;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #HomeProducts
    margin:0 .2rem .2rem .2rem
    .products
      background:#F3F3F3
      ul
        display:flex
        li
          flex:1
          font-size:0.35rem
          font-weight:bold
          text-align:center
        .router-link-active
          color:#EB5C20
</style>
