function Animal (name) {
  this.name = name
  this.sleep = function () {
    console.log(this.name + ' sleeping')
  }
}

// // 构造函数原型链上添加方法
//   Animal.prototype.eat = function(food) {
//     console.log(this.name + ' eating ' + food)
//   }


//   // 原型链的继承
//     function Cat () {}
//     Cat.prototype = new Animal()
//     Cat.prototype.name = 'cat'

//     var cat = new Cat()
//     console.log(cat.name)
//     console.log(cat.eat('fish'))
//     console.log(cat.sleep())
//     console.log(cat instanceof Animal)
//     console.log(cat instanceof Cat)



// ---------------构造函数的继承
  // function Dog(name) {
  //   Animal.call(this)
  //   this.name = name || 'Tom'        //Animal this 指向Dog 实际上是this.name  是Animal Dog能够访问Animal作用域


  // }
  // var dog = new Dog()
  // console.log(dog.name)
  // console.log(dog.sleep())
  // console.log(dog instanceof Dog)
  // console.log(dog instanceof Animal)      //false  没有再Animal 原型链上添加属性 只是animal作用域  原型链上并没有







  // -----------------组合继承 原型链和构造函数的继承
  //   function Dog(name) {
  //   Animal.call(this)
  //   this.name = name || 'Tom' 
  
  // }
  // Dog.prototype = new Animal()           //Cat构造函数原型链
  // var dog = new Dog()
  // console.log(dog.name)
  // console.log(dog.sleep())
  // console.log(dog instanceof Animal)




  // -----------------------寄生组合继承  用来不能被实例化的方法
  function Cat(name) {
    Animal.call(this)
    this.name = name || 'Tom' 
  }
  (function (){
    // 创建一个没有实例方法的类
    var Super = function () {}
    Super.prototype = Animal.prototype
    Cat.prototype = new Super()       //可有实例方法的函数
  })()
      
  var cat = new Cat()
  console.log(cat.name)
  console.log(cat.sleep())
  console.log(cat instanceof Animal)
  console.log(cat instanceof Cat)
