##浮动 
 脱离文档流

 - 清除浮动 【5种方法】
    both 清除左浮动右浮动
  1. 在父元素底部加代码 ： <div style="clear:both"></div>  弥补父容器高度缺失
  2. 利用bfc，称“块级格式上下文”,在父元素css中增加代码    ：overflow: scroll;overflow: hidden;overflow: auto;
  3. 利用伪元素after 在css样式中 给父元素div添加clearfix类名 ：
                                       <!-- .clearfix::after{content: ""; display: block;
                                                          clear: both;   } -->
  4. ！ 不建议使用  给父元素增加css 父容器浮动
                <!-- .content
                {
                    float:left;
                }                  -->

  5. 一个更优化的改进 --尼古拉斯大师 方法
        在父容器上加clearfix类名
        .clearfix:after{
            content:"";
            display:table; 
              clear: both; 创建表格单元默认触发块级格式化上下文 BFC

        }                           
                                                             
