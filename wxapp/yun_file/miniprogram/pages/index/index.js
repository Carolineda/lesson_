const db = wx.cloud.database();
const userInfo=db.collection('userInfo');
Page({
  data:{
    userList:[]
  },
  getUserInfo:function(e){
    console.log(e);
   
    // 云函数callFunction
    // openid 是有安全问题 这是前端到云端，安全。通过云函数拿到openID
    wx.cloud.callFunction({
      name:'getOpenId',
      complete: res =>{
        // console.log(res);
        // 查询
        userInfo
          .where({
            _openid: res.result.openId
          }).count()
          .then( res => {
            if(res.total == 0){
              // 新用户
              userInfo.add({
                    data: e.detail.userInfo
                  })
                  .then(res => {
                    wx.navigateTo({
                      url:'../add/add'
                    })
                  })
            } else
            {
              console.log('此用户已经存在');
              wx.navigateTo({
                url:'../add/add'
              })
            }
          })
      }
    })
   

  //   // table === collection
  //   userInfo.add({
  //     data: e.detail.userInfo
  //   })
  //   // 把用户存到数据库中，database用户表，核心表
  // 
},

  onLoad:function(){
    userInfo
      .get()
      .then(res =>{
        console.log(res);
        this.setData({
          userList:res.data
        })
      })

  }
})