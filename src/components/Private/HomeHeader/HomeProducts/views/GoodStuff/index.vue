<template>
  <div id="GoodStuff">
    <goodstuff :productsList="productsList"></goodstuff>
  </div>
</template>

<script>
  import axios from 'axios'
  import goodstuff from '@/components/Private/HomeHeader/HomeProducts/views/GoodStuff/views'
  export default{
    name:'GoodStuff',
    components:{
      goodstuff
    },
    data(){
      return{
        productsList:[]
      }
    }
    ,
    mounted(){
      this.getProcts() ;
    },
    methods:{
      getProcts(){
        axios.get('/api/index.json').then(this.getProductsList) ;
      },
      getProductsList(res){
        res = res.data ;
        if(res.data){
          const data = res.data ;
          this.productsList = data.productsList ;
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
#GoodStuff
  margin:.2rem 0 .2rem 0
</style>
