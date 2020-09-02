import React, {Component, Fragment} from 'react';

class Golearning extends Component{
    render(){
        return (
            <Fragment>
             <div className="container-fluid">
                <div className="row">
                 <div className="col col-sm-5">
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
                      <p>Khóa học này thật bổ ích !'</p>
                    </div>
                  </div>
                </div>
                </div>
                 <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="tab_panel tab_panel_2 active">
                  <div className="tab_panel_content">
                    <div className="tab_panel_content">
                      {/* Dropdowns */}
                    aaaaaaa
                    </div>
                  </div>
                </div>
                 </div>
                <div className="tab-pane fade" id="document" role="tabpanel" aria-labelledby="home-tab">
                <div className="course_info_title">Danh sách tài liệu khóa học :</div>
                <div style={{marginLeft: "20px"}}>
                <ul>
                      
                      <li>
                              <div className="dropdown_item">
                                <div className="dropdown_item_title"><span>Bài 1:</span>Chương mục bài giảng tự do </div>
                              </div>
                      </li>
                  </ul>
                 </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    aaaaaa
               </div>
                 </div>
               </div>
             </div>
               <div>
                   
               <ul class="nav flex-column" role="tablist">
    <li class="nav-item" style={{border: 'solid gray 0.25px' , marginTop : '10px'}}>
      <a class="nav-link" data-toggle="tab" href="#baithi">Bài thi cuối khóa học</a>
    </li>
    <li class="nav-item" style={{border: 'solid gray 0.25px',marginTop : '10px'}}>
      <a class="nav-link" data-toggle="tab" href="#tongket">Tổng kết khóa học</a>
    </li>
    
  </ul>
 
                   
               </div>
                 </div>
                 <div className="col col-sm-7 tab-content">
           
            <div id="baithi" class="tab-pane fade ">
            <h3>Menu 1</h3>
      <p>baithi</p>
            </div>
            <div id="tongket" class="tab-pane fade">
            <h3>Menu 1</h3>
      <p>khoahoc</p>
            </div>
            </div>
                </div>
               
             </div>

             
            </Fragment>
            
        )
    }
}

export default Golearning ;