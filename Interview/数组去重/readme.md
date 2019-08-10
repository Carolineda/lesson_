## 数组去重的方法
  1.Set()
  2.indexOf 数组下标的索引
  3.includes 检测是否存在
  4.map  Boolean如果指定元素存在于Map中，则返回true。其他情况返回false
  5.reduce()

## 数组扁平化处理
  Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})  扁平化 去重 升序
  1.flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
  2.Infinity 作为深度，展开任意深度的嵌套数组
      arr3.flat(Infinity); 