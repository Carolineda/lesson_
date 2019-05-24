[ECMscript] 简称ES 规定js语法类型

##!!
   - map方法 创建一个新的数组，数组的每一项 都是回调函数返回的结果 返回数组
           
   - join方法   // join();方法  会把数组的每一项拼成字符串，返回字符串

                var str=arr.map(function(school){
                    return school +'just';
                })
                .join('+');
            [结果]    str
                 输出：  ECUTjust+南昌just"

1. 模板字符串 template-strings   ${}
    - 增强版字符串
    - 用转义字符``标识;
    - 变量，任意js表达式放置于${}
    -