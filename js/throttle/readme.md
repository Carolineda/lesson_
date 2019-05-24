##Throttle  Debounce

search suggest 帮助用户快速找到想要的内容

根据词匹配  分词
  蔡徐坤 篮球
  xukun cai basketball 每打一次keyup去搜索，多余的搜索防止多次，性能问题

  打完一个单词搜索
  定时器实现了防抖  bounce函数利用闭包 返回新的函数，将定时器的id，封闭在闭包空间中，下一次的keyup事件会消除上一次的timeout  只有最后一个keyup间隔事件超过 delay 得以执行
  
  在频繁触发时，只执行一次