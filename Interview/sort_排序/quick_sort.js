// 快排  抽象  a b  c   递归
// [8,2,5,9,7]

function quickSort (arr){
  // 
  if(arr.length <=1) {
    return arr
  }

  var left = [],
  right=[],
  baseDot = Math.round(arr.length / 2),   //确保其不是奇数组
  base = arr.splice(baseDot,1)[0]
  // 找到中间值
    for (var i =0;i<arr.length;i++)
    {
      if(arr[i]<base){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
    }

  // return a,b,c   quickSort(left)是左边已经排好序的数组  base中间值   right b
  return quickSort(left).concat([base],quickSort(right))
}

console.log(quickSort([8,2,5,9,7]))
