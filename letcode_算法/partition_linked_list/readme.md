##数据结构

  - 抽象 ADT  具象来引导
  
  - 解决特写问题
   1.leetcode 数据结构
        LinkedList
   2.github algorithm OO写法
       将其封装成class export default
   3.webpack 结合


- node n个节点构成一个链表  -> linkedlist
对其进行模块化,一个文件  一个类
es6的模块化
append()
- index.js
  业务代码


## node 不支持es6的模块化，原生支持的是require commonJs
  把其编译预处理 compile presets

- ADT
  抽象数据类型 
  链表 数据结构 配套方法
  append()
  toSrting()
  toArray()

## letcode  数据结构算法题
head = 1->4->3->2->5->2    x = 3
   
    对链表进行分隔 小于x的节点放在左边  大于或等于x的节点放在其后面。 不影响之前的顺序
    1->2->2  左链表  之前
    4->3->5 右链表  之后
    两个链表合成 左链表的尾节点=右链表的头结点

  链表 head tail append()
  两个链表相连  tail.next = head2