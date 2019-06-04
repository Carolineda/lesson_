// 提出中间件思想

const Koa = require('koa');

const app = new Koa();
// 中间件负责计算时间间隔
app.use(async (ctx,next) => {
  // 计算命令执行时间  
  const start = Date.now();
  // ctx.body = 'hello Koa';
  await next();
  const end = Date.now();
  const diff = end - start;
  // 命令放置响应头里面  writeHead Content-type
  ctx.set('X-Response-Time',`${diff}ms`);
  console.log(`spend ${diff}ms`);

})

// 负责响应response 的中间件
app.use(async (ctx) =>{
  ctx.body = 'hello Koa';
})
app.listen(3001);