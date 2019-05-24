- 安装命令：
    1.yarn add webpack webpack-cli webpack-dev-server
    2.yarn add babel-core babel-cli babel-preset-env -D
    3.yarn add lodash 推平数组
    
 devDependencies 开发阶段
 Dependencies    所有阶段
 webpack  打包工具  构建应用


    打包之前 位于development
    打包之后  命令npm run  build dist/ 不再需要webpack  部署到服务器

   -webpack-dev-server
      webpack打包好之后  将打包后的内容将浏览器中的8080启动，是前端开发的标准

   在一个端口打开web server
   实时编译 watch HMR

   - 网页webpack打包的过程 ：
      1.index.js是入口，打包成为Main.js
      2.index.html 是首页的模板 main.js会由webpack-dev-server自动的放在index.html的最后script引入