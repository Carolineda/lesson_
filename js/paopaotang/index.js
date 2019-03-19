// Player类  构造函数 类实例化为对象
"use strict";  //严格模式 规避this指向问题 规范代码
function Player(name)
{
    //constroter
    // 全局||指向的对象
    // console.log(this);
    console.log("世界最帅的狗大赛！");
   this.name=name;
   this.enemy=null;
} 

/** js 类的方法定义在prototype上 */
Player.prototype.win=function(){
console.log("世界宇宙无敌优秀者 :"+this.name);
}
Player.prototype.lose=function(){
    console.log("仅此错失机会者 :"+this.name);
}
// Player("小柴");   //普通函数调用
/**实例化对象 */
var player1=new Player("小柴");  // 类实例化为对象
console.log(player1.name);

//win 作为方法调用 原型 this会指向对象本身
player1.win();
var player2=new Player("金毛");
player1.enemy=player2;
player2.enemy=player1;
player1.win();
player2.lose();
