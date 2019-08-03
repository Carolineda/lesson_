console.log('hello Ts')
let decLiteral: number = 1;
// decLitercal = "12121";
let hexLiteral: number = 0xf00d;

let user_name: string = 'dahuang';
let sentence: string =`hello my name is ${name}`;

let list: number[] = [1,2,3]
let list2:Array<number> = [1,2,3]

function div(x){
 if(isFinite(1000/x)){
   return 'Number is not Infinty'
 }
 return 'Number is Infinty'
}
console.log(div(0))