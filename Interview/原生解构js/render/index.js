function render(tpl, data) {
  // 实现替换 正则模板替换  找到{{}}           /{\{\(.+)\}\}/g   /g
  return tpl.replace(/\{\{(.+?)\}\}/g,function($1,$2){
    // console.log($1,$2)
    // console.log($2)
    return data[$2]
    
  })
}

let tmpl = 
`
 <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
 </div>
`
console.log(render(tmpl, {name:'大黄',age:20}))