#作用域 Scpoe
   document Dom
     getElementsByTagName
     getElementsByClassName
     querySelector
      querySelectorAll

window BOM 
    在js中顶层window
        全局定义 var name="" 
         全局变量  在js中 为Window
         局部变量   函数(function(){})
        
Window js  1.内嵌在浏览器的脚本语言，它与其它语言不一样的地方在于顶级window，
全局变量挂载在window上  console.log(name); 或者console.log(window.name) 

Window 类型 typeof  window 
            1.数值
            2.null
            3.undefined
            4.boolean
            5.String
    Symbol object

{}块级作用域 可用if()  for()

const let 比var 优秀的地方，其遵守块级作用域
全局->函数局部->块级作用域
Scope 范围

   setTimeout （异步的内置函数  ）
     for循环 是立即同步执行
    在1000毫秒之后 i用var定义 运行结果变成10
    let 块级作用域  for{块级作用域 Let}1000毫秒之后，在使用Let独立运行每句
     