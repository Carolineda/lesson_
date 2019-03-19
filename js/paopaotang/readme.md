class 类 js此时也有
es5 没有class 关键字？怎么做面向对象？

js是面向对象的  Function是一等对象
普通函数 Player()
new Player(); 作为类的构造函数被运行，
function Player(){this}
this 一直都在 ，函数里的一个常在  指针
this 指向一个Object{} this.name=name

- 函数运行方式的不同，this指向不同
 当普通函数被运行时，this指针没有使命， 全局 在前端指向window ,node 指向global undefined

 当函数作为构造函数被运行时，new Player（）;this会指向 实例化的对象。构造函数需要的过程，

 函数可以用来构造类 js 通过this  this一直存在他是一个指针。

  函数的运行方式会导致this指向不一样，作为普通函数 ：this=>全局window||global
   如果代码启动严格模式，则this undefined

 - 【new】
  在其过程中发生什么 
  new Player();将函数作为构造函数运行  
    this指向 object{}对象 对象里面的方法
     
 this => {}constructor   对象
 this.name=name   初始化的构造过程

 - 构造函数