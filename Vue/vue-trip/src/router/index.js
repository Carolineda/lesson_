import Vue from 'vue'
import Router from 'vue-router'
import {Toast} from 'mand-mobile'
import User from './module/user'    //引入的User数组,获取user页面

Vue.use(Router)

// 公用router,放此报错页面
const commonRoutes = [
  {path: '/404',component: () => import('@/components/RouterError/404')},  
  {path: '/401',component: () => import('@/components/RouterError/401')},
  {path: '*',redirect:'/404'}, //  路由跳转失败 
  {path: '/',redirect:'/404'}   //重定向 根路径
]

// 分模块的路由，合并传入router。 base在这里是一个定义一个基础路由
 let router = new Router({
   base:process.env.BASE_URL,
   routes:commonRoutes.concat(User)        //concat连接数组
 })


// 导航守卫，非登录状态先登录 去到登陆页面  路由跳转

 router.beforeEach((to,from,next) => {
  let tmp = localStorage.getItem('user')     //存放用户在localhostorage
  // 判断用户如果没有登陆 去到登陆路由页面
  if(!tmp && to.name !== 'Login'){
    Toast.succeed('您需要先登录哦！',1500)
    next({ path:'/login' })
    return
  }
  next()
 })



 export default router