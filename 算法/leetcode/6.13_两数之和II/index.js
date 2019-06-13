var twoSum = function(numbers, target) {

  for (let i = 0;i < numbers.length;i++)
  {  
   for(let j = i + 1;j < numbers.length;j++)
   {
    if(numbers[i]  + numbers[j] === target)
    { 
      // console.log(numbers[i])
      // console.log(numbers[j])
      // console.log(target)

      return[i+1,j+1]
      
    }
   } 
  }
};
console.log(twoSum([2,7,11,15],18))

