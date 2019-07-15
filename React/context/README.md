## Context 两个版本 15 16.0
  跨组件之间的数据传递   
     父->子 -> 孙组件传递：this.props  但是 通过context 可以之间从父->组件
  . 在context在react不推荐使用，被react-router react-redux 广泛使用

- context 实现父子通信的时候
 //  后代组件在此获取信息
   getChildContext() {
     return {
      theme:this.state.theme    //theme 从state中获取  return当作抛出提供的信息
     }
   }
   prop-types进行类型约束
  安装：cnpm i prop-types -S 

#提供数据和获取数据的地方都要类型约束


## 在Class中定义一般函数和箭头函数


##生命周期
  shouldComponentUpdate  组件性能优化，尽可能的少渲染 默认return：true
  如果是return：false 则不更新不渲染
  如果中间某个组件 shouldComponentUpdate false 后代组件不会更新
  
## 新版本的Context 16.0
 解决了shouldComponentUpdate(){
   reuturn false
 }
