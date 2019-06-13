const fs = require('fs');
const util = require('util');
// const foo = () =>{}
// 输入一个函数
const promisify =(func) =>{

return (...args) => {
  return new Promise((resolve,reject) => {
    // 把数组里面的每一项 一次展开
    func(args,(err,data) => {
      if(err) reject(err)
      resolve(data)
    })
  })
}
}
// 

const readFile = util.promisify(fs.readFile);
readFile('./index.html',{encoding: 'utf8'})
  .then(res =>{
    console.log(res);
  })

// 同上 输出html
// fs.readFile('./index.html',{encoding: 'utf8'},(err,data) => {

//   if(!err)
//   {
//     console.log(data);
//   }
// })
// // 查看文件状态和属性
// fs.stat('.',(err,stats) => {
//   if(!err)
//   {
//     console.log(stats);
//   }

// })