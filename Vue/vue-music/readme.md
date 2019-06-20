# vue-music 命令

 新建一个vue项目 
      1.项目  vue init webpack
                        运行项目      npm run dev

      2.axios 用来请求接口数据   npm install axios

      解决3000毫秒延迟 安装fastclick       npm install fastclick -S
      安装懒加载   VueLazyload            npm install vue-lazyload -D
      创建vuex数据仓库   npm install vuex --save


      3.安装stylus  - npm install stylus --save-dev
                    - npm install stylus-loader --save-dev

      4.安装px2rem 移动端自适应      npm install px2rem-loader --save-dev






 ## 通常在 src 下目录新建文件api 进行封装
    1.axios 封装



## fastClick 点击延迟事件   (https://www.jianshu.com/p/67bae6dfca90)
  移动端浏览器在派发点击事件的时候，通常会出现300ms左右的延迟  300ms 点击事件和双击放大页面



## slot 插槽
  在自定义组件使用，在封装的组件的插槽体现内容  <div slot="left-icon">1234</div>
    调用组件使用插槽实现你所实现的功能
- px2rem 移动端自适应方案

## stylus 
  stylus定义一个方法
    @function px2rem($px,$base-font-size: 75px)

    写法 flex：
       flex 0 0 px2rem(88px)

    filter 滤镜 灰白