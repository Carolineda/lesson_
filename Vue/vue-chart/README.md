
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 安装命令
新建vue项目   vue init webpack vue-chart-demo
1.安装vuex axios  yarn add vuex axios 
2.安装  yarn add element-ui


## Vuex
Vuex 大型化 modules 支持   this.$store.state.user

- User 
 staate info 登录 注册 退出
 actions
 mutations
 vuex先设计 搭建结构 围绕我们的状态 
 token 令牌环  访问：this.$store.user.token 跳转到登录页面
 登录鉴权：
    1.延迟加载路由 性能优化
    2.




  ##vue 路由 通过懒加载，页面运行速度  不用每次都import 引入 vue

- 当进入 没有授权 没有token  就去登录？ 如何实现
  Cookie 第三方