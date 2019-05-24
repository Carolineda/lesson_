##微信小程序
- wxml是模板，{{}}是要被编译的模板
用户看到的不是wxml，是wxml被js data填充编译后的页面（Page）,此页面是wxml+js+wxss合体 compile

- setData({
    相应数据时
})重新触发compile

- 在wxml里把所有的逻辑及对数据的渴求都表达，在某个页面只会显示当前状态的页面状态，跟数据相关
    状态 由数据决定 
    改变数据，setData界面自动改变
    数据驱动界面MVVM
    数据要和界面状态唯一

- todos 添加要做的事项  
 表单提交  js dom编程 todos [] appendChild
 data:{
     todos:[]
 }
 form ->submit  添加：this.setData()

  todos: []

  - {{js 运行区域}}
  输入时添加->todos