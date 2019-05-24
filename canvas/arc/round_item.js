
/**
 * @大黄呀
 * @desc 负责输出星
 * 一个功能一个类 封装 一个类一个文件
 * 实现多人协作 模块化
 * 业务代码（查询，），要抽离 要封装
 */
function RoundItem(index,x,y,ctx){
    this.index=index;
    this.x=x;
    this.y=y;
    this.ctx=ctx;
    this.r=Math.random()*2 +1;
    let alpha =(Math.floor(Math.random()*10)+1)/10/2;
    this.color=`rgba(255,255,255,${alpha})`;
}
// 
RoundItem.prototype.draw=function(){
this.ctx.fillStyle=this.color;
// 阴影
this.ctx.shadowblur=this.r*2;
// 绘制的开始结束
this.ctx.beginPath();
this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
this.ctx.closePath();
this.ctx.fill();
}
RoundItem.prototype.move=function(){
    this.y-=0.15;
    this.draw();
}