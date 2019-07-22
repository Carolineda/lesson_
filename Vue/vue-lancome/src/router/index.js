import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Sort from '@/components/tabitems/sort'
import Recommand from '@/components/tabitems/recommand'
import Cart from '@/components/tabitems/cart'
import User from '@/components/tabitems/User'
import Vip from '@/pages/vip'
import Changegoods from '@/pages/changegoods'
Vue.use(Router)

export default new Router({
  routes: [
    {  
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'Main',
      component:Main
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/recommand',
      name: 'Recommand',
      component: Recommand
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/changegoods',
      name: 'Changegoods',
      component: Changegoods
    }
  ]
})
