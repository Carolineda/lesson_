// 封装组件 对应type,content,duration,onClose

import notificationDom from './notificationDom';
import './toast.css'

let notification;
function notice(type,content,duration,onClose){
  if(!notification)  notification = notificationDom;
  return notification.addNotice({
    type,content,duration,onClose
  })
}

// 通过toast.info  toast.success 调用
export default{
  info(content,duration,onClose){
    return notice('info',content,duration,onClose)
  },
  success(content,duration,onClose) {
    return notice('success',content,duration,onClose)
  },
  warning(content,duration,onClose) {
    return notice('warning',content,duration,onClose)
  },
  loading(content,duration,onClose) {
    return notice('loading',content,duration,onClose)
  },
  error(content,duration,onClose) {
    return notice('error',content,duration,onClose)
  }
}