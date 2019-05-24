 #小程序canvas 找cax
   

   引入 cax组件  
   new cax.Stage()
   cax.Rect
   add
   update

##countdown 组件
    文案： 获取验证码
    开始计时 start false|true
    page  为组件的调用者  properties
    组件    data(自身数据) + properties(外部传入)
    <countdown start="{{start}}">

- properties 有个observer选项 当外界值改变时，会执行。
 组件是构成页面的，为页面打工。

- start 由外到内properties
  有利于页面操作关键状态
  由外到内通过properties，内部组件通知页面  可以做