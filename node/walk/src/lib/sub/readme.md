##fs模块

- readdir
 读取目录内容  IO操作异步 
 readdirSync Async 异步

 JS是单线程， 用回调函数或Promise，释放线程的控权，主要因为js是前端Dom的编程，用户交互较多，
 等到执行完后再通过event-loop机制，通过（callback  resolve）拿回控权
 在Node中，js获取了服务器端的能力，
 readdirSync()