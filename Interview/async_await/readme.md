## Async   Await
  async 函数就是 Generator 函数的语法糖。
await 后面不是用promise不能保证后面代码的顺序执行



## Generator函数
  惰性：不能直接执行test(),test()只能生成一个对象，对象有一个{next}属性，通过调用next 一步步执行
```js
  function* test () {
    let a =  yield 1
    console.log(a)
    let b =  yield 2
    console.log(b)
    let c = yield 3
    console.log(c)
    }
```
通过g.next()一步步调用 每一步调用执行到yield 关键词  然后通过传参和作为上一个yield语句的返回值
value: 1, done: false 后面next 知道done=true结束

##next
  let a =  yield false   next是yield后面的值 也可是函数
  yield 不能返回值，返回后面的next

## Babel 
{

}

## Promisr Resolve
返回一个promise
  1.接收的参数如果是一个Promise 返回该Promise
  2.如果是一个基本类型(值)，就resolve(该值)