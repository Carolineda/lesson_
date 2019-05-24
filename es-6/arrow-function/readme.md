## 用法 ES6
- 只有一个参数可以省略括号
- 函数只有一条语句 {}return,返回对象时候()

  eg: // var arrow_f =v=> v;
    var es6_f=()=>({
        name:'Alice'
    });


## arguments
- 所有函数中(除了箭头函数)都可用的局部变量
- [arg1.arg2,arg3]
- 普通函数可以定义重名形参，用arguments输出不会覆盖
        function func1(a,a)
        {
            console.log(arguments);

        }
        func1(1,2);


##普通函数和箭头函数区别
- 箭头函数不支持重名形参，普通函数可以
- 箭头函数没有this，他的this指向定义时所处的上下文（外部函数）this
- 箭头函数不能通过.call  .apply..改变箭头函数的this
- 箭头函数没有.prototype属性
- 箭头函数不能作为构造函数
- 箭头函数没有arguments
- 箭头函数没有new.target



##new.target
ES-6新增属性
- 一般用在构造函数之内，返回new作用域的那个构造函数

##类数组
  -有length 属性
  - 可以通过 索引获取值  满足此两个条件->类数组
  - Array.from（静态方法） 从类数组对象中创建一个新的数组