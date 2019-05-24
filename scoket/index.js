// // 接口 服务器端
// import express from 'express'
// import morgan from 'morgan'
// import path from 'path'
// import socketIO from 'socket.io'

// const app = express()


// app.set('views',path.resolve(__dirname,'views'))
// app.set('view engine','ejs')

// app.use(morgan('dev'))


// app.get('/',(request,response)=>{
//     // 渲染
//     response.render('index')
// })

// let server=app.listen(3000,()=>{
//     console.log('炸鸡啤酒')
// })
// let io = socketIO(server)

// io.on('connection',(socket)=>{
//     console.log('connected')
// socket.on('disconnected',()=>{
//         console.log('disconnected')
//     })
//     socket.on('message',(msg)=>{
//         // console.log(msg)
//         io.emit('message',msg)
//     })
// })



// 用node 写接口
var http = require('http')
http.createServer(function(request,response){
    // 设置http状态  200为成功
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end('hello world')

}).listen(8080)
console.log('666')