## 安装：
  1.npm init -y
  2.cnpm i redux -S    安装redux



## Redux 数据流
 1.redux管理全局的数据
 2.action   ：纯对象  {}
 3.reducer  ：纯函数(只依赖于入参(state,action))而且返回一份【新】的数据，不能在原来的数据上修改   函数的返回值决定store里面的值
 4.dispatch  ：修改通过dispatch(action) 修改数据，每一次dispatch都会出发reducer 根据action做判断
 5.store  ：状态的集合


 - combineReducers 又多个reducer用以组合，