##w为什么会有新特性concurrent mode

  以前：async mode 现在：concurrent mode 自己计算优先级 可以用flushSync破环优先级
  目的：让react真题渲染一个优先级的排比
  优先级？
    1.js是单线程
    2.浏览器 是多线程
        -UI渲染 渲染HTML
        -js解析
        -http 请求
    3.js线程和ui是互斥的  js可以操作Dom
    4.互斥导致卡顿的产生：Js执行占据很大的空间导致UI得不到响应