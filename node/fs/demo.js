// fs模块，是node后端开发的一部分
const fs= require('fs');  //文件读取
// 读取文件内容 其地址 ，读取文件内容是异步 使用回调函数，运行成功才会使用回调函数  读取输出‘utf8’
// fs.readFile('./a.txt','utf8',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data);

// fs.readFile('./b.txt','utf8',function(err,data){
//     console.log('-------',data);
// // })
//  })

//! 将callback处理异步方案抛弃  使用promise解决异步问题转为同步, promise专门用于耗时任务
 const fileAPrimse =new Promise((resolve,reject)=>{
    fs.readFile('./a.txt','utf8',(err,data)=>{
        // 流程的控制权怎么移交
        resolve(data);
    })
 });

const fileBPrimse =new Promise((resolve,reject) => {
    fs.readFile('./b.txt','utf8',(err,data) => {
        if(err){
            reject(err);
        }
        else {
            resolve(data);
        }
    })
})
// 将内部的耗时任务运行
 fileAPrimse
  .then(data => {
      console.log(data);
      return fileBPrimse;
  })
  .then(data => {
      console.log('---------',data);
  })