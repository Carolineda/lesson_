// 数字算法


let qq_num="835814279";
//函数表达式
/**
 * 
 * @param  qq type String
 * @return type boolean
 * @功能 判断QQ是否合格
 * @desc 只能是数字  长度5位以上13以内
 */
const is_valid_qq=(qq)=>{

    if(!qq) return false;
    if( /^[0-9]{5,13}$/.test(qq))
   {
       return true;
   }
   else{
       return false;
   }

};
console.log(is_valid_qq(qq_num));


 //选择一种数据结构 数组
let enc_qq=[6,3,1,7,5,8,9,2,4],
qq=[],
head=0,  //指针 star
tail=9; //指针 end 尾部

//拿到正确的数字 操作原来的两个数字

while(head<tail)  {
    //得到正确的一个数字  块实现
qq.push(enc_qq[head]);  //数组的头部 第一个
//删除

head++;
//第二个数移到队尾
enc_qq[tail]=enc_qq[head];
tail++;
head++;
}
console.log(qq);