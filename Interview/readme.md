

## 面试

##状态码
200：请求被正常处理
204：请求被受理但没有资源可以返回
206：客户端只是请求资源的一部分，服务器只对请求的部分资源执行GET方法，相应报文中通过Content-Range       指定范围的资源。
301：永久性重定向
302：临时重定向
303：与302状态码有相似功能，只是它希望客户端在请求一个URI的时候，能通过GET方法重定向到另一个URI上
304：发送附带条件的请求时，条件不满足时返回，与重定向无关
307：临时重定向，与302类似，只是强制要求使用POST方法
400：请求报文语法有误，服务器无法识别
401：请求需要认证
403：请求的对应资源禁止被访问
404：服务器无法找到对应资源
500：服务器内部错误
503：服务器正忙


-token soket vue-cli3.0  node mysql

http  socket.io   流node.js    框架  预编译   正则表达式(邮箱 QQ 手机)

- 事件委托：
  

##腾讯面试题：index.js
  
## v-model双向绑定实现原理
  VUE机制使用diff创建虚拟Dom树，通过 defineProperties



## 面试题：

  ##q10: URL地址输入     
  1. Get请求   Post请求
 get  请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存
 post 一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能缓存，所以get请求更适合于请求缓存,post是加密传输
  2. URL长度限制输入的长度可以无限长度吗
HTTP协议并没有限制和url的长度，是浏览器或者Web浏览器做了url长度的限制，并且只针对get请求做出限制
  IE : 2803
  Firefox:65536
  Chrome:8182
  Safari:80000
  Opera:190000


  ##q12 :前端事件流  捕获 目标 冒泡
  在DOM标准的事件模型中，事件流包括以下几个阶段
    1.事件捕获：从外到里
    2.处于目标：执行
    3.事件冒泡：从里到外
addEventListener(监听属性) 第三个参数是判断为捕获还是冒泡 true是捕获  false为冒泡，默认是false(IE只支持事件冒泡)，事件委托是冒泡机制


   ##q16 类的创建和继承

   ##q17 解决移动端300ms延迟click 再iOS手机上有300ms延迟，原因及解决方法
    原因：判断双击是否是放大页面
    解决方法： 
        1.<meta name="viewport" content="width=device-width, initial-scale=no">   缩放0立马执行
        2.FastiClick    其原理是：监测到touchend事件后立刻发出模拟Click事件并把浏览器300ms之后真是发出的事件阻断             安装fastclick       npm install fastclick -S
    
  
  ##18  浏览器三大存储 localstorage   cookie  sessionStorage
    Cookie : 
        数据始终再同源的Http请求中携带(即使不需要) 即cookie在浏览器和服务器之间来回传递，而sessionStorage 和 localstorage 不会自动把数据发给服务器，仅在本地保存。cookie还有路径(path)概念，可以手动限制cookie只属于某个路径下 存储大小只有4K左右

    LocalStorage :
        在所有的同源窗口都是共享的，就网络页面上提示的保存密码，cookie在所有同源窗口都是共享的，其大小为5M左右


    SessionStorage
        仅在当前浏览器窗口关闭前有效，关闭浏览器失效，不能长久保存 


  ##q15 Js拖拽功能的实现
  点击图片实现移动
  onmousedown
  onmousemove
  onmouseup

##q19 任务列表(event loop)
  宏任务（macrotask ）
     setTimeout
     setInterval
     requestAnimationFrame
     Html解析
     Js的主线程
     页面加载
     用户交互
   
  
  
  微任务（microtask 
    promise
    process.nextTick
    mutation.oberver  (node的异步)
  - Script(主程序代码) ---> process.nextTick ----> promise ---->setTimeout ----> setInterval --->setImmediate --->I/O ---->UI reading

## q20 函数表达式和函数声明
在立即执行函数
  函数声明和函数表达式不同
  函数声明只在函数内部有效 并且此绑定是常量绑定
  不能对常量进行赋值
      var b = 10
      (function () {
        b = 20   console.log(b) 
      })()  报错

