// 双向绑定   数据驱动页面

const a = {
  b:1
}
function b(){
  console.log('a的值发生改变',a.b)
}
// 数据驱动页面原理  
function bindData(){              //拦截数据
  Object.keys(a).map(key => {        //Object.key 返回一个由一个给定对象的自身可枚举属性的数组
    let v = a[key]
    Object.defineProperty(a, key, {
      get() {   //读取属性时调用的方法
        console.log('正在读取a里面的值')
        return v 
      },
      set(newA) {   //写入属性时调用的方法
        v = newA 
        b()        //渲染页面  用diff算法判断修改部分
      }
    })             //defineProperties新增或修改自有属性   拦截对象a
  })       
}

bindData()
a.b=1234