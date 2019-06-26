import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import TaskNew from '@/components/taskNew'
import Logtime from '@/components/logtime'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/taskNew',
      name: 'TaskNew',
      component: TaskNew,
      children :[{
        path:'logtime',
        component:Logtime
      }]
    }
  ]
})
