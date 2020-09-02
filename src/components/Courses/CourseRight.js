import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getAllCourseByCategoriCourse} from './../../actions/ActCourse/index';
class CourseRight extends Component{


  // componentDidMount(){
  //   var id = this.state.id ;

  // }
  
  showCourseByCate =(id) => {
    this.props.getIDToHomeCourse(id);
    }

 
  
    render(){
      var {catesCourse} = this.props;
     
        return (
            <div className="sidebar_section">
            <div className="sidebar_section_title">Danh mục khóa học</div>
            <div className="sidebar_categories">
              <ul>
                {this.showCate(catesCourse)}
              </ul>
            </div>
          </div>
        )
    }

    showCate= (cates) => {
      var result = null; 
      if(cates.length>0){
        result = cates.map((vals ,index)=> {
           return (
           <li key={index} onClick={() => this.showCourseByCate(vals.id)}><a href="#">{vals.name}</a></li>
           );
        })
      }
      return result;
    }
}


const mapStateToProps = (state) => {
  return {
    allCourses : state.allCourses,
  }
 
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    getAllCourseByCategoriCourse : (id) => {
      dispatch(getAllCourseByCategoriCourse(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseRight);
