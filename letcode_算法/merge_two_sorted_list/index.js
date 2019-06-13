// 链表 指针

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {
  // 将节点放入数组，sort方法 
  var ans = [];
  while(l1)
  {
    ans.push(new ListNode(l1.val));
    l1 = l1.next;    
    
  }

  while(l2)
  {
    ans.push(new ListNode(l2.val));
    l2 = l2.next;
  }

  // a < b 减法false 就不用换位置 则从小到大
  ans.sort(function(a,b)
  {
    return a.val - b.val    //根据val属性从小到大排序
  })

  // 形成新的有序链表
  if(!ans.length) return null;        //链表为空
  // 链表最后一个值的节点的next为null，所以len -1
  for (var i =0,len = ans.length;i < len -1; i++)
  {
    ans[i].next = ans[i+1]    //形成链表
  }
  // console.log(ans);
  // var node;
  return ans[0];

}


// 有序链表
  var a1 = new ListNode(1);
  var a2 = new ListNode(2);
  a1.next = a2;
  var a3 = new ListNode(3);
  a2.next = a3;


  var b1 = new ListNode(1);
  var b2 = new ListNode(4);
  b1.next = b2;
  var b3 = new ListNode(5);
  b2.next = b3;


var l3 = mergeTwoLists(a1, b1);
while (l3)
{
  console.log(l3.val);
  l3 = l3.next
}