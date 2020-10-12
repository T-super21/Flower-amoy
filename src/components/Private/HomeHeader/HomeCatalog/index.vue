<template>
  <div id="Catalog">
    <div class="catalog">
      <ul>
        <router-link tag="li" :to="item.go"
          v-for="item of Catalog"
          :key='item.id'
        >
          <div
            class="iconfont"
            v-html="item.icon"
            :style="{color:item.color}"
            >
          </div>
          <i>{{item.text}}</i>
        </router-link>
      </ul>

    </div>
  </div>
</template>

<script>
  export default{
    name:'HomeCatalog',
    data(){
      return{
        Catalog:[
          {
            id:'0001',
            icon:'&#xe708;',
            text:'全部商品',
            color:'#8E95ED',
            go:'/allproducts'
          },
          {
            id:'0002',
            icon:'&#xe625;',
            text:'新品首发',
            color:'#CA2835',
            go:'/newproducts'
          },
          {
            id:'0003',
            icon:'&#xe829;',
            text:'日常花材',
            color:'#FC77AC',
            go:'/data'
          },
          {
            id:'0004',
            icon:'&#xe606;',
            text:'绿植园艺',
            color:'#9BDF58',
            go:'/gardening'
          },
          {
            id:'0005',
            icon:'&#xe61c;',
            text:'花店资材',
            color:'#7EB1F3',
            go:'/materials'
          },
          {
            id:'0006',
            icon:'&#xe605;',
            text:'花店配套',
            color:'#FA7070',
            go:'/matching'
          }
        ]
      }
    }
  }

</script>

<style lang="stylus" scoped>
#Catalog
  height:3.5rem
  // border:1px red solid
  margin:0 .2rem .2rem .2rem
  border-radius:.3rem
  background-color:white
  .catalog
    width:100%
    height:100%
    ul
      margin-top:.1rem 0 .2rem 0
      li
        // border:0.5px lightblue solid
        text-align:center
        float:left
        // height:1.1rem
        width:33%
        line-height:.6rem
        margin-bottom:.2rem
        // overflow:hidden   解决window.onscroll事件不能触发的问题
        text-overflow:ellipsis
        div.iconfont
          width:100%
          height:100%
          margin-top:.2rem
          font-size:.8rem
          margin-bottom:.2rem
        i
          font-size:.3rem


</style>
