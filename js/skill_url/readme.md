#访问路径
<!-- 以window开头API可以省略 -->
- window.location.port
"8080"
- location.host
"127.0.0.1:8080"


#URL
<!-- host + 端口号+域名ID -->
 - protocol : host : port pathname search
 ?name=lilei&sex=female

 #查询字符串
 ?name=lilei&sex=female  在此查询,查询项以&作为分割
    console.log(paramsObj.get('name'));  ->lilei
    console.log(paramsObj.get('sex'));   ->female

#正则表达式
const searchArr= search.split(/&/g);
"?a=1&a=2&a=3".substr(1).split(/&/g)
(3) ["a=1", "a=2", "a=3"]
g是正则表达式的修饰

"?a=1&a=2&a=3".substr(1).split(/&/g).forEach(item => {console.log(item.split("=")[0],item.split("=")[1]);})
 - 输出：   VM1545:1 a 1
            VM1545:1 a 2
            VM1545:1 a 3