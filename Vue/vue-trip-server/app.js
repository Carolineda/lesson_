// 引入资源文件
var createError = require('http-errors');         //express中间件
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var looger = require('morgan');


// 引入index.js  路由配置文件 
var indexRouter = require('./routes/index');

// 引入user.js路由配置文件
var userRouter = require('./routes/user');

// 创建引用
var app = express();     //espress框架指的是app

app.set('views', path.join(__dirname, 'views'));    //指定视图文件夹     node引入文件
app.set('view engine', 'pug');       //pug  HTML框架 指定视图引擎

// 使用刚刚加载的资源
app.use(looger('dev'));   //帮助生成日志
app.use(express.json());
app.use(express.urlencoded({ extended: false }));   //urlencoded是express中间件 默认不扩展在此
app.use(cookieParser());  //使用cookie
app.use(express.static(path.join(__dirname, 'public')));   //指定公共资源文件为public

app.use('/', indexRouter);    //获取当前页面路径  当路径为根路径 也就是'http://localhost:3000'匹配index.js 使用index。js里面的逻辑
app.use('/user', userRouter);      //当路径为/user也就是'http://localhost:3000/user'匹配user.js 使用user.js里面的逻辑

// 匹配404 和路由未匹配时
app.use(function (req, res, next) {
  next(createError(404));
})

// 当路径匹配错误时 
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};        //开发环境下看到错误

  // 当页面渲染错误时 
  res.status(err.status || 500);
  res.render('error');
})


console.log('运行成功');

module.exports = app;
