class Progress{
  constructor(selector,options){
    this.parentDom = document.querySelector(selector);
    this.options = options;
    this.initDom();
  }
  initDom(){
    this.parentDom.innerHTML = 
    // createment 创建Dom元素
    `
    <div class="progress-bar">
    <div class="progress"></div>
    <div class="progress-button"></div>
  </div>`
  this.ProgressBarDom = document.querySelector('.progress-bar');
  this.ProgressDom = document.querySelector('.progress');
  this.ProgressBtnDom = document.querySelector('.progress-button');          //绑定好Dom 绑定点击事件
  this.initProgress();
  this.initEvent();
  }
  initProgress(){
    const { progress = 0} = this.options;      //进度从0开始;
    this.ProgressBarDomWidth = this.ProgressBarDom.offsetWidth;
    this.ProgressDom.style.width = `${progress * 100}%`;         //相对外面父容器计算进度
    this.ProgressBtnDom.style.left = `${progress * this.ProgressBarDomWidth}px`;            //点击按钮
  }
  initEvent() {
    const { disableDrag = false, onDragStart , onDrag }  = this.options;                   //事件拖拽
    if(disableDrag) return false;
    let downX = 0;
    let btnLeft = 0;
    this.ProgressBtnDom.addEventListener('touchstart',(e) => {
      const touch = e.touches[0];
      downX = touch.clientX;
      btnLeft = parseInt(touch.target.style.left);       //之前上次一距离左边的距离
      if(onDragStart) onDragStart();
    })
    // touchmove
    this.ProgressBtnDom.addEventListener('touchmove',(e)=>{
      e.preventDefault();   //阻止默认事件
      const touch = e.touches[0];      //触摸事件 获取当前坐标
      const diffx = touch.clientX - downX;               //相对屏幕左上角的点 - 鼠标点击X的位置
      let newBtnLeft = diffx + btnLeft;
        // 判断进度条与父容器宽度
      if(newBtnLeft > this.ProgressBarDomWidth){
        newBtnLeft = this.ProgressBarDomWidth;
      }
      else if(newBtnLeft <0){
        newBtnLeft = 0;
      }
      this.ProgressDom.style.width = `${newBtnLeft / this.ProgressBarDomWidth * 100}%`
      this.ProgressBtnDom.style.left = `${newBtnLeft}px`
      if(onDrag) onDrag(newBtnLeft / this.ProgressBarDomWidth * 100);

    })
     this.ProgressBtnDom.addEventListener('touchend',() => {
       const {onDragEnd} = this.options;
       if(onDragEnd) onDragEnd();
     })
  }
 
}

export default Progress;