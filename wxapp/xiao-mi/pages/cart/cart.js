// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // toShopping
    cartNull: true,
    goodsDetail: [],
    totalPrice: '',
    selectedIcon:true
  },

 toShopping:function(){
   wx.switchTab({
      url: '../index/index',
 
    });
  },
  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    let that = this
    let goodsDetail = wx.getStorageSync("商品") || []
    if(goodsDetail.length != 0) {
      console.log(goodsDetail)
      that.setData({
        goodsDetail,
        cartNull: false
      })
      // this.totalPrice()
      if(!selectedIcon)
      {
        this.account()
        selectedIcon:true
      }
      
    } 
  },

  // account:function(){
  //   let goodsDetail = this.data.goodsDetail
  //   let sum = 0
  //   for(let item of goodsDetail) {
  //     sum += item.now_price * item.num
  //   }
  //   this.setData({
  //     totalPrice: sum
  //   })
  //   // console.log(sum)
  // },

  selectedAll:function(){
    let goodsDetail = this.data.goodsDetail
    let sum = 0
    for(let item of goodsDetail) {
      sum += item.now_price * item.num
    }
    this.setData({
      totalPrice: sum
    })
    // console.log(sum)
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