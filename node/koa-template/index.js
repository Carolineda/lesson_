// 构造函数命名规范
const Koa = require('koa');

// 应用的实例
const app =new Koa();
const admin = new Koa();
app.use(async (ctx,next)=>{
  console.log(1);
  // 后台没有回应 自己处理 not found
  // 交给下一个中间件
  await next();
  console.log(2);

})
app.use(async (ctx,next)=>{
  console.log(4);
  await next();
})
app.use( async (ctx) => {
  console.log(3);
  // req  res ctx封装req res
  ctx.body =`hello Koa`;

})

// 1 3 2 
app.listen(3000,()=>{
  console.log('server is running 3000')
});

admin.listen(4000,()=>{
  console.log('admin server is running 4000')
})

