import categoryList from './categoryList'
Page({
    data: {  
    curNav: 0,
    categoryList: categoryList,
    
    
},
switchTab(e)
{
    console.log(e);
    let that = this
    that.setData({
        toView: e.target.dataset.id,
        curNav:e.target.dataset.index
    })
},

switchScroll(e)
{
    console.log(e);
    
}

})
