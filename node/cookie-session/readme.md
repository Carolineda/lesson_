## cookie 出现的原因：
  http是无状态的 不能记录响应请求 
  在客户端 服务器 再次请求的时候 知道客户端是谁


  ## cookie 
    存在客户端：
    js 操作
    document.cookie

    后端：响应头
    set-Cookie:name1=value1;path=/;httply
    内容 :
      name 
      value:
      path:规定 cookie 生效的路径
                  所有的路/user/以及/user/xxx

      浏览器检查所有的存储 cookie,把符合当前作用返回的cookie放在http请求头 发送给服务器
      cookie 有可能被禁用
      httpOnly :true/false .true 就不能通过js 获取cookie
      max-age在几秒过后过期



作用范围：
path
domain
用途：会话状态管理，保存用户的个性设置


## npm i koa koa-router -S
  -S  => --save  在json文件上放置于：
  "dependencies":{} 依赖放置 
  npm i 在json文件里面寻找各个依赖并安装
  本地开发 安装的node_module 
  服务器上面只需要写的代码  不需要 上传node_module
  

  ## localSorage sessionStorage cookie session 浏览器存储



## session
  保存到服务端
  靠后台语言实现
  有很多个session 
  有很多个用户 sessionID


  ##Koa 第三方中间件 
    ctx req + res
    往ctx上面扩展
    ctx:{
      req,
      res
    }
  koa-views  ejs
  往 ctx上面扩展
  ctx:{
    req,
    res,
    render:()=>{}
  }
  调用 提供的 render()