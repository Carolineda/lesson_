## 静态资源 
  不会随着服务运行而改变内容 :html css js 图片

  - 上传图片
 ## formidable 
 处理请求
   fileds 非input[type="file"]的提交项
    files input[type="file"]的提交项
    根据input的name属性来获取值

 ##静态资源服务器
  1.如果有index.html 打开
  2.否则 列出所有文件
  3.请求 路径和磁盘路径 一一对应

  ##打开方式
    file://本地文件读取协议  当前目录文件./xx.png 
    http://localhost:8080/ http协议
    html 里面的引入的资源 都会发出请求

  static 请求 
  /static/*.*   *匹配 .分隔 *所有文件   磁盘static目录下位置一一对应
   1. 拿到req.url
   2.读取磁盘下的通过一位置  返回
   3.静态资源 通常会放在某一个目录下面  /static/所以请求都以某个目录开头



