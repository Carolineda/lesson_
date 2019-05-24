const fs=require('fs');
const files=[];
// 目录路径： path
const walk=function(path){
    // sync单线程
    fs
    .readdirSync(path)
    .forEach(file =>{
        // 文件，判断是否js文件，用正则方式判断 
         // 目录，递归，查看目录下内容
        const newPath=path +'/'+ file;   //生成新的路径
        const stat=fs.statSync(newPath);   //
        if(stat.isFile()){
            // 字符串切割后缀.js  正则表达式$匹配结束
             if(/\.js$/.test(file)){
                 files.push(file);
             }
        }else if(stat.isDirectory()){
            walk(newPath);
        }
        console.log(stat);

      

        // console.log(file);
    })

    // 通过回调函数输出
    fs.readdir(path,function(err,items){
        console.log(items);
    });
    console.log('----------');
 }

 walk('./src');
 console.log(files);