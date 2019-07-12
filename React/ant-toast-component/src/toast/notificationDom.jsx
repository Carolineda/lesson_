// 定义一个组件 不能在页面上显示 只有把其挂载在入口文件调用才能显示

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import Notice from './Notice';

class Notification extends Component {
  // type,content,duration,onClose 消息对应的信息
  state = { 
    notices:[]    //弹框的消息 数组维护
   }
  generateKey = () => {
    const {notices} = this.state
    return `notice-${new Date().getTime()} - ${notices.length}`   //用当前的时间戳 - 当前长度 生成唯一值
   }
  //  ?添加一条消息
  addNotice = (notice) => {
    console.log('notice',notice);
    const notices = this.state.notices.splice(0);
    const key = this.generateKey();  //用来区分每一条消息
    notice.key = key;
    notices.push(notice);
    this.setState({
      notices
    })
    // 移除  消息关闭执行的函数
    setTimeout(() => {
      this.removeNotice(key)
    },notice.duration || 2000)
   }
   removeNotice = (key) => {
    let notices = this.state.notices.splice(0);
    let notice = notices.findIndex(e => e.key=e.key);
    if(notice !== -1) {
      const current = notices[notice];
      if(current.onClose) current.onClose();
      notices.splice(notice,1);
      this.setState({
        notices
      })
    }
   }
  render() {
     const {notices} = this.state;
     return(
       <TransitionGroup className="toast-notification">
       {
         notices.map((notice) => {
           return(
           <CSSTransition timeout={300} key={notice.key} classNames="toast-notice-wrapper notice">
            <Notice {...notice} />
           </CSSTransition>
           )
         })
       }
       </TransitionGroup>
     )
   }
}
 
// export default Notification;
// 只有把其挂载在入口文件调用才能显示  显示组件Notification
function createNotification () {
  const div = document.createElement('div');
  document.body.appendChild(div)    //定义一个div节点 让Notification组件挂载在div上

  // ref 可以获取组件的实例
  const ref = React.createRef();
  ReactDOM.render(<Notification ref={ref} />, div);   //只有append页面才能显示 与app同级
  return {
    addNotice(notice){
      return ref.current.addNotice(notice);
    }
  }
}

// 抛出
export default createNotification()