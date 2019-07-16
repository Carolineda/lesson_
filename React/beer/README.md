## Es6 class 新特性 react找到dom元素
  ref = this.createRef()
  ref = {this.ref}

实现跳转： -history html5的Api
Search 组件 是Main的子组件 
  获取子组件的数据1.window.history  (不建议使用)
  2.hoc高阶组件 返回search组件
    <Route><Search/></Route>

##高阶组件
  能返回组件的函数，接受组件作为参数  称高阶组件
  with Router  react-router-dom 封装一个组件 并为之提供this.props.location
  组件外面在包一个组件： <Route><Search/></Route>  得到传参
  