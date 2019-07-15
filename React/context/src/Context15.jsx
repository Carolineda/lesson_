import React, { Component } from 'react';
import propTypes from 'prop-types'
class Context15 extends Component {
  
  state = { 
    // 静态属性方法二 static
    theme:'red'
   }

  //  后代组件在此获取信息
   getChildContext() {
     return {
      theme:this.state.theme    //theme 从state中获取  return当作抛出提供的信息
     }
   }
// 切换方法一
  //  handleToggleTheme = (e) => {
  //    const theme = e.target.dataset.theme;
  //    this.setState({
  //      theme
  //    })
  //  }

  // 切换方法二：接收参数返回一个函数（） （）
  // handleToggleTheme = (theme) => () => {
  //   this.setState({
  //     theme
  //   })
  // }

  // 方法三
   handleToggleTheme = (theme) => {
     this.setState({
       theme
     })
   }
  render() { 
    const msg = ['str1','str2','str3']
    return ( 
      <div>
        {
          msg.map((item,i) => {
            return (
              <Message key={i} text={item}/>     //通过Message组件渲染map.msg信息
            )
          })
        }

        {/* 使用同类名实现不同的切换 1.自定义属性data-theme="pink"  2.传参*/}
        {/* <button onClick={this.handleToggleTheme} data-theme="pink">pink</button>
        <button onClick={this.handleToggleTheme} data-theme="black">black</button> */}
        <button onClick={()=> {this.handleToggleTheme('pink')}} data-theme="pink">pink</button>
        <button onClick={()=> {this.handleToggleTheme('green')}} data-theme="green">green</button>

        {/*<button onClick={()=> {this.handleToggleTheme.bind(this,'green')}} data-theme="green">green</button>  */}
      </div>
     );
  }
}

/**
 *  在定义类的静态属性时：
 * function
 * 
 */
// 进行类型约束 定义静态属性 方法一
Context15.childContextTypes ={
  theme:propTypes.string    //定义theme类型为字符串
}

// 新建组件  子组件
 class Message extends Component{
  shouldComponentUpdate() {
     return false
   }
  render() {
    // 获取消息
    const {text} = this.props;
    return (
      <li>
        {text}
        <MyButton />
      </li>
    )
  }
 }

//  孙组件
 class MyButton extends Component {

   static contextTypes = {
     theme : propTypes.string    //获取数据的地方都要类型约束   
   }
   render() {

    const {theme} = this.context;   //获取信息
     return(
       <button style={{
         color:theme
       }}>delete</button>
     )
   }
 }
export default Context15;