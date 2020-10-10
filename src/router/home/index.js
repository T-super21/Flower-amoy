export default{
	path:'/home',
	component : () => import('@/views/Home'),
	children:[
    //二级路由重定向
    {
      path:'/home',
      redirect:'/home/home'
    },
    {
      path:'home',
      component : () => import('@/components/Private/HomeHeader/HeaderTab/Home'),
    },
    {
      path:'flowers',
      component : () => import('@/components/Private/HomeHeader/HeaderTab/Flowers')
    },
    {
      path:'materials',
      component : () => import('@/components/Private/HomeHeader/HeaderTab/Materials')
    },
    {
      path:'gardening',
      component : () => import('@/components/Private/HomeHeader/HeaderTab/Gardening')
    },
    {
      path:'gifts',
      component : () => import('@/components/Private/HomeHeader/HeaderTab/Gifts')
    },
    {
      path:'maintenance',
      component : () => import('@/components/Private/HomeHeader/HeaderTab/Maintenance')
    }
  ]
}
