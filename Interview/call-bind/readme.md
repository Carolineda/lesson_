## Call bind apply 修改this的作用域

  .call方法   方法要引用另一个方法获取不到 .call 
     1. b.call(a) 把b的作用域强行指向到a的作用域 
     2. 第一个参数一定是this作用域你要去得到的地方，之后的参数是该作用域里用到的值
     3. b.call() || b.apply() 里面没写参数，此时this的作用域会指向window


  .apply 方法
    和call相似，但是除去第一个参数之后的参数是接收的数组格式   b.apply(a,[9])

 .bind方法  返回的是一个修改过的函数，通过一个函数的方法调用  bind接收的参数是按照形参按顺序执行 
    bind() 函数会创建一个新绑定函数。
    var b = a.fn    var c = b.bind(a,5)    c(1,2) 
    参数直接在调用函数里面  ->顺序：5,1,2



## typeof 判断其类型
  - 不能根据typeof精确判断获取数据类型。typeof智能判断基本数据类型  
  - instanceOf：判断数据类型
  - instance 可以用来判断数据类型 只能判断复杂数据类型
精确的判断数据类型： 先用typeof 检测 再用instance检测复杂类型

1.instance 原理：是根据显示原型链判断的  显示原型链

## 浅拷贝 和 深拷贝的区别
  