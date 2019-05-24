
const QQ_MAP_KEY = 'XARBZ-4LOC4-VIWUX-DZKW6-QIEU7-GWBUX'

// 云函数初始化
wx.cloud.init({
    env:'dahuang-37ec04'
})

// 获取服务器句柄
const db = wx.cloud.database()

// 封装网服务器数据库方法
// 添加心情
export const addEmotion = (openid,emotion) =>{
    return db.collection('diary').add({
        data:{
            openid,
            emotion,
            tsModified:Date.now()
        }
    })
}

// 获取位置方法
export const geocoder = (lat,lon,success = () => {},fail = () => {})=>{
    return wx.request({
        url:'https://apis.map.qq.com/ws/geocoder/v1/',
        data:{
            location:`${lat},${lon}`,
            key:QQ_MAP_KEY,
            get_poi:0
        },
        success,
        fail
    })
}


// 获取天气方法
export const getWeather = (lat,lon)=>{
    return wx.cloud.callFunction({
        name:'he-weather',
        data:{
            lat,
            lon
        }
    })
}

// diary 向数据库里面查询到用户openID和具体时间段 获取信息
export const getEmotionByOpenidAndDate = (openid,year,month) => {
    // 查询数据库
    const  _=db.command
    year = parseInt(year)
    month = parseInt(month)
    let start = new Date(year, month-1,1).getTime()
    let end = new Date(year, month , 1).getTime()
    return db.collection('diary').where({
        openid,
        tsModified:_.gte(start).and(_.lt(end))
    })
    .get()
}


// 封装云函数
export const jscode2session = (code) =>{
    return wx.cloud.callFunction({
        name:'jscode2session',
        data:{
            code
        }
    })
}