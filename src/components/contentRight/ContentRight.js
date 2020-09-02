import React, { Component, Fragment } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
class ContentRight extends Component {
  render(){
    var {cates} = this.props ;

      return (
        <div className="sidebar_section">
        <div className="sidebar_section_title">Danh mục tin tức</div>
        <div className="sidebar_categories">
          <ul>
            {this.showLinks(cates)}
          </ul>
        </div>
      </div>
       );
  }
  showLinks (cates) {
    var links = null;
    if(cates){
      links= cates.map((vals , index) => {
        return (
          <li><a key={index} onClick={()=> this.showLists(vals.id)}>{vals.nameDetail}</a></li>
        );
      });
    }
    return links;
  }
  
  showLists = (id)=>{
    var {showList} = this.props;
    showList(id);
  }
  
  // showNews(news){
  //   var result = null ;
  //   if(news){
  //     result = news.map((pro, index) => {
  //       return (
  //           <Item
  //               key={index}
  //               newss={pro}
  //           />
  //       );
  //   });
  
  //   }
  //   return result ;
  // }
}
export default ContentRight;
