Page({
  data:{
    hasUserInfo:false,
    // 获得用户信息
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    // 表单是否出现
    addShow:false,
    addText:'',
    todos:[]
  },
 
  addInput:function(e){
    this.setData({
      addText:e.detail.value
    })
  },
  getUserInfo:function(e){
    // console.log(e);
    this.setData({
      userInfo:e.detail.userInfo,
      // MVVM编程 响应式状态
      // hasUserInfo:true('button.open-type.getUserInfo'),
      hasUserInfo:true

    })
  },
  addTodoShow:function(e){
    this.setData({
      addShow:true
    })
  },
  addTodoHide:function(e){
    this.setData({
       addShow:false
    })
  },
  addTodo:function(e){
    // 提交 1.检测输入框是否为空 2. -todos 界面上wx:for输出 setData（）重新绘制  3.退出输入状态
    if(!this.data.addText.trim()){
      return;
    }
    let todos=this.data.todos;
    todos.push({
      id:new Date().getTime(),
      title:this.data.addText,
      status:'0'
    })
    this.setData({
      todos
    });
    // 添加
    this.addTodoHide();
  }

})