// 实现请求路径 磁盘路径一一对应

const http = require('http');
const fs = require('fs');
const path = require('path');
// 浏览器转圈  说明没有响应
// localhost:8080/static/index.html 自动读取

http.createServer((req,res) => {
  // console.log(req.url)
  // static/index.html 响应的是其html
  //  /static/xx.png 响应其图片

  // 响应磁盘下的文件
  const url = req.url;
  if(/^\/static\//.test(url))   //以..开头
  {
    staticServer(req,res);
    return false;

  }

  // 响应index.html  文件读取格式 二进制
//  fs.readFile('./static/index.html','binary',(err,file) => {
//   res.write(file,'binary');
//   res.end();  //响应结束
//  })

}).listen(8080,()=>{
  console.log('server is running 8080')
})
// 处理静态资源开头
function staticServer(req,res)
{
  let url = req.url;
  // 判断图片是否存在 
  console.log('url',url);
  if(url === '/static/') url += 'index.html';

  const filePath = path.join(__dirname,url);
  fs.exists(filePath,exists => {
    if(!exists)
    {
      res.end(`the request url: ${url} was not found`);

    }
    else{
      fs.readFile(filePath,'binary',(err,file)=>{
        if(!err)
        {
          res.write(file,'binary');
          res.end();
        }
      })
    }
  })

}