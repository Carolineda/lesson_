// let ran_num=Math.random();
// console.log(ran_num);
function hongbao(total,num){

const arr=[];
let restAmount=total;    //初始化金额为总金额
let restNum=num;

for(let i=0;i<num-1;i++) //剩下的最后一个人 不发
{
let amount=parseFloat(Math.random()*(restAmount/restNum*2)).toFixed(2);    //产生的随机数,每个人最多能拿到平均数两倍的金额
restAmount-=amount;
restNum--;
arr.push(amount);
}
//最后一个人restAmount
arr.push(restAmount.toFixed(2));
return arr;

}
console.log(hongbao(100,44));