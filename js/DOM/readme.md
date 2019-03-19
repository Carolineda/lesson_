dom event(事件)
- dom 中
    onclick() 事件注册只有一个  期初       dom-0
    addEventListener('click')  注册不限   dom-2
    addEventListener('keyup')  注册不限   dom-3

    按钮绑定一个属性在没有点击的情况下也会触发那个函数

- event
        event.stopProgration() 阻止事件冒泡
        event.stopImmediatePropagation()  阻止后面注册事件

- dom 事件流 
   捕获（capture）
顺序 window->document(documentElement)->body->父级->目标

- 冒泡（bubble）顺序则相反
 window<-document(documentElement)<-body<-父级<-目标

  事件按照 dom流 的顺序执行我们的事件回调  
  处于目标阶段的时候 事件调用顺序是取决于事件注册的顺序


  - tagName  
  innerHtml
  - 事件代理（事件委托）
  event-question.html  原理：冒泡