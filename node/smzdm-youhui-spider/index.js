// https://www.smzdm.com/youhui/ 页面数据爬虫 获取页面数据
const request =require('request')
const cheerio = require('cheerio')

request('https://www.smzdm.com/youhui/',(err,res)=>{
    if(!err)
    {
        console.log(res.body);

        // cheerio选中节点  decodeEntities要不要解析HTML entity
        const $ = cheerio.load(res.body,{
            //decodeEntities相当于html 符合： &nbsp;;
            decodeEntities:false
        })

        // 
        $('.list.list_preferential').each(function(){
            // 限制 只选择需要的元素  相当于innerHTML
            let title =$('.itemName a',this).html();
            // 去掉选中的A标签  <span></span>
            title = title.replace(/<.*>.*<\/.*>/g,'');
            // 价格选中
            const price = $('.listTitle .red',this).text();
            const img = $('.picLeft img').attr('src')
            const desc = $('.lrInfo',this).text().trim()
            // console.log(price)
            // console.log(title,price)
            console.log({title,price,img,desc});
        })
    }
})