## 安装React 
    1.  安装react   npm i create-react-app -g

    - 创建一个react项目名为：react-base   create-react-app react-base
    2. 启动项目 ： cd react-base
                  yarn start


## React
  在package.json中
  "react": "^16.8.6",      react:负责UI，用户看到的页面 规定了组件的写法
  "react-dom": "^16.8.6",  react-dom： 负责将组件渲染到浏览器上  

                           react-native:是负责将组件渲染到手机上

## index.js
 \\
  ReactDOM.render(<App />, document.getElementById('root'));   把app组件挂载在#root下面  可以render多次渲染页面

## jsx 
  js + html 跟vue 里面template相似
  分明白语法的写法 什么时候用函数 什么时候用{}