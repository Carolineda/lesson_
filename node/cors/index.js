
var express = require('express')
var app = express();

// 解决跨域问题
var cors = require('cors');

// req ->res 链接数据库 next  链接之后验证身份信息： 通过session
app.use(cors());    //启用中间件
// next


app.get('/products/:id',function (req,res,next) {
    res.json({
      mgs:'This is cross-enable for all original'
    })
})



app.listen(80,function() {
  console.log('web server listening on port 80');  //web server 默认端口 80
})