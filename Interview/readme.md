##考题点

 1.页面加载图片量过多，提高用户体验  解决通过懒加载（分布加载）

 2.（浮动）双飞翼布局

 3. 算法 Leetcode
    算法 {
     - 数组去重

        }

 4.COMMON NODE引入模块

 5.计算机安全 网站
 
 6. promise

webpack

7
数据结构

## vue vuex数据仓库
  组件通信

##数组
 1.Math.round
 2.Math.ceil

## 面试

##状态码
  301：永久
  302:
  304
  401

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


##q15 Js拖拽功能的实现
  点击图片实现移动
  onmousedown
  onmousemove
  onmouseup

























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
