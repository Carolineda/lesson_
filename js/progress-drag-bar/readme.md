## 进度条拆解 
  1.三个容器 背后100%的宽度  红色的进度  拖拽的圆点 
  2.拖拽圆点  移动端：Touchstart Touchmove Touchend
  3.拖拽的时候  红色进度改变 width left 

  ```js  API设计
    new Progress('selector选择器',{
      onDrag:() => {},
      onDragStart:()=>{},
      onDrageEnd:() => {},
      progress:0.5,
      disabledDrag:false
    }) 
  ```