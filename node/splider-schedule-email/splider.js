const superagent = require('superagent');
const cheerio = require('cheerio');
const ejs = require('ejs');
const fs =require('fs');
const nodemailer =require('nodemailer')

const local = 'jiangxi/nanchang';
const weatherBaseUrl = 'https://tianqi.moji.com/weather/china/';
const getWeatherData = function () {
    return new Promise((resolve, reject) => {
        superagent.get(`${weatherBaseUrl}
        ${local}
        `)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // console.log(res.text);
                let weatherTip = "";
                let $ = cheerio.load(res.text);
                $(".wea_tips").each(function (i, elem) {
                    weatherTip = $(elem)
                        .find("em")
                        .text();
                });
                let threeDaysData = [];
                // 最近三天的信息
                $(".forecast .days").each(function (i, elem) {
                    const SingleDay = $(elem).find("li");
                    const Day = $(SingleDay[0]).text().replace(/\s/g, "");
                    const WeatherText = $(SingleDay[1]).text().replace(/\s/g, "");
                    const Temperature = $(SingleDay[2]).text().replace(/\s/g, "");
                    const WindDirection = $(SingleDay[3]).find("em").text().replace(/\s/g, "");
                    const WindLevel = $(SingleDay[3]).find("b").text().replace(/\s/g, "");
                    const Pollution = $(SingleDay[4]).text().replace(/\s/g, "");
                    const PollutionLevel = $(SingleDay[4]).find("strong").attr("class");
                    threeDaysData.push({
                        Day, WeatherText, Temperature, WindDirection, WindLevel,
                        Pollution, PollutionLevel
                    });

                });
                // console.log({
                // weatherTip,
                // threeDaysData
                // });  
                resolve({
                  weatherTip,
                  threeDaysData
                })
            })
    })
}


// send Email
const getOneData = function(){
const OneUrl = 'http://wufazhuce.com/'
  // http://wufazhuce.com/
  let p = new Promise(function (resolve, reject) {
    superagent.get(OneUrl).end(function (err, res) {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      let selectItem = $("#carousel-one .carousel-inner .item");
      let todayOne = selectItem[0];
      let todayOneData = {
        type: $(todayOne)
          .find(".fp-one-imagen-footer")
          .text()
          .replace(/\s/g, ''),
        text: $(todayOne)
          .find(".fp-one-cita")
          .text()
          .replace(/\s/g, '')
      };
      resolve(todayOneData)
    });
  })
  return p


}
// getWeatherData();
// 聚合数组
function getAllDataAndSendEmail(){
  let htmlData ={};
  Promise.all([getWeatherData(),getOneData()])
   .then(alldata =>{
     const [weather,one]=alldata;
    //  console.log(weather,threeDaysData);
    sendEmail(weather,one);
   })
}
function sendEmail(weather,one)
{
  // 把ejs编译为html
  const template = ejs.compile(
    fs.readFileSync('./email.ejs','utf8')

  )
  const html = template({
    weatherTip:weather.weatherTip,
    threeDaysData:weather.threeDaysData
  })
  const transporter =nodemailer.createTransport({
    service:'qq',
    port:465,   //smtp 邮件传输端口号
    auth:{
      user:'835814273@qq.com',
      pass:'pkfvfqnyarqxbbif'
    }
  })
transporter.sendMail({
  from:'大大大大黄呀<835814273@qq.com>',
  to:'或在等我割舍<1198692103@qq.com>',
  subject:'邮件',
  html
},(err,info)=>{
  if(err)
  {
    console.log(err);
    return false;
  }
  console.log('success',info)
})

}
getAllDataAndSendEmail();
