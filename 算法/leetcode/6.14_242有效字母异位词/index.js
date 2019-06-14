var isAnagram = function(s, t) {

  var apartS = s.split('').sort().join()

  var apartT = t.split('').sort().join()

    var a = new RegExp(apartS)

  console.log(a.test(apartT)) 


};
isAnagram('rat','art')
