let elementStyle = document.createElement('div').style
let vendor = (()=>{
  let transformNames = {
    // 常见浏览器兼容性
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  // 遍历对象
  for (let key in transformNames) {
    if(elementStyle[transformNames[key]] !== undefined) { //页面属性transformNames
      return key
    }
  }
  return false
})()

export function prefixStyle(style) {
  if(vendor === false){

  }
  if(vendor === 'standard') {
    return style
  }
  // toUpperCase()转为大写 
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}