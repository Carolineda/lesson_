var Bounce=function(salary){
    this.salary=salary;
}
// 奖金策略
Bounce.prototype.setStrategy=function(strategy){
    this.strategy=strategy;
}
Bounce.prototype.getBounce=function(){
    return this.strategy.calculate(this.salary);
}




var PerformanceA=function()
{
    // 
}
PerformanceA.prototype.calculate=function(salary){
    return salary*5;
}
var PerformanceB=function()
{
    // 
}
PerformanceB.prototype.calculate=function(salary){
    return salary*3;
}
var PerformanceD=function()
{
    // 
}
PerformanceD.prototype.calculate=function(salary){
    return salary*1;
}


var bounce=new Bounce(4000);
bounce.setStrategy(new PerformanceA());
console.log(bounce.getBounce());