import React from 'react';
import Header from './Header.js';
import Search from './Search.js';
import Results from './Results.js';
export default class Main extends React.Component {
constructor() {
  super();
  this.state={
    beers:[],
    loading:true,
  }
}
// 生命周期  搜索结果
componentDidMount () {
  const params = this.props.match.params || {}    //  /search/:searchTerm
  const searchTerm = params.searchTerm || undefined;
  this.loadBeers(searchTerm);
}
// 搜索的默认
loadBeers (searchTerm = "hops") {
  fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
  .then(data => data.json())
  .then(data => {
    console.log(data)
  })
}
  render() { 
    
    return (
      <div className="wrapper">
        <Header siteName="Beer me!" />
        <Search />
        <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    );
  }
}
