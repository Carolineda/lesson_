// '冒泡排序 
function bubbleSort(arr) {
  let len = arr.length
  for(let i = 0;i< len;i++){
    for(var j = 0;j<len -i - 1;j++)   //j在内层循环 两个比较循环 -i是表示有几个数排序好， 从0开始-1
    {
      if(arr[j] > arr[j+1]){
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j]=temp; 
      }
    }
  }
  return arr
}
console.log(bubbleSort([2,5,9,6,1]))