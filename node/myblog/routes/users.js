const express = require('express')
const router  = express.Router()

router.get('/:name',function(req,res){
  // res.send('hello,' + req.params.name)

  // 渲染模板
  res.render('users',{
    name:req.params.name,
    supplies:['炸鸡','泡芙']
  })
})
module.exports = router