import React, {Component} from 'react';
import course_2 from './../../images/course_2.jpg';
import {Link} from 'react-router-dom';
class CourseLeft extends Component{
    render(){
        var {course} = this.props;
        return (
            <div className="col-lg-6 course_col">
            <div className="course">
              <div className="course_image"><img src={course_2} /></div>
              <div className="course_body">
        <h3 className="course_title"><Link to={`/home/detailCourse/${course.id}`}>{course.name}</Link></h3>
        <div className="course_teacher">{course.createdBy ? course.createdBy : 'admin' }</div>
                <div className="course_text">
        <p>{course.courseConfig.freedomRegister == 1 ? 'không yêu cầu đăng kí khóa học ' : 'khóa học cần đăng kí'}</p>
                </div>
              </div>
              <div className="course_footer">
                <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                  <div className="course_info">
                    <i className="fa fa-book" aria-hidden="true" />
        <span>{course.outline.chapters.length>0 ? course.outline.chapters.length : '0'} Chương mục</span>
                  </div>

        <div className="course_price ml-auto">{(course.price === 0 || course.price ==null) ? 'Free' : course.price}</div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default CourseLeft ;