-  不再写css 写的是css的预编语言stylus （快），一套语法支持现代css开发
            compile过程
            调用stylus style.styl -o style.css  
             -o:output
             stylus -w style.styl -o style.css -w:watching 一直监听文件的修改，实时生成style.css
  1. 跟css规则不同 {}；以tab 缩进不需要
  2. stylus 提供嵌套功能 可以帮助补上前面的选择器 现在当前的css模块化
  3. &运算符
    依然使用tab缩进，但是与上一级同级，适合用于同一个元素多个样式多个类名 .active 或者伪类，伪状态
4. 变量定义
   将常用的，重复使用 css不是编程语言 在最上面统一定义后，可以修改一处所有使用此变量的地方都会跟着修改啊网站风格

#css语法
 1. overflow:hidden
 2. flex align-items 搞定 vertical-align在有些情况不能适应
 3. text-rendering:optimzeLegibility抗锯齿，在高清手机上文字边缘不出现锯齿
 4. flex-shrink：0  flex-grow
 5. 第几个元素的选择用未来选择器
 ：first-child :last-child :nth-child(2n) :nth-child(2n+1)
6. -apple-system  
