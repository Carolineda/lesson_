import React from 'react';
// import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from './Loader'


class Result extends React.Component {
  // 从外传入
  static propTypes = {
    loading:PropTypes.bool.isRequired,
    beers:PropTypes.array.isRequired

  }
  render() { 
    if(this.props.loading) {
      // loading状态
      return <Loader message ="加载中..." />
    }
    return ( 
      <div>

      </div>
     );
  }
}
 
export default Result;