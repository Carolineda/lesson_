## BFC
 - BFC (Block Formatting Context)块级格式化上下文；
  
#BFC 原理 渲染规则
 1. 正常文档流会存在边距折叠问题（父容器子容器折叠，兄弟之间边距折叠）水平方向的外边距不存在折叠 ，水平方向不存在块级元素。
 2. BFC容器不会与浮动元素BOX重叠
 3. BFC在页面上是一个独立的容器，做显著的效果就是建立一个隔离的空间，外面的元素不会影响里面的元素，反之，里面的元素也不会影响外面的元素。
 4. 计算BFC容器的高度时 浮动元素也会参与高度的计算（是通常清除浮动的原理）


 #创建BFC条件
 1. float 值不为none
 
2. 绝对定位元素 (元素的position为absolute或fixed)；
3. 行内块inline-blocks(元素的 display: inline-block)；
4. 表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
5. overflow的值不为visible的元素；
6. 弹性盒 flex boxes (元素的display: flex或inline-flex)；
