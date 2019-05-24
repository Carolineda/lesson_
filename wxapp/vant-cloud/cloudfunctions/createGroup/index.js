// 云函数入口文件  在终端安装云函数依赖保存命令npm install --save wx-server-sdk@latest

const cloud = require('wx-server-sdk')
// 指定在哪一个服务器 环境ID
const env='dahuang-37ec04'

cloud.init()
// 获取数据库句柄 ：数据库指针指向数据库某表
const db = cloud.database({ env })


// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo
  // await 在此作用相当于promise.then
  // 往数据库添加字段
  return await db.collection('group').add({
    data:{
      name:event.groupName,
      createBy:userInfo.openId,
      createTime:new Date(),
      delete:false,
      updateTimeout:new Date()
    }
  })
  
}