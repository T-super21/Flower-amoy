<template>
  <div class="allcount">
    <div class="left">
      <checkbox class="butcheck"
        :is-checked="isSelectAll"
        @click.native="AllClick"
      />
      <span>全选</span>
    </div>
    <div class="center">
      合计:
      <i>￥{{AllPrice}}</i>
    </div>
    <div class="right" @click="GoToCount">
      去计算
      <i>({{this.$store.state.cartList.length}})</i>
    </div>
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
  import Checkbox from '@/components/Private/CartProducts/views/Checkbox'
  import Toast from '@/components/Public/Toast/Toast.vue'
  export default{
    name:"AllCount",
    components:{
      Checkbox,
      Toast
    },
    data(){
      return{
        True:true,
        show:false,
        message:"请选择新品"
      }
    },
    methods:{
      AllClick(){
        if(this.isSelectAll){
          this.$store.state.cartList.forEach(item => item.checked = false) ;
        }else{
          this.$store.state.cartList.forEach(item => item.checked = true) ;
        }
      },
      GoToCount(){
        if(!this.isSelectAll){
          this.show = true ;
          setTimeout(() =>{
            this.show = false ;
          },2000)
        }
      }
    },
    computed:{
      //计算cartList中的checked状态是否是全选中状态，来显示全选按钮的状态
      isSelectAll(){
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        if(this.$store.state.cartList.length === 0){
          return false ;
        }
        return !this.$store.state.cartList.find(item => !item.checked) ;
      },
      //根据cartList的checked状态来计算总价
      AllPrice(){
        //过滤不选中的商品
        return this.$store.state.cartList.filter(item =>{
          return item.checked ;
        }).reduce((preValue,item) =>{ //reduce过滤后进行计算
          return eval(parseFloat(preValue + (item.price * item.count)).toFixed(2)) ;
        },0) ;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .allcount
    display:flex
    width:100%
    height:.6rem
    line-height:.6rem
    text-align:center
    font-weight:bold
    .left
      flex:1
      .butcheck
        margin-top:-1.05rem
      span
        position:relative
        top:-0.4rem
    .center
      flex:2
    .right
      flex:1
      background:#FF5300
      color:white
</style>
