#



4. fillter:contrast()调整图像的对比度
5. 边与边接触的时候，边界融合，对比度滤镜把高斯模糊的模糊边缘干掉，






1. mixin与函数的区别
    mixin 是一段样式的封装，可以在引用的地方复用stylus用的最多
    函数 有返回值，random（min max）
2. stylus 是内置的函数库
    floor math(0,'random')
    unit(,'px')
3. 200个元素stylus for
    for num in 1..200
        .g-ball:nth-child({num})  {}将变量进行编译
            $width=random(0,40)
            width unit=($width,'px')
4. filter constrast(20)
    mix-blend-mode:screen