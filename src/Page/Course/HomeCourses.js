import React, {Component} from 'react';
import CourseLeft from './../../components/Courses/CourseLeft';
import CourseRight from './../../components/Courses/CourseRight';
import SearchCourse from './../../components/Courses/SearchCourse';
import {getAllCourse,getAllCategoriCourse} from './../../actions/ActCourse/index';
import {getAllCourseByCategoriCourse} from './../../actions/ActCourse/index';
import { connect } from 'react-redux';
class HomeCourses extends Component{

  
    componentDidMount(){
      this.props.getAllCourses();
      this.props.getAllCourseCategory();
      
     
    }
    
    getIDToHomeCourse = (id) =>{
   
      this.props.getAllCourseByCategoriCourse(id);
    }

    render(){
       var {allCourses,cates} = this.props;
        if(allCourses){
        
        return (
          
          <div className="super_container">
          <div className="courses">
            <div className="container">
              <div className="row">
                {/* Courses Main Content */}
                <div className="col-lg-8">
                  <SearchCourse/>
                  <div className="courses_container">
                    <div className="row courses_row">
          
                      {/* Course */}
                      {this.showCourses(allCourses)}
                      
                      {/* Course */}

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
                {/* Courses Sidebar */}
                <div className="col-lg-4">
                  <div className="sidebar">
                    {/* Categories */}
                     <CourseRight catesCourse={cates} getIDToHomeCourse={this.getIDToHomeCourse}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
       }else{
         return (
              <div>
                Không có kháo học nào !
              </div>
         );
       }
        
    }

showCourses =(courses) =>{
  var result = null ;
  if(courses.length>0){
   
    result = courses.map((vals , index) => {
       return  <CourseLeft course={vals} key={index} />
      
    })
  }
  return result;
}
}




const mapStateToProps = (state) => {
 
  return {
    allCourses : state.allCourses,
    cates : state.cates
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    getAllCourses : () => {
      dispatch(getAllCourse());
    },
    getAllCourseCategory : () => {
      dispatch(getAllCategoriCourse());
    },
    getAllCourseByCategoriCourse : (id) => {
      dispatch(getAllCourseByCategoriCourse(id));
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeCourses);
