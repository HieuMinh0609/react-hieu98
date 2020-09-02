import React, {Component} from 'react';
import Decuong from './../Left/DeCuong';
import DanhGia from './../Left/DanhGia';
import about_1 from './../../../../images/about_1.jpg'
class Left extends Component{
    render(){
      var {obj} = this.props;
      var {idc} = this.props;
      if(obj){
        var course = obj[7];
       
        if(course){
          return (
            <div className="course_container">
            <div className="course_title">{course.name!==null ? course.name : 'khóa học đơn vị'}</div>
            <div className="course_info course_infos d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
              {/* Course Info Item  {obj[7].name}  {obj[7].createdBy==null ? 'admin' : obj[7].createdBy }*/}
              <div className="course_info_item">
                <div className="course_info_title">Giảng viên:</div>
        <div className="course_info_text"><a href="#">{course.createdBy==null ? 'admin' : course.createdBy }</a></div>
              </div>
              {/* Course Info Item */}
              <div className="course_info_item">
                <div className="course_info_title">Đánh giá:</div>
                <div className="rating_r rating_r_4">{obj[1]!== '0' ? obj[1].toString()+'/5' : 'chưa có đánh giá'} <i /></div>
              </div> 
              {/* Course Info Item */}
              <div className="course_info_item">
                <div className="course_info_title">Danh mục:</div>
          <div className="course_info_text"><a href="#">{course.categoryName}</a></div>
              </div>
            </div>
            {/* Course Image */}
            <div className="course_image"><img src={about_1} /></div>
            {/* Course Tabs */}
            
            <div style={{marginTop : '30px'}}>
            <div>
               <ul className="nav nav-tabs" id="myTab" role="tablist">
                 <li className="nav-item">
             <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Mô tả</a>
            </li>
               <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Đề cương</a>
              </li>
                <li className="nav-item">
                   <a className="nav-link"  data-toggle="tab" href="#document" role="tab"  aria-selected="false">Tài liệu</a>
               </li>
                  <li className="nav-item">
                 <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Đánh giá</a>
               </li>
                </ul>
                  <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="tab_panel active">
                  <div className="tab_panel_content">
                    <div className="tab_panel_text">
                      <p>{course.description!== '' ? course.description : 'Khóa học này thật bổ ích !' }</p>
                    </div>
                  </div>
                </div>
                </div>
                 <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="tab_panel tab_panel_2 active">
                  <div className="tab_panel_content">
                    <div className="tab_panel_content">
                      {/* Dropdowns */}
                        <Decuong idc={idc}/>
                    </div>
                  </div>
                </div>
                 </div>
                <div className="tab-pane fade" id="document" role="tabpanel" aria-labelledby="home-tab">
                <div className="course_info_title">Danh sách tài liệu khóa học :</div>
                <div style={{marginLeft: "20px"}}>
                <ul>
                      {this.showDocument(obj[6])}
                      <li>
                              <div className="dropdown_item">
                                <div className="dropdown_item_title"><span>Bài 1:</span>Chương mục bài giảng tự do </div>
                              </div>
                      </li>
                  </ul>
                 </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <DanhGia idc={idc}/>
               </div>
                 </div>
               </div>
             </div>
            
            </div>
        )
        }
       
      }
      
      return(
        <div></div>
      )
  
    }

    showDocument =(datas) => {
      var result = null ;
      if(datas.length >0){
        result = datas.map((vals , index) => {
           return (
            <li key ={index}>
            <div className="dropdown_item">
           <div className="dropdown_item_title">{vals.name}</div>
            </div>
           </li>
           )
        })
      }
      return result ;
    }
}

export default Left ;






































