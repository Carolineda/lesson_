new 发生什么

- 构造函数的运行方式 是以new的方式运行 所以函数内部的this是动态的 内部的this 运态指向实例化this


- 空对象 开始之后拿到构造函数定义的属性，最后拿到prototype上定义的属性和方法 

  对象由属性和方法构成

 1. 实例化一个新的对象，并且是这外类的实例
 2. 构造函数被执行，this指向实例，constructor运行慢半
 在面向对象里面构造函数视为他人服务，为this服务，this由函数的运行方式决定
 this->指向其实例  new
 this ->任何对象 call

 3. Otaku.prototype 值是对象，原型对象
 
 Otaku.prototype 任何函数都拥有Prototype属性，因此属性才能构建类
   举例：火车， constructor-车头，
        车头-车身 

4. ._proto_ 私有属性