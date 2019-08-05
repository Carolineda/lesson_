function unique(arr){
  var res = []
  var sortedArray = arr.concat().sort()
  var seen
  for(var i =0,len = sortedArray.length;i<len;i++){
    if(!i || seen !== sortedArray[i]){
      res.push(sortedArray[i])
    }
    seen = sortedArray[i]
  }
  return res
}
console.log(unique([1,2,5,1,1,2]))