##node 考点
- MVVM : 
model  数据 Page({
    data:{legends:[]}
})
vew 视图
WXML 
VM  {{}} wx:for....

- MVC 经典的Web开发模式
    Model=>SQL
    View =>静态页面
    Controller => 路由


- Webserver 软件程序
  Web 服务器硬件运行的Webserver程序
  实例Id http协议 通过Ip地址找到资源，http://127.0.0.1:3000  3000为端口号，不止一个服务

  3306端口主要用来Mysql服务、
  80端口一般用于Web服务

http
    .listen(2000)
    <!-- 回调函数 -->  
    创建一个服务器
    .createServer(function(request,response){
        response.end('Hello World');

    })


    request 用户N个  web server一直在2000端口号上伺服
    request 就能找到店  每位用户到达会触发 事件，调用createserver（）函数，通过request能够得到用户身份 response响应请求 响应之后断开

