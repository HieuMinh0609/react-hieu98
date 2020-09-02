import React, { Component, Fragment } from 'react';
import {Link } from 'react-router-dom';
import news from '../../reducers/new';
import cours  from './../../images/cours.jpg';
class Item extends Component {
  render(){
    
      var {newss} = this.props ;
      var a = new Date(newss.createdDate);
      return (
        <div className="col-lg-6 event_col">
        <div className="event event_left">
          <div className="event_image"><img src={cours} /></div>
          <div className="event_body d-flex flex-row align-items-start justify-content-start">
            <div className="event_date">
              <div className="d-flex flex-column align-items-center justify-content-center trans_200">
      <div className="event_day trans_200">{a.getDate()}</div>
      <div className="event_month trans_200">{(1 + a.getMonth()).toString()}</div>
              </div>
            </div>
            <div className="event_content">
      <div className="event_title"><Link to={`/new/Detail/${newss.id}`}>{newss.title}</Link></div>
              <div className="event_info_container">
      <div className="event_info"><i className="fa fa-clock-o" aria-hidden="true" /><span>{a.toLocaleString()}</span></div>
      <div className="event_info"><i className="fa fa-map-marker" aria-hidden="true" /><span>Tác giả : {newss.createdBy}</span></div>
                <div className="event_text">
      <p>{news.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       );
  }
}
export default Item;
