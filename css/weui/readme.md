# WEUI

  来自于微信的前端开发框架
  - 微信生态是最大生态 1.公众号
                     2.小程序
                     选择weui.css在其基础上开发

  - APP 生态
            内嵌的Html、
  - PC 传统网站 Bootstrap
  
  - 界面的编写过程 
    1.用html写出结构， 独立于样式
        - 研究Dom文档流（从左到右，从上到下）
        - 取类名
            【BEM】 规范
              Block区块 ：weui-cell
              weui-button  30-50利用的组件
              Element 元素（细化）：weui-cell__hd
                           weui-cell__bd
                           weui-cell__ft
            通用的词汇 hd+bd+ft
               <!-- .weui-cells>.weui-cell__hd+.weui-cell__bd+.weui-cell__ft  转换 -->
        <!-- <div class="weui-cells">
            <div class="weui-cell__hd"></div>
            <div class="weui-cell__bd"></div>
            <div class="weui-cell__ft"></div>

    2.之后再写样式

    -  border是盒子模型的一部分，用Border会影响盒子的大小 用伪元素不会影响盒子大小 

    - 离开文档流 里面的元素不再受其影响  before absolute 脱离的正常的文档流]weui-cells  border-top使用盒子模型，元素在页面上的占位是需要综合考虑  内容宽高，padding，border，margin以及position

    transform-origin 基点

    - [] 1px边框问题 （css像素）
            CSS像素 1px在手机 硬件物理像素retina 2px 3倍retina 3px
                 通过transform scaleY(0.5)压缩  浏览器不会处理小数点像素  在配合transform-origin：基点，某个点不动  上边线，从下往上压，scaleY

   -  flex 弹性布局 重新定局同行元素 不受块级约束，他的内部是一个新世界，弹性布局是父与子的一起的布局，他有好用的对齐的方式，align-items默认是在垂直方向上对齐 居中   justify-content横轴在一堆子元素中，只给一个元素的设置，flex:1这个元素成为主元素  其他元素占据完自己该占完的盒子模型内容后，剩下的空间都交给主体元素。