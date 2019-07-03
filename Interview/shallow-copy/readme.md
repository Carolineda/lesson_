##浅拷贝和深拷贝的区别
 - assign 对象的拼接方法

1.浅拷贝：只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象和源对象互不影响，不会改变。但是如果第一层的属性值是 复杂数据类型，则会被修改 那么新对象和原对象的属性值指向同一块内存地址

  浅拷贝会受其原始数据影响   浅拷贝被影响的是非原始基础数据类型，基础数据类型不会改变
  基本数据类型：
  let obj2 = Object.assign({},obj) 
  let obj3 = {...obj}   
  obj.name = '炸鸡'
  obj.like.push('泡芙')   结果：name没有改变 基础类型：string，number，boolean，null，undefined，symbol


2.深拷贝：是将对象及值复制过来，两个对象修改其中任意一个的值，另一个不会被改变


##Es6解构 :分为数组解构和对象解构
  {...obj} 把obj里面的东西解构
  1.数组解构
  let [x,y] = [1,2]  => x=1,y=2

  2.对象解构
  let {foo,bar} = {foo:"aaa",bar:"bbb"}  =>foo=aaa ,bar = bbb
  另外： 允许给赋值的变量重命名 //baz = 'abc'

  

## WeakMap() 键值对的统称

 - set() 添加值
 