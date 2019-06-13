var findOcurrences = function(text, first, second) {
    let textArr = text.split(' ')
    var third = []
    for (let index =0;index<textArr.length-2;index++ ){
      if(textArr[index] == first && textArr[index + 1] == second)
      {
        third.push(textArr[index + 2]) 
      }
   
    }
  
  return third

}; 
console.log(findOcurrences('alice is a good girl she is a good student','a','good'))
console.log(findOcurrences('we will we will rock you','we','will'))
