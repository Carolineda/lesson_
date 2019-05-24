// 文件上传
const app = getApp()

Page({
  data:{
    files:[]
  },
  chooseImage(){
    let that = this
    // 选择图片
    wx.chooseImage({
      // 设置图片原图或者压缩图 不设置默认压缩，原图都有
      sizeType:['original','compressed'],
      // 指定图片是本地相册还是实时拍照
      sourceType:['album','camera'],
      success(res){
        console.log(res)
        that.setData({
          // 修改数组数据源
          files:that.data.files.concat(res.tempFilePaths)
        })
        // 图片
        for(let i=0;i<res.tempFilePaths.length;i++)
        {
           // 上传文件保存到云存储
        const filePath = res.tempFilePaths[i]
        // 查找.图片后缀 包括前面不包括后面
        let a = filePath.lastIndexOf('.')
        let b = filePath.lastIndexOf('.',a-1)
        let c =filePath.substring(b+1,a)
        // 匹配字符串所有特殊字符
        const cloudPath = c + filePath.match(/\.[^.]+?$/)
        wx.cloud.uploadFile({
          //同名 省略 filePath:filePath
          filePath,
          cloudPath,
          success(res){
            console.log('上传成功',res)
          },
          fail(err)
          {
            console.log('上传失败',err)

          }
        })
        }
        
      }
    })
  },
  // 图片预览效果
  previewImage(e)
  {
    console.log(e)
    wx.previewImage({
      current:e.currentTarget.id,
      urls:this.data.files
    })
  }

})