// miniprogram/pages/index/index.js
import Notify from '../dist/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ''
  },
  showNewGroupModal() {
    this.setData({
      newGroupModal: true
    })
  },
  closeDialog() {
    this.setData({
      newGroupModal: false
    })
  },
  onGroupNameChange(event) {
    // console.log(event)
    this.setData({
      groupName: event.detail
    })
  },
  // 输入框
  creatGroup() {
    let self = this
    if (self.data.groupName === '') {
      Notify({
        text: '起个名字吧',
        duration: 1500,
        selector: '#notify-selector',
        backgroundColor: '#dc3545'
      });
      self.setData({
        newGroupModal: true
      })
      self.selectComponent('#new-group-modal').stopLoading()
      return
    } else {
      // 调用云函数 获取输入数据
        wx.cloud.callFunction({
          name:'createGroup',
          data:{
            groupName:self.data.groupName
          },
          success(res){
            self.setData({
              // 弹框消失
              newGroupModal:false,
              groupName:''
            })
            Notify({
              text:'新建成功',
              duration: 1500,
              selector: '#notify-selector',
              backgroundColor:'#0325'
            });
            setTimeout(() => {
              wx.switchTab({
                url:'/pages/group/group'
              })
            },1500)
          },
          fail(error){
            console.log(error)
          }
        })
      
    }
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