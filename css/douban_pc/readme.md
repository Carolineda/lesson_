PC 相对于mobile 而言更复杂

 充分利用文档流，从上到下，从左到右

 - flex在使用前思考一下，最新的css技术 
 考虑兼容性问题，

 float 会影响其他相邻的元素，
 离开文档流 float 跟position:absolute两者存在区别

  PC端 先布局 layout,一般我们使用float

  - inline-block  清除间距，但存在BUG，兄弟之间间隙，相对年轻  ie8以下不支持