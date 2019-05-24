#数组
1. find     找到符合条件的第一个数  找不到返回undefined
2. filter   过滤 输出全部符合条件的数
3. every    返回布尔值  判断满足的所有条件
4. some     满足其中一项


##...为rest参数
 1. 形式...+变量名(数组)   获取多余参数。变量名是数组 把多余的放入数组中 
例如：sum(a,...args)  输出(3) [4, 6, 8]
2. Rest parameter must be last ,args放于最后

##数组拼接
concat 
   const newArr=arr1.concat(arr2);
    const newArr_spread=[...arr1,...arr2];

- push 传参