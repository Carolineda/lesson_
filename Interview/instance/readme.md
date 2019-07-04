## 判断数据原型

  ## typeof 判断其类型
  - 不能根据typeof精确判断获取数据类型。typeof智能判断基本数据类型  
  - instanceOf：判断数据类型 返货true或false 不能用来判断基础类型, 可以用来判断数据类型 只能判断复杂数据类型

##精确的判断数据类型： 
  -Object.prototype.toString.call()
      console.log(Object.prototype.toString.call(1))
  先用typeof 检测 再用instanceOf检测复杂类型 

1.instanceOf 原理：是根据显示原型链判断的  显示原和隐式原型
 显示原型：prototype  隐式原型:__proto__


 ## __proto__ 和 prototype关联
  __proto__是每一个实例都有的属性，可以访问[prototype]属性,实例的__proto__与其构造函数的prototype指向的是同一个对象