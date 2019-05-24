let data=[
    {
        // time 视频播放时间之后出现弹幕
        value:'周杰伦 nice，nice',time:5,color:'black',speed:1,fontSize:22
    },
    {
        value:'周杰伦nice',time:10,color:'pink',speed:1,fontSize:12
    },
    {
        value:'杰伦杰伦',time:5,color:'red',speed:1,fontSize:19
    },
    {
        value:'杰伦演唱会nice',time:6
    },
    { value:'周杰伦 nice，nice',time:5 },
]


//获取所有需要的dom结构
let doc =document;
let canvas=doc.getElementById('canvas');
let video=doc.getElementById('video');
let $txt=doc.getElementById('text');
let $btn=doc.getElementById('btn');
let $color=doc.getElementById('color');
let $range=doc.getElementById('range');


// 创建一个canvasBarrage 类  构造函数实例，方法和属性都能继承
class CanvasBarrage{
    // 三个参数：画布 ，视频，用户输入内容
    constructor(canvas,video,opt={}){
// 如果canvas和vedio没有传参，直接报错  逻辑问题
        if(!canvas || !video)
        {
            return;
        }

        // 增加属性 挂载到this上
        this.video=video;     //this指向CanvasBarrage,增加属性
        this.canvas=canvas;

        this.canvas.width=video.width;
        this.canvas.height=video.height;

        // 获取画布, 自带方法 自动生成2d画布
        this.ctx=canvas.getContext('2d');

        // 设置默认参数 用户没有传递参数
        let defOpts={
            color:'#e91e63',
            speed:1.5,
            opacity:0.5,
            fontSize:20,
            data:[]
        };

        // 参数挂载this实例上，合并对象
        Object.assign(this,defOpts,opts);
        // 弹幕出现开关变量，添加属性，用来判断播放状态 true是暂停
        this.isPaused=true;
        // d弹幕消息获取
        this.barrage=this.data.map(items =>new Barrage(item,this))
        // 渲染
        this.render();
        
        
    
}

// function render()
render() {
// 渲染弹幕1,q清除原来画布
this.clear();
// 渲染弹幕
this.randerBarrage();
// 如果没有暂停继续渲染
if(this.isPaused===false)
{
requestAnimationFrame(this.render.bind(this));

}
}
}