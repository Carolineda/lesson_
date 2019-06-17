const Event = require('events');
const Player = require('player')
const ev = new Event();
const request = require('./lib/request.js');
// 绑定搜索事件 ev.on('search') 
// foreach 一个个去绑定
  ['search','choose'].forEach(evName => {
    // search 事件交给lib目录下的js
    const fn = require(`./lib/${evName}`);
    // 循环绑定事件交给其自己模块处理
    ev.on(evName,async function(...args){
      // 异步  用await
       const res = await fn(...args);
       ev.emit('handle',evName,res,...args);
       console.log(res)
    })
  })

  ev.on('afterSearch',(res,keyWord) =>{
    if(!res.result || !res.result.songs)
    {
      console.log(`不存在歌曲${keyWord}信息`)
      return false
    }
    const songs = res.result.songs;
    ev.emit('choose',songs);
  })
  ev.on('afterChoose',(selected,songs)=>{
    const selectSong = songs.find((song,i)=>{
      return selected === `${i}${song.name}`
    })
    if(selectSong) {
      const {id} = selectSong;
      let url ='http://neteasecloudmusicapi.zhaoboy.com/song/url?id=' +id;
      // 请求歌曲详情
      const songDetail = await request(url);
    }
  })
ev.on('handle',(key,res,...args)=>{
  switch(key){
    case 'search':
      return ev.emit('afterSearch',res,args[0]);
    case 'choose':
      return ev.emit('afterChoose',res,args[0])
  }
})
function main() {
  const argv = process.argv.slice(2)
  // 获取关键词
  let keyWord = argv[0]

  // 搜索事件
  ev.emit('search',keyWord)
  console.log(keyWord)
}
main();