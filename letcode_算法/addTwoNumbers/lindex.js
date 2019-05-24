/**@param{LinkedList} l1
 * 
 * @param{LinkedList} l2
 * 
 * 会溢出
 * 用链表方法
 */

 function LinkedNode(val)
 {
     this.val=val;
     this.next=null;
 }
// 两数相加
var addTwoNumbers = function(l1,l2){
    let a = [],
    b=[],
    // 不会改变 引用赋值
    newL1=l1,
    newL2=l2; 
// 倒着，链表是单向实现不了
// 数组倒转用 arry reverse
    while(newL1)
    {   a.push(newL1.val);
        newL1=newL1.next;
    }
    while(newL2)
    {
        b.push(newL2.val);
        newL2 = newL2.next;
    }
    a.reverse();
    b.reverse();
    console.log(a,b);

    let ans=[];//两位相加的结果
    // 进位存储.是否进位
    let carry = 0
    while(a.length || b.length){
        let c =a.length?a.shift():0;
        let d =b.length?b.shift():0;
        let sum = c + d + carry;
        ans.push(sum%10);
        if(sum>=10)
        {
            carry=1;
        }
        else
        {
            carry=0;
        }
   
    }
    carry && (ans.push(carry)); //最后如果有进位
    ans.reverse();  //反过来

    // 返回的应该也是个结点，头结点
    let ret =[];
    for(let i=0,len=ans.length;i<len;i++)
    {
        ret[i]=new LinkedNode(ans[i]);
    }
    for(let i=0,len=ans.length;i<len-1;i++)
    {
        // 指针
        ret[i].next=ret[i+1];
    }
    return ret[0];
  
    return ans.join('');
}

// 链表的初始化  节点
let a1 = new LinkedNode(1),
a2 = new LinkedNode(2),
a3 = new LinkedNode(3);
// 形成链表
a1.next = a2;
a2.next = a3;

let b1 = new LinkedNode(4),
b2 = new LinkedNode(5),
b3 = new LinkedNode(6);
// 形成链表
b1.next = b2;
b2.next = b3;


let ret = addTwoNumbers(a1,b1);
while(ret)
{
    console.log(ret.val);
    ret=ret.next;
}




// 遍历
// let node = a1;
// while(node){
//     console.log(node.val)
//     node = node.next;
// }