##
    node 让js到后端（服务器端）

    - 服务器，装有Linux
    - 文件操作系统 fs
    - 数据库连接 db
没有Dom

- 文件读取（将文件内容输出到命令行），花时间在文件定位，<-其第一个参数, 打开文件再将文件内容读取到内存中，输出到命令行。文件越大所花时间越多。

    在js花时间是异步（解决方案）
        1.调用回调函数callback()
    eg:fs.readFile('./a.txt','utf8',function(err,data){}
        2.promise
    分开 promise是类，用于处理耗时异步问题的类，为了防止回调地域，看到耗时问题就用一个promise实例
     resolve 将控制权交给then，保证异步问题的同步化，并且将结果resolve(data)
     reject  失败，则让promise执行catch(e){}