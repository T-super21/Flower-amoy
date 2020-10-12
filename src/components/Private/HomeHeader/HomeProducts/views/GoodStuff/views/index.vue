<template>
  <div class="goodstuff">
      <div
        class="products"
        v-for="item of ProductsList"
        :key="item.id"
       >
        <div class="top">
          <img :src="item.imgUrl" alt="图片">
        </div>
        <div class="bottom">
          <p class="p1">{{item.name}}</p>
          <p class="p2">{{item.note}}</p>
          <p class="p3">￥{{item.price}}</p>
        </div>
      </div>
  </div>
</template>

<script>
  export default{
    name:'views',
    data(){
      return{
        ProductsList:[
          {
            id:'01',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'02',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'03',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'04',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'05',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'06',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'07',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'08',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'09',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'10',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          },
          {
            id:'11',
            imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1786524160,2975012632&fm=5',
            name:'桔梗花',
            note:'颜色翠绿，花型艳丽，姿势雅致大气',
            price:'53.00'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .goodstuff
    column-count:2
    -webkit-column-count:2
    .products
      -webkit-column-break-inside:avoid
      margin:.2rem 0 .2rem 0
      border-radius:.2rem
      background:#FFFFFF
      .top
        img
          width:100%
          height:100%
          border-radius:.2rem .2rem 0 0
          margin:0 0 .1rem 0
      .bottom
        margin-left:.1rem
        .p1
          font-size:.4rem
          letter-spacing:.1rem
          margin-bottom:.2rem
        .p2
          display:block
          overflow:hidden
          color:#999999
          margin-bottom:.2rem
        .p3

          font-weight:bold
          font-size:.3rem
          color:#D3B54A
</style>
