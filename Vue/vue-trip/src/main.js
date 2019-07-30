
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import store from './store/index'
import AMap from 'vue-amap'

Vue.use(AMap)

AMap.initAMapApiLoader({
  // 高德的key
  key: 'b4d2530feb5f8322ec34a1f8898bd8f0',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
Vue.use(mandMobile)
// 请求拦截器
import requestPlugin from './request/http'
Vue.use(requestPlugin)

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
