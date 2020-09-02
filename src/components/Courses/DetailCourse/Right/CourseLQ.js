import React, {Component} from 'react';
import about_1 from './../../../../images/about_1.jpg';
import {Link} from 'react-router-dom';

class CourseLQ extends Component{
    render(){
        var {courses} = this.props ;
        if(courses){
            return (
                <div className="sidebar_latest">
                 {this.showkhoahoclienquan(courses)}
                </div>
            )
        }

    }
    showkhoahoclienquan = (courses) => {
       var result = null ;
        if(courses.length>0){
            result = courses.map((vals , index)=>{
                return (
                    <div key={index} className="latest d-flex flex-row align-items-start justify-content-start">
                    <div className="latest_image"><div><img src={about_1} /></div></div>
                    <div className="latest_content">
                     
                <div className="latest_title"><Link to={`/home/detailCourse/${vals.id}`}>{vals.name}</Link></div>
                <div className="latest_price">{(vals.price == 0 || vals.price == null) ? 'Free' : vals.price}</div>
                    </div>
                    </div>
                );
            })
          
        }
        return result;

    }
}

export default CourseLQ ;