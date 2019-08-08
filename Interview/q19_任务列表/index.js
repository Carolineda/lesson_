// // setTimeout默认4ms延迟
// setTimeout(function() {
//   console.log('setTimeout')
// },0)


// Promise.resolve().then(function() {
//   console.log('resolve')
// }).then(function() {
//   console.log('then')
// })
// process.nextTick(function() {
//   console.log('nextTick')
// })
// console.log(1)


// sleep() 在多少时间内暂停执行
function sleep(num) {
  var now = new Date()
  var exitTime = now.getTime() + num 
  while(true){
    now = new Date()
    if(now.getTime() > exitTime) return  
  }
}
console.log('sleep1')
console.log('sleep2')
sleep(2000)   //暂停2m执行sleep3
console.log('sleep3')