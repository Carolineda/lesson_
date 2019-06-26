## Vue
  1.ref 相当于document 放置节点

## 
  npm run build 打包项目 形成dist下的静态资源

  font-size 0 取消子容器之间间距

  快捷键 sca

## $nextTick() 
  vue中数据更新是异步的，在dom解构没有加载完成，BScroll无法获取目标容器的高度，会出现无法滚动的现象。 $nextTick()可以解决此问题

## 源码介绍  
https://blog.csdn.net/qq_14863671/article/details/54412254


## 项目命令
  1.安装一个新的vue项目   vue init webpack
  2.安装axios 获取接口(easymock)数据   npm install axios --save   (--save是指不会保存到生产环境中(dependencies))
  3.页面滚动的组件  Better Scroll组件 (滚动页面实现比较优雅)   安装：npm install better-scroll --save   
  4.css 安装stylus    npm install stylus --save-dev ,  npm install stylus-loader --save-dev
   

## Vue-element
  1.安装命令（axios）的引入,在main.js中引入 import axios from 'axios'  并且挂载到原型链上Vue.prototype.$http = axios

  - 实现边框 0.5px   ：transform scaleY(0.5)
