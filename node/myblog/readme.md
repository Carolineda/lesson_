## 命令 
 1.初始化  npm init -y
 2.安装express  yarn add express@4.14.0
 2.全局安装supervisor   yarn global add supervisor
 4.安装ejs   yarn add ejs
 5.安装配置      yarn add config-lite connect-flash connect-mongo express-session marked moment mongolass objectid-to-timestamp sha1 winston  express-winston


 ## 
  -req.query queryString ?a=1 
  -req.params /:name  参数部分
  -req.body  安装一个body-parser中间件

  ## 路由提升
  express.Router
  app.use('/user',router)  http://localhost:3000/users/dahuang

  ejs 后端模板引擎

  - render 传值
    使用一个模板 ejs


  views  
    app.set  路径  模板引擎 设置
    <% code%>  运行JavaScript
    <%= code %> 显示转义之后的html
     <%- code %> 显示输出的html

public  静态资源  css img

## modules 存放操作数据库的文件
  -public 存放静态文件，
  -routes 存放路由文件
  -存放模板文件
  -index.js 入口文件
  - controllers 控制器

## 开发业务中间件
  1.express 框架业务  web框架
  2.express-session  session中间件
  3.connect-mongo    将session存于mongodb 
  4.connect-flash    页面通知中间件，基于session实现
  5.ejs 模板 
  6.express-formidable   接收表单及文件上传的中间件
  7.config-lite      读取配置文件
  8.marked markdown 解析为HTML格式
  9.moment 时间格式化
  10.mongolass  mongodb  驱动
  11.objectid-to-timestamp   根据ObjectId生成时间戳
  12 sha1  加密
  13.Winston 日志
  14.express-Winston  音件
