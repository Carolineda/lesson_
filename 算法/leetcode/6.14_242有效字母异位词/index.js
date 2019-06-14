var isAnagram = function(s, t) {

  // var apartS = s.split('').sort().join()
  // var apartT = t.split('').sort().join()
  //   console.log(apartS)
  //   var a = new RegExp(apartS)
  //   console.log(a)
  //   // var b = a.test(apartT)
  //   return a.test(apartT)
  
  // return isAnagram('rat','art')
  // if(s.length !== t.length) 
  // {
  //   return false;
  // }
  // else
  // {
  //   var apartS = s.split('').sort().join()
  // var apartT = t.split('').sort().join()
  // return apartS === apartT
  // }
  if(s.length == t.length)
  {
    var apartS = s.split('').sort().join()
    var apartT = t.split('').sort().join()
   return apartS === apartT
  }
  else
  {
    return false
  }
};
console.log(isAnagram('rat','art'))
