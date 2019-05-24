//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 经纬度 scale缩放比例
    longitude:116.397390,
    latitude:39.908860,
    scale:18,
    markers:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  wx.getLocation({
    type:'gcj02',
    success: (res)=>{
      // console.log(res);
      this.setData({
        latitude:res.latitude,
        longitude:res.longitude
      })
      // 获取map 上点
      this.createMarkers(res);
    }
  })
  },
  createMarkers(res){
    // 随机获取的数量
    let ran=Math.ceil(Math.random()*20);
    let markers=[];
    for(let i=0;i<ran;i++)
    {
      let marker={
        id:i,
        title:'去这里',
        iconPath:'/images/bike.png',
        width:52.5,
        height:30,
      }
      // 经纬度随机  生成数越小 越密集  计算结果相对偏移
      let a=(Math.ceil(Math.random()*99))*0.00002;
      let b=(Math.ceil(Math.random()*99))*0.00002;

      let sign_a=Math.random();
      let sign_b=Math.random();
      // 相对偏移 偏移量
      marker.longitude=sign_a>0.5?res.longitude+a:res.longitude-a;
      marker.latitude=sign_b>0.5?res.latitude+b:res.latitude-b;
      markers.push(marker);

    }
    this.setData({
      markers
    });
    this.nearestBiycle(res);
  },
  nearestBiycle(res){
    // 当前经纬度到marker距离最近点
    const {markers}=this.data;
    const distanceArr=markers.map((marker)=>{
      const {longitude,latitude}=marker;
      let t=Math.sqrt((longitude-res.latitude)*(longitude-res.longitude)+(latitude-res.latitude)*(latitude-res.latitude))
      return t;
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    // 获取最小值
    const minDistance=Math.min(...distanceArr);
    // 要对哪个marker设置气泡（callout）
    const minIndex=distanceArr.findIndex(t=>t===minDistance);
    // 距离最小性
  let markerPath=`markers[${minIndex}].callout`
    this.setData({
      [markerPath]:{
        content:'离我最近',
        color:'#ffffff',
        fontsiz:'16',
        padding:'10',
        bgColor:'#0082fc',
        display:'ALWAYS'
      }

    })
  },
})
