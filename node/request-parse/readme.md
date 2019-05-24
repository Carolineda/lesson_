## 响应头
Content-Type:告诉浏览器 返回东西是什么类型
类型：text/plain  text/html  ... image/jpg mine

##get  请求
？query=''&type=''&a=''
1. url.parse() query
2. queryString

## createServer
http 服务默认 80 listen 指定另外一个端口

#请求头
Content-Type 告诉后台 发送数据格式application/x-www-form-urlencoded  
 form默认编码
 post 请求格式 application/json json交换数据

 - 获取
  req.headers
