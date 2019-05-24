##LRU 在缓存(使用最近最少使用原则)算法
Least Recently Used
操作系统


node fs模块   硬盘以及内存  内存精贵，开启多个程序，速度降低。硬盘 用不完

内存 是代码的运行空间  但其空间有限 内存空间2 往里存放变量(2个变量)
  当第三个出现时
        1. put(1)
        2.put(2)
        3.出现第三个时，空间不够  则释放1或2  原则：最近最少使用
        [] 内存 length=2
===>
   - 实现方法：
        1  put(1,1)
        2  put(2,2)
        3  get(1) 返回1  此时1最近使用  则2最近最少使用
        4  put(3,3) 此时在整个内存之中3放入，2丢掉
        5  get(2)   此时2被丢掉 获取不到2
        6  put(4,4)  4进入  1丢掉
        7  get(1)   1被丢掉  获取不到1  -1
        8  get(3)   3
        9  get(4)   4


 - cache   LRUcache
 实现方法: get
          set

- 对象字面量有利于get set方法的实现，
- 最近最少使用  json搞不定，数组可以有头有尾[0] [length-1],可以在一头进行操作,一半的工作交给数组，一半的数组交给json对象字面量。让他们成为LRUCache的两个属性

- get set 对于一个数组arr +obj阻止在LRUCache
    indexOf pop unshift splice