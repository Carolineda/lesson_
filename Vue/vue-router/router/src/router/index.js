import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Look from '@/components/Look'
import lookOne from '@/components/lookOne'
import lookTwo from '@/components/lookTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/look/:id',
      name: 'Look',
      component: Look,

      // 子路由  - 二级路由  子路由不加/look
      children:[
        {
          path: 'look-one',
          name: 'lookOne',
          component: lookOne
        },
        {
          path: 'look-two',
          name: 'lookTwo',
          component: lookTwo
        }
      ]
    },
    {
      path: '/detail',
      redirect:'/'
    }
  ]
})
