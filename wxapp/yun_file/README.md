# 云开发 quickstart




#云开发
 云开发是腾讯云在大力推广
 快速上手
 
 - 云开发提供可视化的mongodb 云数据库
  
  链接数据库 ：const db= wx.cloud.database();

  const userinfo=db.collection('userInfo')
  支持直接存JSON
  后端即服务  调用增删改查服务 CRUD
  add 

  要做列表 
    先建collection add 再get

where({})
count() 计算多少条
数据库是否存在，有：不存  没有：存取
  