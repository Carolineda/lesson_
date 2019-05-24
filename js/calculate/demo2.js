var strategies={
    "A":function(salary)
    {
        return salary*4;
    },
    "B":function(salary)
    {
        return salary*3;
    },
    "C":function(salary)
    {
        return salary*2;
    }
}
// 代码
var calculateBounce=function(level,salary){
return strategies[level](salary);
}
console.log(calculateBounce('A',5000))