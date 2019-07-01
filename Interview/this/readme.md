##  JavaScript全局执行上下文为你创建了两个东西:全局对象和this关键字


## this作用域
  1.全局：window
  2.不是全局： 指的调用的对象


## 在js中 new的实现原理
  1.创建一个空对象，构造函数的this指向这个空对象
  2.这个新对象被执行[原型]连接
  3.执行构造函数，将属性或者方法添加到this引用的对象上
  4.如果构造函数中没有返回其他对象，则返回this,创建的新对象。否则就是返回构造函数的返回的对象()





## __proto__ 和 prototype
  1.只有function才有原型链 prototype
  2.万物皆有__proto__

(方法)function.__proto__.__.proto__ =(对象) object.__proto__ :
 let a = {}  let b = function(){}
 a.__proto__   =  b.__proto__.__.proto__

  a: a.protype
    undefined
    a.__proto__
    {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

  b: b.__proto__
    ƒ () { [native code] }
    b.__proto__.__proto__
    {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}