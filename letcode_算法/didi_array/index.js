// 一个无序的数组 找到第K位置的值 

// 方法一
// function findKthLargest (nums,k) {
//   if( k < 0 || k > nums.legth -1) return NaN
//   return nums.sort((a,b) => b- a)[k-1]
// }


// console.log(findKthLargest([2,45,7,6,8],2))


// 时间复杂度 


// [3,1,6].sort((a-b) => )

// 方法二
  function findquickLargest(nums,k){
    const arr = quick_sort(nums)
    return arr[k-1]
  }


  // 查找中间数
  function quick_sort(arr) {
    if(arr.length <= 1) return arr;   //退出条件
    var left = [],
    right =[],
    baseDot = Math.round(arr.length / 2)
    base = arr.splice(baseDot,1)[0]       //找到那个数切割一下

    for(var i = 0;i<arr.length; i++){      //O(n)
      if(arr[i]<base)
      {
        right.push(arr[i]);
        // left.push(arr[i]);
      }else{
        // right.push(arr[i]);
        left.push(arr[i]);
      }
    }
    return quick_sort(left).concat([base],quick_sort(right))       //实现的递归 0(log2N)
  }
  console.log(findquickLargest([1,56,4,9],2))
