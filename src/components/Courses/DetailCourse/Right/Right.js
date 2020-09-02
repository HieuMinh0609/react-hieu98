import React, {Component} from 'react';
import CourseLQ from './CourseLQ';

class Right extends Component{
    render(){
      var {obj} = this.props ;
      
      var course = {};
      var  timestart  =  null ;
      var timestartLearning  = null ;
      var timeendLearning = null;
      if(obj){
         course = obj[7];
        if(course){
           timestart = new Date( course.courseConfig.registerStart);
            timestartLearning = new Date( course.courseConfig.startLearning);
            timeendLearning  = new Date(course.courseConfig.endLearning);
            return (
              <div className="sidebar">
              {/* Feature */}
              <div className="sidebar_section">
                <div className="sidebar_section_title">Thông tin khóa học</div>
                <div className="sidebar_feature">
          <div className="course_price">{(course.price == 0 || course.price == null) ? 'Free' : course.price}</div>
                  {/* Features */}
                  <div className="feature_list">
                    {/* Feature */}
                    <div className="feature d-flex flex-row align-items-center justify-content-start">
                      <div className="feature_title"><i className="fa fa-clock-o" aria-hidden="true" /><span>Thời gian đăng kí học:</span></div>
          <div className="feature_text ml-auto">{(course.courseConfig.registerStart!=null) ? ("0" + timestart.getDate()).slice(-2) + "/" + ("0" + (timestart.getMonth() + 1)).slice(-2) + "/" + timestart.getFullYear() : 'Không giới hạn thời gian đăng kí'}</div>
                    </div>
                    {/* Feature */}
                    <div className="feature d-flex flex-row align-items-center justify-content-start">
                      <div className="feature_title"><i className="fa fa-file-text-o" aria-hidden="true" /><span>Thời gian bắt đầu học:</span></div>
          <div className="feature_text ml-auto">{(course.courseConfig.startLearning!=null) ? ("0" + timeendLearning.getDate()).slice(-2) + "/" + ("0" + (timeendLearning.getMonth() + 1)).slice(-2) + "/" + timeendLearning.getFullYear() : 'Không giới hạn thời gian'}</div>
                    </div>
                    {/* Feature */}
                    {/* Feature */}
                    <div className="feature d-flex flex-row align-items-center justify-content-start">
                      <div className="feature_title"><i className="fa fa-list-alt" aria-hidden="true" /><span>Đăng kí học:</span></div>
          <div className="feature_text ml-auto">{(course.courseConfig.freedomRegister == 0) ? 'Không yêu cầu đăng kí' : 'yêu cầu đăng kí'}</div>
                    </div>
                    {/* Feature */}
                    <div className="feature d-flex flex-row align-items-center justify-content-start">
                      <div className="feature_title"><i className="fa fa-users" aria-hidden="true" /><span>Số học viên:</span></div>
          <div className="feature_text ml-auto">{obj[13] ? obj[13] : '0'}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Feature */}
              {/* Latest Course */}
              <div className="sidebar_section">
                <div className="sidebar_section_title">Khóa học liên quan</div>
            
                  {/* Latest Course */}
                   <CourseLQ courses={obj[3]}/>
                  {/* Latest Course */}
  
                
              </div>
            </div>
          )
        }
      }
      return(
        <div>aaaaaaa</div>
      )
       
    }
}

export default Right ;