##q21 浏览器的重塑回流
  浏览器渲染页面过程：
    1.解析HTML 生成Dom树
    2.解析Css  生成CSSOM树
    3.将DOM 和 CSSOM 生成render树
    4.回流：根据生成的render树进行回流，得到结点的几何信息
    5.重绘：根据render树和回流得到的信息，得到结点的绝对像素
    6.将像素发给GPU

  回流： 当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。
  重绘： 当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。


  ##q22 Vue中的双向绑定
    1.属性拦截 Object.definePorperty 
    2.通过diff算法计算需要更新页面渲染的部分


  ## Vue 父子组件通信 子组件能否修改接收到的props里面的值
    不能
    子组件不能修改父组件prop  prop单向数据流，为了保证数据的单向流动，便于数据的追踪 避免数据混乱



## Vue/React 中列表组件key作用
  基于在没有key的情况下 diff算法更快
  key是给每一个虚拟节点的唯一id,可以依靠key,更准确, 更快的拿到旧的节点中中对应的虚拟节点会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key => index 的map映射）。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。



## 数组的拼接方法
  1.concat()方法生成了一个新的数组
  2.展开运算符 
  var arr1=['a','b','c'];
  var arr2=[...arr1,'d','e'];     //输出['a','b','c','d','e']
  3.展开运算符+ push
   ```js
  var arr1=['a','b','c'];
  var arr2=['d','e'];
  arr1.push(...arr2);           //输出['a','b','c','d','e']
  ```


##parseInt()               
      ['2','1', '11'].map((item, i) => parseInt(item, i));
  输出 [2, NaN, 3]
eg:'2' -> 0    '1'->1  '11'-> 2  parseInt(param,进制)



  ##图片的懒加载和预加载
    1.懒加载：最为服务器的前端优化，减少请求或者延迟请求。实现原理：因为浏览器读取src加载图片，是通过真正的图片地址存储在data-src   当JS监听到该图片元素进入可视窗口时，将自定义属性中的地址存储到src属性中
    2.预加载： 提前加载图片，当用户需要查看图片时，直接从本地缓存中渲染
    (懒加载对服务器有一定的缓解压力作用，预加载则会增加服务器的压力)


  ## Js中的各种位置
    clientHeight:表示的是可视区域的高度，不包含border和滚动条
    offsetHeight : 表示可视区域的高度，包含border和滚动条
    scrollHeight : 表示所有区域的高度，包含因为滚动被隐藏的部分
    clientTop : 表示边框border的厚度，在未指定的情况下 一般为0
    scrollTop : 滚动后超出屏幕之外被隐藏的高度

























## 1.SetTimeout 产生的异步  javascript是单线程
  同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。
当指定的事情完成时，Event Table会将这个函数移入Event Queue。
主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
上述过程会不断重复，也就是常说的Event Loop(事件循环)。

例子：setTimeout(() => {
    task()
},3000)

sleep(10000000)

task()进入Event Table并注册,计时开始。
执行sleep函数，很慢，非常慢，计时仍在继续。
3秒到了，计时事件timeout完成，task()进入Event Queue，但是sleep也太慢了吧，还没执行完，只好等着。
sleep终于执行完了，task()终于从Event Queue进入了主线程执行。

执行结果：sleep(10000000)  task()


## 2.Promise 代表异步操作
  1.Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject  resolve实现的是未完成到成功的状态，reject实现的是未完成到 失败的状态 
  2.then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用

  - 执行过程
    Promise 新建后立即执行  
    then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，




## 3.Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。
  1.判断浏览器是否支持XMLhttp对象
  2.如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据

## 4.正则表达式
其特点：测试字符串内的模式
       基于模式匹配从字符串中提取子字符串
  1.^ 为匹配输入字符串的开始位置。
  2.[0-9]+匹配多个数字， [0-9] 匹配单个数字，+ 匹配一个或者多个
  3.$ 为匹配输入字符串的结束位置
  - 特殊字符
()标记一个子表达式的开始和结束位置
?匹配前面的子表达式零次或一次
.匹配除换行符 \n 之外的任何单字符
\d 匹配一个数字字符。等价于 [0-9]
\w 匹配字母、数字、下划线