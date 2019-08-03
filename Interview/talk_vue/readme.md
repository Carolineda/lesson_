##面试Vue 网易音乐
  基于Vue2.0 + Vuex + VueRouter全家桶实现方案来模仿Vue Web项目，Css预编译工具使用的是Sass,音乐上下滚动使用的是betterScroll 全面采用Es6风格的代码。

  解决了哪些问题：
    - 图片懒加载  vue-lazyload
    - 前后端分离
        使用后端node.js  运行NeteaseCloudMusicApi  proxy 8080 + 3000

    - fasticlick  移动端300ms延迟
    - 设计store
        songs  index  song  singer  mode  favoriteList  searchHistory  playHistory
    - iconFont
    -eslint 代码风格


    yarn add cross-env  设置默认展示端口

##目录结构
  1.Components /   跟路由  工作入口
  2.store / 全局共享 模块化  了解关键状态
  3.common / 公共组件
  4.api /前后端的协作方式


