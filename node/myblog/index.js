const path = require('path')
const express = require('express')
const app = express();
const routes = require('./routes/index')
// const userRouter = require('./routes/users')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


// app.use(function(req,res,next){
//   console.log('2')
//   res.status(200).end()    //提前终止页面
// })

// 1.传统的路由
// app.get('/',function(req,res){
//   res.send('hello,express')
// })


// app.get('/user/:name',function(req,res){
//   res.send('hello, ' + req.params.name)
// })


// 2.中间件
// app.use('/',indexRouter)
// app.use('/users',userRouter)

routes(app)

app.listen(3000)