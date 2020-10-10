import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
import cartRouter from './cart'
import userRouter from './user'

//home-catalog
import allproducts from './catalog/allproducts'
import data from './catalog/data'
import gardening from './catalog/gardening'
import matching from './catalog/matching'
import materials from './catalog/materials'
import newproducts from './catalog/newproducts'


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
    userRouter,

    allproducts,
    data,
    gardening,
    matching,
    materials,
    newproducts
  ]
})
