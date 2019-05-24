
var num1 = '12134598754353449845312132131546666666621321315652139222222222222222222222222222222222222222222';
var num2 = '232656548321325656856655322222222222222222222222222222222222222222222222222222';
function addTwoNumbers(str1,str2){
    let carry =0,  //是否有进位
        l1=str1.length,  //数字1的长度
        l2=str2.length,  //数字2的长度
        arr = [];       //为编程字符串大值做准备

        // 倒着加，加到哪里截止 n:最大执行次数
        var max=Math.max(l1,l2);   //最大长度
        // 倒着循环 退出条件是最大值的【0】
        // 同一位相加再加之前的进位，进位是flag 也是要加的值
        for(let i = l1 -1,j= l2 -1,n = max - 1;n>=0;n--,i--,j--)
        {
            // 整数不为真  赋予0
            var sum = (+str1[i]||0) + (+str2[j]||0) + carry;
            // 设置Carr 得到正确的位
            if(sum >= 10)
            {   carry = 1;
                arr.push(sum - 10);
            }else
            {
                carry = 0;
                arr.push(sum)
            }
            
        }
        if(carry > 0)
        {
            arr.push(carry);
        }
        // reverse 翻转数字
        return arr.reverse().join('');

}
console.log(addTwoNumbers(num1 , num2));