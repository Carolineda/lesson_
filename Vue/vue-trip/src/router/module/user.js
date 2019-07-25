
  // 登陆页面路由
  const tripUser = [
    {
      path:'/login',
      name:'Login',
      component:() => import('@/views/user/login'),   //直接引用
      meta:{
        title:'登录'
      }
    }
  ]


  export default tripUser