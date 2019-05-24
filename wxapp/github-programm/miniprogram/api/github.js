
const pageAble = require('./pageAble.js');

const trendings = (data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://github-trending-api.now.sh/repositories',
      data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}
const events = () => {
  return {
    get() {
      const promise = new Promise((resolve, reject) => {
        wx.request({
          url: 'https://api.github.com/events',
          // 
          success: res => {
            resolve({
              data: res.data,
              headers:res.header,
              // next: null
            });
          },
          fail: err => {
            reject(err);
          }
        })
      })
      // pageAble表示符合接口
      // 符合的风格API 返回next （下一页数据的请求方法） data （当前页面数据
      return pageAble.wrap(promise)
      // return promise;
    }
  }
}
module.exports = {
  trendings,
  events
}