// 腾讯面试

  function Person (name) {
    this.name = name
  }
  let p = new Person('wn')   //p的隐式原型链是什么  
  // 1.p.__proto__等于什么： Person.prototype
  // 2.Person.__proto__ : == Function.prototype
  // 3. Function.__proto__ ==Object.prototype
  // 实例的隐式原型链等于其构造函数的显示原型链  在往上找其显示原型链


  var foo = {},
      F = function(){};
  Object.prototype.a = 'valA'
  Function.prototype.b = 'valB'
  console.log(foo.a)  //输出什么  valA
  console.log(foo.b)   //输出 undefined  Function 不会再往上传  往下继承
  console.log(F.a)     //输出  valA    往上找到父级 Object 继承Object
  console.log(F.b)     //输出  valB




  function Person (name) {
    this.name = name
    return{}        //输出{}
  }
  let o = new Person('wn')
  // console.log(o)    //输出Person {name:'wn'}  
  
  // -------构造函数是不需要返回值的，使用new来创建对象时 如果有返回值 return的是非对象类型，会忽略返回值，
  // 如果是return对象 则返回该对象(若return null也会忽略返回值)





  function Person (name) {
    this.name = name
  }
  function Student() {

  }
  Student.prototype = Person.prototype
  Student.prototype.constructor = Student      // 让Student函数变成构造函数
  let s = new Student('dada')
  console.log(s instanceof Person)    // 输出true
  // Student函数的原型链==Person函数的原型链  但是不能继承其属性






  for(let i = 0; i < 10; i++ ){
   setTimeout(() => {
    //  console.log(i)
   }, 0);
  } 
  for(let i = 0; i < 10; i++ ){
    (function(i){
      setTimeout(() => {
        // console.log(i)
      }, 0);
    })(i)
   }  
  //打印出10个10    转换成打印出0-9
  // 1.把var改成let打印0-9
  // 2.用闭包 块级作用域
  //--- let 每次循环会生成一个封闭的作用域和setTimeout绑定，而var每次循环会覆盖上一次的作用域




// 数组遍历和对象遍历 for in   for of   for in可以遍历数组 但是不建议
Array.prototype.method = function() {
  console.log('array')
}
   var myArray = [1,2,3,4,5,6,7]   
   for (let index in myArray) {
    console.log(myArray[index])     //遍历出来是对应数组的下标 let in
   }
// for in 能够遍历数组，
// 1.index索引为字符串型的数字,不能直接进行几何运算 获取的其下标,能够获取可枚举的所有属性包括原型链上,只要改变for in 遍历改变属性时 原型链上会改变
// 2.遍历顺序有可能不是按照实际数组的内部顺序进行的
// 3.使用for in 会遍历数组所有可枚举属性 包括原型链上，所以for in更适合遍历对象

// 1. for of 遍历的是数组的每一个元素,不包括数组原型上的属性和索引  不会受原型链上的影响 只返回数组元素
// for in 遍历的是数组的索引





// let gArr = [1,2,[3,4],5,[2,7,[3,9]]]  扁平化输出[1,2,3,4,5,2,7,3,9]   递归
let gArr = [1,2,[3,4],5,[2,7,[3,9]]]
// 方法一
function outputArr(arr) {
  let res = []
  for(let i = 0;i< arr.length; i++){
    // 判断拿到的是数组
    if(Array.isArray(arr[i])){
      res = res.concat(outputArr(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res
}

outputArr(gArr)
console.log(outputArr(gArr))
// 方法二 reduce方法
  function outputRes(arr){
    return arr.reduce(function(pre,item){
      return pre.concat(Array.isArray(item) ? outputRes(item) : item)
    },[])
  }
  console.log(outputRes(gArr))