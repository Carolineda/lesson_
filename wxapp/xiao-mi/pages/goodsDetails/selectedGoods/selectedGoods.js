// pages/goodsDetails/selectedGoodg/selectedGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    selectNum:"1"
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
  minusNum:function(){
    let selectNum = this.data.selectNum;
    selectNum--;
    if (selectNum < 2) {
       this.setData({
          sAble: true,
          selectNum: 1
       });
       wx.setStorageSync('selectNum', this.data.selectNum);
       return;
    }
    this.setData({
       aAble: false,
       sAble: false,
       selectNum: selectNum
    });
    wx.setStorageSync('selectNum', this.data.selectNum);
  },
  addNuum:function(){
    let selectNum = this.data.selectNum;
    selectNum++;
    if (selectNum > 9) {
       this.setData({
          aAble: true,
          selectNum: 10
       });
       wx.setStorageSync('selectNum', this.data.selectNum);
       return;
    }
    this.setData({
       sAble: false,
       aAble: false,
       selectNum: selectNum
    });
    wx.setStorageSync('selectNum', this.data.selectNum);
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