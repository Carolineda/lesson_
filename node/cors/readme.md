
    ## express 框架 
         初始化          npm init -y
         安装express模块            yarn add express
          安装cors模块                        yarn add cors


## 跨域问题
  用cors解决
      前后端分离 不同端口
  - 前端解决方案
    proxy 代理，原来的请求被与后端同源的代替，拿到数据后再交给原请求
  
  - 后端解决方案
    1.让后端同一所有或者部分 可以跨域访问资源
    2.中间件的处理  cors 放在路由之前
    







##错误代码
  1开头 请求中
  2    请求成功响应
  3    需要重定向跳转
  4    客户请求出错，或者用户没有权限
  5    服务器端出错 数据


## cors  中间件
  app.use(cors);  中间件的启用
  ：       req ->res 链接数据库 next  1.链接之后验证身份信息： 通过session
                                     2.表单处理 parseBody  next

  通过路由获取资源