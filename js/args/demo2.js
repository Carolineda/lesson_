// 解构
// 1. userObj 一个参数带来新的问题，代码的函数编写者，对于user里面的key要了解 只需要用一部分 解构可以帮助，
// 提高代码的可读性


// 函数封装一个功能
function information({name,age,height})
{
    console.log(name,age,height)

}
const user = {
    name:'奶茶',
    age:19,
    height:1.6,
    sex:'女',
    hobbies:['喝奶茶']
}

console.log(information(user));