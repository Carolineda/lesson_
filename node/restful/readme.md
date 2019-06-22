## 前后端开发 restful  API

  - json 是标准的数据交换
  - 前后端开发，api json 格式交流
  - 全栈 fullstack
  
## restful   API  
  认为一切皆资源, 路由实现页面跳转， 路由则是暴露资源,设计url
  URL 是唯一的定位资源的符号，它有一定的设计原则 
      HTTP动词是Web资源的状态转化动词
  - 设计良好的URL  
      /posts
      /posts/1/comments
      /posts/:id
      /comments
      /comments/:id

- HTTP 动词
通过GET方法访问 查询数据
例： 如果追加一条评论   ->:增加一个资源 向url
POST ->  /comments   新增资源
Delete  删除
修改 PUT 把一条新的所有的内容替换旧的内容
Patch 更新  只要传递更新的字段，局部


- 操作      SQL方法       HTTP动词
  CREATR    INSERT         POST
  READ      SELECT         GET
  UPDATE    UPDATE         PUT/PATCH
  删除       DELEATE         DELEATE
  

## 命令 
 初始化    npm init -y   
 建立服务json-server接受restful语法     yarn add json-server
 结果运行     npm run server  : http://localhost:3000  在页面上加路由访问其数据 ：/posts，/posts/1 


