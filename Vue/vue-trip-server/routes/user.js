var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var data = {
  code: 200,
  msg: 'success'
}

var pool = mysql.createPool({    //创建mysql连接  连接库
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'trip'
})


// 开始请求
router.post('/', function (req, res, next) {
  let userName = req.body.userName           //前端发来请求携带参数  前端点击登录
  let password = req.body.passWord
  // 从数据库查找数据username\password，最后返回给前端
  pool.query(`SELECT * FROM user where userName = ${userName}`, function (err, results, fields) {
    if (err) {
      data.code = 500    //服务器出现问题
      data.msg = err
    }
    if (results[0].passWord === password) {
      selectUser(results[0].userId)
    } else {
      data.code = 400
      data.msg = '账号或密码有误'
      res.statusCode = 200
      res.setHeader('Access-Control-Allow-Origin', '*')             //设置请求头
      res.setHeader('Content-Type', 'application/json')             //设置请求头的格式
      res.json(data)               //让data返回数据的格式是json格式
    }
  })

  function selectUser(id) {
    pool.query(`SELECT * FROM user_info where userId = ${id}`, function (err, results, fields) {
      //query查询数据库
      if (err) {
        data.code = 500
        data.msg = err
      }
      data.code = 200
      data.msg = 'success'
      data.data = results[0]                  //置于位置
      res.statusCode = 200
      res.setHeader('Access-Control-Allow-Origin', '*')             //设置请求头
      res.setHeader('Content-Type', 'application/json')             //设置请求头的格式
      res.json(data)
    })


  }
})

module.exports = router