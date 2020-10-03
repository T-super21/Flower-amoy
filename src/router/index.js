import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
import cartRouter from './cart'
import userRouter from './user'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    homeRouter,
    cartRouter,
    userRouter
  ]
})
