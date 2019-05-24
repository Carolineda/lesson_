// 计算年终奖的数额
// 会计 绩效 
        // A 3
        // B 2
        // C 1
// 抽离为策略函数
var performanceS=function (salary){
    return salary*5;

}
var performanceB=function (salary){
    return salary*3;
}
var performanceC=function (salary){
    return salary*2;
}
var performanceD=function (salary){
    return salary*1;
}
var calculateBounce=function(performanceLevel,salary){
  if(performanceLevel==='A')
  {
      return performanceS(salary)
  }
  if(performanceLevel==='B')
  {
    return performanceB(salary)
  }
  if(performanceLevel==='C')
  {
    return performanceC(salary)
  }
  if(performanceLevel==='d')
  {
      return performanceD
  }
    
}


console.log(calculateBounce('B', 4500));

// 优化代码 分支  计算策略简陋
// 会计负责发钱，与制定策略区分