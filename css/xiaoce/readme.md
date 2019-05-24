##界面大框架 经验

- 水平方向一般禁止滚动条  垂直方向出现滚动条
    1.水平和垂直两个方向都滚动，页面则会摇晃 容易产生误操作
    2.垂直方向一直滚动是目前开发的趋势 主要方式


- margin:0 auto; max-width:960px
- flex 布局
  1.flex-grow 放大
  2.flex-basis 
  3.flex-shrink 缩小
  4.flex-wrap
   当网页由PC到手机时 缩小阵仗 
   经验 简单的适配PC到手机，顾及所有用户体验
    PC端: width设置为最大宽度，max-width margin:auto  padding margin
    mobile: 使用flex-shrink  让关键部分坚挺