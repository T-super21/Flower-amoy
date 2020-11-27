<template>
  <div
    class="user"
    :style="{backgroundImage:'url(' +'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2529537377,1858410080&fm=15&gp=0.jpg'+ ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover'}"
    >
    <user-header></user-header>
    <user-form></user-form>
    <user-btn></user-btn>
  </div>
</template>

<script>
  import UserHeader from '@/components/Private/User/views/header'
  import UserForm from '@/components/Private/User/views/form'
  import UserBtn from '@/components/Private/User/views/buttom'
  export default{
    name:'UserLay',
    components:{
      UserHeader,
      UserForm,
      UserBtn
    }
  }
</script>
<style lang="stylus" scoped>
  .user
    position:fixed
    top:0
    z-index:-1
    width:100%
    height:100%
    color:white
</style>
