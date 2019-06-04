// 有一个链表linklisted服务于各种算法  用来存放数据  不连续的
// 1->4->3->2->5->2
// head 1

import LinkedList from './LinkedList';

// 实现一个链表

const partition = (head, x) => {
  let cur = head,
    next,
    //  分成两个节点 
    preHead, //小于
    preTail,
    afterHead,  //大于
    afterTail;

  if (head === null)
    return null;
      while (cur) {
    // 一次遍历
        next = cur.next;
        cur.next = null;   //打掉以前的关系
        if (cur.val < x) {
          if (!preHead) {
            // 空链表 空节点
            preHead = cur;
              preTail = cur;
            } else {
              preTail.next = cur;
              preTail = cur;
            }
          } else {
          if (!afterHead) {
            // 空链表 空节点
            afterHead = cur;
            afterTail = cur;
        } else {
            afterTail.next = cur;
            afterTail = cur;
          }
          cur = next;
        }
      }

      if(preTail)
      {
        preTail.next = afterHead;
        return preHead;
      }else
      {
        return afterHead;
      }
      preTail.next = afterHead;
}


const list = new LinkedList();
// 1->4->3->2->5->2
list
  .append(1)
  .append(4)
  .append(3)
  .append(2)
  .append(5)
  .append(2)
console.log(list.toString());

const newHead = partition(list.head,3);
console.log(newHead);
let curNode = newHead;
while(curNode)
{
  console.log(curNode);
  curNode = curNode.next;
}