import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Check from '@/views/Check'
import Dashboard from '@/views/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Check',
      component: Check
    },

    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   component: Dashboard,
    //   children:[
    //     {
    //       path: 'check',
    //       component:Check
    //   }]
    // }

      {
      path: '/check',
      name: 'Check',
      component: Check,
    }
  ]
})
