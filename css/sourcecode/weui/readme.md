##源码分析
    stylus 
    1. @import文件引入，一个文件做一件事，有利于代码的维护与管理，多人协作
    /base/reset  基础的reset任务
    base 是核心 widget
    @import 可以做文件的分离和管理，多人的协作，目录看到其思想
    variable 作为一个大项目时，有大量的变量维护，variable成为目录，

##weui.styl 是入口文件 @import负责各个部分， 
base/widget 
- reset.styl
- variable
  - global.styl
  - weui-button.styl
- weui-button