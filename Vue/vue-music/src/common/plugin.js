// 自定义插件，组件 实现$toast
let Toast = {}
// 添加Toast install字段
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'center',  //toast默认显示的位置
    duration: '1500'        //持续时间
  }
  for (let property in options) {
    opt[property] = options[options]     //options[options]选择对象里面的某项 使用options的配置 完整的获取
  }
  // $toast挂载原型链
  Vue.prototype.$toast = (tips, type) => {  //type于修改传入值改变toast位置
    if (type) {
      opt.defaultType = type
    }
    if (document.getElementsByClassName('vue-toast').length) {
      // 此时toast已经在页面出现  return 
      return
    }
    let toastTpl = Vue.extend({  //vue扩展一个组件
      template: '<div class ="vue-toast toast-' + opt.defaultType + '">' + tips + '</div>'
    })
    let tpl = new toastTpl.$mount().$el  //实例
    document.body.appendChild(tpl)
    setTimeout(() => {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
  ['bottom', 'center', 'top'].forEach(type => {  //toast 第二个可选择的参数
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
}

// hideLoding组件
let Loading = {}
Loading.install = function (Vue) {
  let tpl
  Vue.prototype.$showLoading = () => {
    if(document.getElementsByClassName('vue-loading').length) {  //页面loading
      return
    }
    // 页面没有loading
    let loadingTpl = Vue.extend({   //创建构建器，定义好提示的信息
      template:'<div class = "vue-loading"></div>'
    })
    tpl = new loadingTpl().$mount.$el
    document.body.appendChild(tpl)
    
  }
  Vue.prototype.$hideLoading = () => {
    if (document.getElementsByClassName('vue-loading').length) {
      document.body.removeChild(tpl)
    }
  }
}


// export组件 被别处直接引用
export {
  Toast,
  Loading
}
