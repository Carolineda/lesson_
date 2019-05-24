const http = require('http');
const url = require('url');
const queryString = require('querystring');
// 端口
http.createServer((req,res)=>{
    // req请求
    if(req.url === '/favicon.ico')return;
    // 端口号 域名
    // query 查询
    const urlObj = url.parse(req.url);
    const queryObj = queryString.parse(urlObj.query);
    console.log(queryObj);
    // {query=蜗牛老湿&type=all}
    // res.end('hello world')

    // 返回html
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    })
    // 内容
    // res.end(JSON.stringify(queryObj));

    // 返回页面
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      ${JSON.stringify(queryObj)}
    </body>
    </html>`)
})
    .listen(3000,()=>{
        console.log('服务正在 3000 端口');

    })