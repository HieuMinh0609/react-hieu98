import React, {Component} from 'react';


class LatestNews extends Component {
  render(){
      return (
        <div className="sidebar_section">
        <div className="sidebar_section_title">Latest Courses</div>
        <div className="sidebar_latest">
          {/* Latest Course */}
          <div className="latest d-flex flex-row align-items-start justify-content-start">
            <div className="latest_image"><div><img src="images/latest_1.jpg" alt="" /></div></div>
            <div className="latest_content">
              <div className="latest_title"><a href="course.html">How to Design a Logo a Beginners Course</a></div>
              <div className="latest_date">november 11, 2017</div>
            </div>
          </div>
          {/* Latest Course */}
          <div className="latest d-flex flex-row align-items-start justify-content-start">
            <div className="latest_image"><div><img src="images/latest_2.jpg" alt="" /></div></div>
            <div className="latest_content">
              <div className="latest_title"><a href="course.html">Photography for Beginners Masterclass</a></div>
              <div className="latest_date">november 11, 2017</div>
            </div>
          </div>
          {/* Latest Course */}
          <div className="latest d-flex flex-row align-items-start justify-content-start">
            <div className="latest_image"><div><img src="images/latest_3.jpg" alt="" /></div></div>
            <div className="latest_content">
              <div className="latest_title"><a href="course.html">The Secrets of Body Language</a></div>
              <div className="latest_date">november 11, 2017</div>
            </div>
          </div>
        </div>
      </div>
       );
  }

}


export default LatestNews;
