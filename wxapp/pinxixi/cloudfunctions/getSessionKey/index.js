// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request');
const crypto = require('crypto');

cloud.init()
const getSessionKey = function(code)
{
  return new Promise((resolve,reject)=>{
    // GET https://api.weixin.qq.com/sns/jscode2session
    // ?appid=APPID&secret=SECRET
    // &js_code=JSCODE
    // &grant_type=authorization_code

    request({
      method:'GET',
      url:'https://api.weixin.qq.com/sns/jscode2session',
      qs:{
        appid:'	wx2942f39475f8fb76',
        secret:'671b3faacab73654c59b7def17283374',
        js_code:code,
        grant_type:'authorization_code'
      },
      // json:true 响应体为json格式
      json:true
    },(err,res,body)=>{
      if(err)
      {
        reject(err)
      }
        resolve(body)
    })
  })
}

// 云函数入口函数
exports.main = async (event, context) => {
  // 捕获代码错误
  try{
    const {code}=event;
    // 返回session key
    // 保存在服务端一个设置
    const weixinRes = await getSessionKey(code);
    const { openid,session_key } = weixinRes;
    // 1.创建一个哈希算法
    // 2. 对谁加密
    // 3.以什么格式输出 hex 16进制
    const skey = crypto.createHash('sha1')
    .update(session_key,'utf8')
    .digest('hex')

    return{
      skey
    }

  }catch(error){
    return {
      error
    }
  }
}