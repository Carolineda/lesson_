## Html defer async属性
 - Script  先下载 再执行
1.async属性
  html parse / 下载 并行
  下载完就执行 顺序无法控制
2.defer属性
  html parse / 下载 并行
  整个文档加载完成之后 按照script在文档中出现的顺序执行
3.没有属性
  HTML parse 和 js下载 执行都是互斥的


## crossorigin 
  1.用于 可以引入跨域资源的标签 ：img link script 不受同源策略的影响
  加入crossorigin 代表要协商跨域
  2.后端没有设置 Access-control-*   就会报错 不能加载图片资源
  -.crossorigin="anonymous" 作用会在请求头中加一个 origin属性， 
  -.use-credenetials请求的时候带上cookie等用户验证的信息


      如果未设置cros 跨域js 发生了错误 将会向window.onerror 提供很少的信息 通过crossorigin属性得到详细信息

## 安装依赖
  cnpm i koa koa-static -S