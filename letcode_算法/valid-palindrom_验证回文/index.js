// 'aba'  从左和从右都是一样
  // function valid(str){
  //   if(!str || typeof str != 'string') return false
  //   return str.split("").reverse().join("") = str
  // }
  // console.log(valid())


  // 空间复杂度 不能增加空间

  // 包容大小写  空字符串或者特殊符号忽略
  // A man a plan a canal Panama   验证回文

  var isValidChar = (c) => {   //abc 123
    return /^[\w]$/.test(c);
  }

  var isPalindrom =(s) => {
    s = s.toLowerCase();
    let left = 0,
      right = s.length - 1;

      while(left < right) {
        // 忽略不是字符
        if(!isValidChar(s[left])){
          left++
          continue;   //跳过当前这一次循环
        }
        if(!isValidChar(s[right])){
          right--;
          continue;
        }
        if(s[left] == s[right]){
          left++;
          right--;
        } else{
          break;
        }
      }
    
    return right <= left;
  }
  
  console.log(isValidChar('adf'))