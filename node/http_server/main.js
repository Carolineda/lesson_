// {/* <script src="./http"></script> */}
// require 关键字 引入一个模块 COMMONJS 考点
const http=require('http');
let i=0;
// 创建一个服务器
http
    .createServer(function(request,response){
        response.end(`Hello World!${++i}`);
    })
   
    .listen(2000);