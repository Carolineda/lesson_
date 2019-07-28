##ES6
  对es6理解， es6是相对es5 ECMAScript的第六次修订 ES2015  随着babel构建 webpack等构建工具的成熟，es6成为js编程的事实标准 es5更加简洁 提高开发效率 让Js代码优雅

  - 新增的特性
1.let变量和const常量声明   具有var没有的块级作用域，比如 循环事件监听时闭包就不需要了，让代码更好理解。
var 有变量提升的能力，let const 不会到顶级对象，使用的变量或常量一定要声明

  window.oneVal  =>  undefined
  var oneVal = '123'
  window.onVal => '123'
  let anVal = 'aaa'
  window.anVal =>  undefined


2.箭头函数
  简化函数的表达形式，
    - 1.不用function关键字 ()=>{}    ()是参数部分  
      2. 如果只有一个参数  可以省略()
      3.如果代码是直接返回值  {}也可以省略  就是返回值
      4.有效规避this丢失问题 指向上一级


3.模板字符串
  增强版的字符串 用``云括号，多行的表达方式，特别适合React,JSX template书写 
  Dom 或html模板的构建 更加优雅


4.解构赋值
  可解spread 可合reset 从对象或数组中提取值，对变量进行赋值，提高开发效率


5.新增 for of循环 
  解决for 记步循环，但是对象  set Map 类数组 以及字符串都可以遍历

6.SET ES6 新增的数据结构 类似数组， 提供唯一的 没有重复的值,重复的值添加时不会再添加

7.import export es6模块化 
  是es6原生支持的 module，将Js代码分割成不同的小块的独立开发 一个文件一个类 一个独立的模块： ： utis api

8... 展开运算符
  方便对数组进行展开，

9.终于支持原生的Class关键字，js有了传统面向对象的写法 extends   ‘继承’
  extends不过只是语法糖，底层还是基于原型的面向对象

10.Promise 为Js异步提供解决方案，回避了回调地域通过.then() 让异步代码的书写和执行是一样

11.更棒的异步解决方案 es7 的async await  Kao就是基于async await 快速替代express

12.Vue react 响应式编程依赖的proxy  defineProperty  监听对象的改变 做一些事情

13。Symbol  提供新的数据类型


