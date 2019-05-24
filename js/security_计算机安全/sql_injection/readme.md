##前端安全

 涉及表单form -> onsubmit ->url

 POST请求数据处理 data:{email:'@163.com',
                        password:'123456}


 后端登入过程 sql 查找的过程，
 sql 则会报错，服务器出错

<!-- 安全问题 -->
 用户的输入不可信任 输入非法字符
 用户输入：password' 导致sql提前结束或多了一个' 后端用加密解密解码

 盗取登入账号
    select * from users
        where email = 'user@email.com'
        And password='password%27'
        
        escape()
