import React from 'react';
import PropTypes from 'prop-types';

// 函数式组件  传参需要的参数 props
const Loader = (props) => (
  <div className="loader">
    <img src="/images/ball.svg" alt="loading"></img>
    <h2>{props.message}</h2>
  </div>
)

Loader.propTypes = {message:PropTypes.string};
export default Loader;