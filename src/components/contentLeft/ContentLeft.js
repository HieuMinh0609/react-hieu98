import React, { Component, Fragment } from 'react';
import '../../App.css';
import Item from './Item';

class ContentLeft extends Component {
  render(){
       var {news} = this.props ;
      return (
        <div className="col-lg-8">
        <div className="courses_container">
          <div className="row courses_row">
             {this.showNews(news)}
             
          </div>
          <div className="row pagination_row">
            <div className="col">
              <div className="pagination_container d-flex flex-row align-items-center justify-content-start">
                <ul className="pagination_list">
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /></a></li>
                </ul>		
              </div>
            </div>
          </div>
        </div>
      </div>
       );
  }

  showNews(news){
    var result = null ;
    if(news){
      result = news.map((pro, index) => {
        return (
            <Item
                key={index}
                newss={pro}
            />
        );
    });
  
    }
    return result ;
  }
}
export default ContentLeft;
