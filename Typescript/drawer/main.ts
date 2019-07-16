// console.log('hello')

// 1.写一个Drawer类  2.对构造函数的参数约束  3.enter,leave方法


  // interface声明，  执行接口IDrawerConfig
  interface IDrawerConfig {
    enterDom : HTMLElement   | null;   //默认支持的元素类型
    leaveDom :HTMLElement | null;
    duration?:number;   //?: 不是必须要传的数据
    ease?:string
  }

  class Drawer implements IDrawerConfig{
    enterDom:HTMLElement    //
    leaveDom : HTMLElement
    _duration:number = 2    //_ 下划线私有
    _ease : string = "ease"
    enterTransition : string
    leaveTransition : string
    constructor(options){
      this.enterDom = options.enterDom;
      this.leaveDom = options.leaveDom;
      this.initDomStyle(); //初始化样式
      this.updateTransition();  
    }
    initDomStyle() {
      if(this.enterDom && this.leaveDom)
      {
        this.enterDom.setAttribute('style',`transition:left ${this._duration} ${this._ease}`);
        this.leaveDom.setAttribute('style',`transition:margin-left ${this.duration}s ${this.ease}`);
      }      
    }

    updateTransition() {
      this.enterTransition = `left: 0px transition:left ${this.duration}s ${this.ease};`
      this.leaveTransition = `transition:margin-left ${this.duration}s ${this.ease};margin-left:200px;`
    }

    get duration() {
      return this._duration;
    }
   
    set duration(duration :number) {
      this._duration = duration
    }
   
    get ease() {
      return this._ease;
    }
    set ease(ease:string){
      this._ease = ease
    }

    

    enter() {
      this.enterDom.setAttribute('style',this.enterTransition);
      this.leaveDom.setAttribute('style',this.leaveTransition);
    }
    leave () {
      this.initDomStyle();
    }
  }
