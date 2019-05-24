function flatten(arr){
    // 判断是否是数组
    if(!Array.isArray(arr))
    {
        return false;
    }
    // 1.问题递归解决  将多层数组的扁平化分为多个一维数组和旁边的数字 concat小问题 退出条件是不再有数组，则退出递归
    // reduce 消除数组
    const flattenArr = arr.reduce((prev,cur) => {
        return prev.concat(
        Array.isArray(cur) ? flatten(cur) : cur);
    },[])
    return flattenArr;
}
const arr=[1,[2,[3]]];
console.log(flatten(arr));