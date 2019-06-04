// pages/goodsDetails/goodsDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ceb8e65e128cc6b22a95eb06b3a65d3.jpg',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/730127e7c223263bf4f6020cd5f97068.jpg'
    ],
    details_img:[
      'https://i8.mifile.cn/b2c-mimall-media/d0213f3c8d64eaefa901d76db1d0cdc0.jpg',
      'https://i8.mifile.cn/b2c-mimall-media/6937eec894107ec26291c452447cab85.jpg',
      'https://i8.mifile.cn/b2c-mimall-media/a32780f6c3cecc993968a76eba9ba5e8.jpg'
    ],
    param_img:[
      'https://i8.mifile.cn/b2c-mimall-media/60af0f1d080eb236b63c343c502ca6b5.jpg'
      
    ],

    interval:3000,
    duration:800,
    navbarHidden:false
    
 
  },
  detailsActive: function(){
    this.setData({
       navbarHidden: false
    })
 }, 
 paramActive: function(){
    this.setData({
       navbarHidden: true
    })
 },

 chooseVersion:function(){
    wx.navigateTo({
      url:'../goodsDetails/selectedGoods/selectedGoods'

    })


 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})