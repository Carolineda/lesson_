import Vue from 'vue'
import Router from 'vue-router'
import {networkInterfaces} from 'os'

Vue.use(Router)

import {getToken} from '@/utils/auth'
// 当进入 没有授权 没有token  就去登录？ 如何实现
// 懒加载实现




const router= new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },

  ]
})

let token = getToken()
const whiteList = ['/login','/signup','/auth-redirect']
router.beforeEach((to,from,next)=>{
  if (token) {


  }else{
    console.log(to.path)   // 打印/
    // 白名单
    if(whiteList.includes(to.path)){
      next();
    }else{
      next(`/login?redirect=${to.path}`);
    }
  }
})
export default router;
// 路由
// to from $router path /
