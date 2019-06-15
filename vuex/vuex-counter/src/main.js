import Vue from 'vue'  // mvvm
import App from './App.vue'  //根组件
import store from './store'  //统一管理应用状态
// SPA
new Vue({
  el: '#app',
  // 渲染 所有 的数据 到 #app 节点
  store,
  render: h => h(App)  
})
