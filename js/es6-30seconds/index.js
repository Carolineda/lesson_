// es6 将字符串去除HTML标签
 const htmlStr='<p><em>lorem</em><strong>ipsum</strong></p>' ;
//  lorem ipsum strip tags 
// 正则 replace splice  
// 正则规则 ： /<[^>]*>/ 匹配带<>所有标签   [^>]只要不是以>结束标签 * 继续匹配
const stripHTMLTags = str => str.replace(/<[^>]*>/g,'');
