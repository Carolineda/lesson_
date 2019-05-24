//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      'https://i8.mifile.cn/v1/a1/94696d56-baae-9397-a79c-c157c70f0347!720x360.webp',
      'https://i8.mifile.cn/v1/a1/8f0d9d4c-6261-7431-addb-f95a48d0a1ad!720x360.webp',
      'https://i8.mifile.cn/v1/a1/e6fbd905-b149-5ae4-82b6-6632c4e95167!720x360.webp'
    ],
    navBar:[
      {img:'https://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b!144x152.webp', name:'新品发布'},
      {img:'https://i8.mifile.cn/v1/a1/c49fb77f-b5e0-8336-17aa-9ded56ef184c!144x152.webp',name:'小米众筹'},
      {img:'https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee!144x152.webp',name:'以旧换新'},
      {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c94c523eb03128378ef2dc17c2c2cf0a.png?thumb=1&w=144&h=152',name:'一分拼团'},
      {img:'https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80!144x152.webp',name:'超值特卖'},
    ],
    navBarSecond:[
      {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152',name:'小米秒杀'},
      {img:'https://i8.mifile.cn/v1/a1/d5e3c742-3145-dd47-f665-331bef273a54!144x152.webp',name:'每日甄选'},
      {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152',name:'电视热卖'},
      {img:'https://i8.mifile.cn/v1/a1/d7058e48-c115-e651-b33c-04ce071ae9e6!144x152.webp',name:'家电热卖'},
      {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152',name:'米粉卡'},
    ],
    interval:3000,
   duration:800,
   heigh:""
  },
  imageLoad: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px";　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
       heigh: swiperH,       //设置高度
    })
 },
})