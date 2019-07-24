const router = require('koa-router')();
// router -> controller -> model|view
const controller = require('../controller/c-signup')
// render ejs
router.get('/signup', controller.getSignup ) //显示登录注册页面

// model save
// router.post('/signup')  //model的相应操作

module.exports = router
