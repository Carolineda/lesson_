// 文件上传  用户提交图片

// 引入模块
  const http = require('http');
  // 解析请求
  const formidable = require('formidable');
  const fs =require('fs');
  const path = require('path');

  http.createServer((req,res)=>{
    if(req.url === '/upload' && req.method.toLowerCase() === 'post')
    {
      // 解析文件
      const form = new formidable.IncomingForm();
      form.uploadDir='./static/'; //文件指定存放目录
      form.parse(req,(err,fields,files)=>{
        console.log(fields,files);
        // 上传成功后，图片上传的原地址
        const oldPath = files.upload.path;
        const fileName = files.upload.name;   
        // static\\upload_1460869cd5621759845059c92d6a8ae0
        const dirname = path.dirname(oldPath);
        // dirname ===static  获取到static  拼接
        const newPath = path.join(dirname,fileName);
        // 重命名需要两个路径 原来路径 newPath
        fs.rename(oldPath,newPath,(err) => {
          res.writeHead(200, {
          'Content-Type':'text/html;charset=utf8'
        })
        res.end('文件上传完毕');
        })
      })
      return false;//不会执行后面代码
    }
    res.writeHead(200, {
      'Content-Type':'text/html;charset=utf8'
    })
    res.end(`
    <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="upload" >
    <input type="name" name="nickname" >
    <input type="submit" value="submit">
  </form>
  `)
  })
  .listen(8080,()=>{
    console.log('server is running port 808.')
  })
