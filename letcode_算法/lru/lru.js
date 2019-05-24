// 缓存 ： 不用每次去硬盘查找，在内存缓存
var LRUCache =function(capacity)
{
    this.capacity=capacity;
    // 实现get set方法   key
    this.obj={};
    this.arr=[];
}

LRUCache.prototype.get=function(key){
    //正值   不存在 返回-1，存在 获得其值
    // 定义先获取其值
   var val=this.obj[key];
    //    容量不大的内存服务于最多进程
    if(val>0)
    {
        var index=this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
    }
    else{
        return -1;
    }
}
LRUCache.prototype.set=function(key,value){
    // 如果有key就返回，
    if(this.obj[key])
    {
        // 之前存在 更新  则变成最近使用，变成最近使用的数组下标[0]
        this.obj[key]=value;
       
        // 删除之前
        var index=this.arr.indexOf(key);
        this.arr.splice(index,1);
       // 移到前面
        this.arr.unshift(key);
    }
    if(this.capacity===this.arr.length){
        // 放满  队尾
        var k=this.arr.pop();
        // 最近最少使用
        this.obj[k]=undefined;
    }
    // 如果没有，两种可能：1.如果内存满了，就弹出，维持长度不变=>执行arr.pop() 2.存进去 arr
    this.obj[key]=value;
    this.arr.unshift(key);

}