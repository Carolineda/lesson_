类型检测js考点

<!-- New Arry()[] -->
Object 
Array 可遍历for(i)
JSON object 对象字面量  可枚举的对象for（key in）
function 是一等对象

  #typeof 
  1. Object.portotype原型对象上.toSring()方法，弥补typeof不足，例如：[],
  返回值"[object Object]"
  2. 借给Array 
  Object.prototype.toString.call([]) 函数上就存在call,动态指定内部this指向
  例： Object.prototype.toString.call(145) 返回值："[object Number]"
    ：Object.prototype.toString.call([])   返回值： "[object Array]"

  3. JS的面向对象
  Type{isString}
  4. 立即执行函数+嵌套函数定义  称为闭包
  type 在这些嵌套函数时被调用时可以引用

  
  #立即执行函数
  结构：(function(){})()
  (function(){console.log('马上执行')})()
  返回值：马上执行




