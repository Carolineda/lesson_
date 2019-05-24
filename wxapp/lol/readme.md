- 小程序开发工具，初始化一个项目框架
   小程序是架构在微信（原生App）,使用前端技术和思想，来快速开发一份代码到处运行。

小程序不用下载，不用写两次，快速高效



- html  在小程序对应wxml(有其固定标签)
新标签：div=view
css => wxss
js => js  bindtap=>onclick
page=wxml+wxss+js

小程序由一个个配置搭建，又由这三部分组成
app.json是项目描述文件，添加的page要在app.json里声明切页面时，wx.navigateTO()

-MVVM
只要你有了数据 Model,在js中用data声明
Page({
   data:{
      legends:[]
   }
})
View视图层 Wxml 等着数据编译输出html模板{{}}
指令，wx:for 循环输出