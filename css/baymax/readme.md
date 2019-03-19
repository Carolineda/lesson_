- 1.相对单位 目的自适应 不同的移动设备
    以750px为分界线
    iphone XR  
    小米 华为
    iphone Max
    小米 华为
    vw vh 解决是按比例分配宽/高 20% 20vh 100vh主体容器

    em 移动端少用px rem   //适合细致的每个盒子和盒子模型的大小等的比例定义
    em 是相对于自身大小形成比例  10em=10*14px

    rem 是html 根元素的fontsize
    skew 倾斜 顺时针方向+  则反
    background 

    - 2.
        （1）:before :after 伪元素 没有标签（不需要声明标签），可以像真正元素一样在页面上占位子。在Dom 文档里面不需要写此元素，不会影响到内容的显示
        （2）使用CSS来声明， 用content属性是必需，一般内容为空

        radial-gradient 渐变
     - 3.
         html 默认的字体大小是16px;如盒子没有设设置大小，会使用父级，或body font-size