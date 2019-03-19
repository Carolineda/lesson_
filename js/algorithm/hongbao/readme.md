如何实现红包算法
  固定金额的红包，由若干个人抢红包  其规则

  - 1.抢到红包的金额之和等于红包金额，不能超过和少于其金额
    2. 手气王   至少金额0.01 
    3. 金额随机 随机数的产生确保公平 每个人抢到概率相同 

    组织计算过程 变量计算的本质
    发红包要使得总和一致  total   restAmount(改变)
    restNum--==num 
    随机一次 :restAmount=total-随机数
    restNum--
    最后一个人拿最后的钱 for(i=0;i<num-1;i++>) 不在随机数里面
    每次的随机数，就是每个人抢到钱的数，放置(Push)于数组里

【随机数】
     产生的随机数解析为浮点数保留两位   parseFloat(Math.random()).toFixed(2)
     Math 是数学对象
     Math.random()
     NaN 指的不是一个数值型

     类型转换
            1.（parseFloat） :"23.3"->23.3 字符串-> 数值
            2.parseInt  类型转换成整型 "16.6"->16
            3. toFixed(2) : 23.123.toFixed(2)->"23.12" 
            4.Math.round() 四舍五入 : Math.round(2.1)->2
            5. Math.floor()  向下取数 
            6. MAth.ceil（） 向上取数 Math.ceil(2.1) ->3

         实现取[0-9]之间的整数  Math.floor(Math.random()*10)

    let min=0;
    let max=100;用随机数生成最小数到最大数之间的一个随机数  ：min+Math.floor(Math.random()*(max-min))


        