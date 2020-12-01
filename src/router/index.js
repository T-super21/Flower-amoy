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

//home-products-datails
import p0 from './datails/home/p0'
import p1 from './datails/home/p1'
import p2 from './datails/home/p2'
import p3 from './datails/home/p3'

//home-flowers-details
import fp0 from './datails/flowers/fp0'

//home-materials-details
import mp0 from "./datails/materials/fp0.js"

//import Search
import search from './search'


Vue.use(Router)

export default new Router({
  mode:'history',
  // mode:'hash',
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
    newproducts,

    search,

    p0,
    p1,
    p2,
    p3,
    
    fp0,
    mp0
  ]
})
