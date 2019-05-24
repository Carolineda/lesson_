
// 推平一个数组
const _=require('lodash');
const arr1=[99,2,33,[101,102],1,6];
const flattenArr1 = _.flatten(arr1);
console.log(flattenArr1)
// 输出[ 99, 2, 33, 101, 102, 1, 6 ]


const arr2=[99,2,33,[101,102,[206,66]],1,6];
const flattenArr2 = _.flattenDeep(arr2);
console.log(flattenArr2)


// 去掉数组的重复项
const arr3=[1,2,2];
const users = [
    {
        user:'fred',age:48
    },
    {
        user:'bary',age:42
    },
    {
        user:'fred',age:46
    },
    {
        user:'bary',age:40
    },
]
// 查询排序sortedUser
const sortedUser=_.sortBy(users,['user','age']);
const uniqArr3=_.uniq(arr3);
console.log(uniqArr3);
console.log(sortedUser)