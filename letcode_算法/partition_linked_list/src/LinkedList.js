// 有一个链表linklisted服务于各种算法  用来存放数据  不连续的
// 1->4->3->2->5->2
// head 1

import LinkedListNode from './LinkedListNode.js';

class LinkedList{
  constructor(){
    // 初始化 头结点
    this.head = null;
    this.tail = null;
  }
  append(value){
    const newNode = new LinkedListNode(value);
    // 返回this 返回这个对象 就可以一直append
    if(!this.head)
    {
      // 空链表
      this.head = newNode;
      this.tail = newNode;
    }else{
  
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
    
  }
  toArry(){
    const nodes = [];
    let currentNode = this.head;
    while(currentNode)
    {
      nodes.push(currentNode);
      currentNode=currentNode.next;
    }
    return nodes;
  }
  toString(){
    return this.toArry().map(node=>node.val);
  }
}

export default LinkedList;
