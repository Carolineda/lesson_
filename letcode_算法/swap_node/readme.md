##webpack
- 无编译 不代码
    webpack 成为工作流程的主要技术

        Vue-cli
    编译过程和js 的 promise 一样 ：异步


    执行代码：node src/index.js = node dist/main.js 

1.代码写在Dev src/目录
2.上线在build dist/目录
3.启动web服务器  webpack-dev-server

<!-- 插件 -->
- webpack html template
    plugin html-webpack-plugin

- log.js 不在根目录下，怎么找到log 
    alias是路径缩写 快速定位文件路径

resolve 
    ->.js文件
    modelu 模块  通过rules  匹配.js文件 -> babel-loader文件处理

babel-core babel-cli babel-preset-env
babel-loader 存在兼容性问题
module
rules:[
    {test:/.js$/,
    use:'babel-loader'
    }
]
resolve:{
    extensions:['.js']
}

- 8080端口显示
8080 webpack-dev-server  html-webpack-plugin
template ./src/index.html
 js运行 HTML+js

 - webpack 一切皆可打包  打包到js里 
 css对于js来说是文本 
 img 对于 js 打包成base64
 但是css 应该独立打包，性能优化需要
 main.js 显示是最慢的