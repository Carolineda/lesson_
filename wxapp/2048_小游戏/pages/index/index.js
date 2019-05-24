//index.js
//获取应用实例
const app = getApp()
const GameManager=require('./game_manager.js')

Page({
  data: {
    score:0,
    heighscore:99,
    grids: []
      
  },
  gameManager:null,
  onLoad: function () {
  //  游戏开始
  this.gameManager=new GameManager(4);
  // 
  this.setData({
    grids:this.gameManager.setup()
  })
  },
})
