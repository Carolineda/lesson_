##  $
  x.find()查找 x元素下面的内容$('.box').find('p')查找box类名下的p标签
  \s空白字符
  .replace(/\s/g,"");去除无用的空白字符

  ##promise
  promise.all([promise组成的数组])
  返回一个promise.  所有promise resolve 的时候他才resolve
  resolve 时候的值就是[ 所有的promise] resolve 组成的数组


  ##模板引擎
  发送漂亮的邮件  需要发送 Html
  html 不是静态的  需要数据填充
  {{ name}}
  {name }  变量编译进去
  模板引擎 同理 编译成html、

    MVC 
    jsp
    node 模板引擎 承载页面 承担（view）
    ejs jade 都是模板引擎
    <%= %>变量
    <% %> js 执行

