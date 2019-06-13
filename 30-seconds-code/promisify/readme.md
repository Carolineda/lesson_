## promisify 
  promise风格 
  原始的回调版本:
    fs.readFile('',(err,data)=>{});
  promisify:
    readFile('').then()
promosify让符合(err,data) => {} 回调函数 是最后一个参数的函数，包裹之后返回promise版本的函数


## 实现一个promisify
  