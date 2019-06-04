const Koa = require('koa');

const views = require('koa-views');
const path = require('path');
const app = new Koa();
// ejs 提供转HTML 的中间件
// 模板引擎在哪个位置
app.use(
  views(
    path.join(__dirname,'./view'),{
      extension:'ejs'

    }
  )
)

const user = {
  name:'大黄',
  post:[{id:0, title:'流动的 SVG 线条'},
        {id:1,title:'Vue.js系列'},
      ]
}

const posts = [
  {
    id:0,
    content:'用 SVG + CSS 实现'
  },
  {
    id:1,
    content:'<strong>react 表示不服</strong>'

  }
]

app.use(async(ctx)=>{
  // req res 
  //  /user 用户的主页
  // req.url 用户请求地址栏 解析请求的地址
  if(ctx.path === '/user')
  {
    // 返回用户页面 user  视图 模板引擎ejs  渲染到ejs
   await ctx.render('user',{
     user
   });
  }
  else if(ctx.path === '/post')
  {

    // 封装好的get 请求 查询参数 ? name=a&age=b  {name:age}
    const {id}=ctx.query;
    const post = posts.find(item => item.id == id);
    await ctx.render('post',{post})
  }
  else{
    ctx.body = '无法处理该路径'+ctx.request.url
  }

})
// .listen 就是 原生Http.listen
app.listen(8080,()=>{
  console.log('server is running 8080');

})