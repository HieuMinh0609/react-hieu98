import React, {Component, Fragment} from 'react';
import cours from  './../../../../images/cours.jpg';
import { connect } from 'react-redux';
import {getListRecomment} from './../../../../actions/DetailCourse/index';
import FormComment from './FormComment';

class CoursewareItem extends Component{
    constructor(props) {
        super(props);
        this.state={
           
        }
    }
    
    render(){
        var {item} = this.props;
   
        return (
            <li>
            <div className="dropdown_item">
           <div className="dropdown_item_title">{item.name}</div>
              <div className="dropdown_item_text">
           <p>{item.typeCourseWareCode}</p>
              </div>
            </div>
          </li>
  
        )
    }
    

    
}
 
export default CoursewareItem;