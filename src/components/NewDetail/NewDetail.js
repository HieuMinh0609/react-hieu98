import React, {Component} from 'react';

class NewDetail extends Component {
  render(){
    var {thenew} = this.props ;
    var a = null;
    if(thenew==null){
      return  <div className="col-lg-8"></div>;
    }else{
      a = new Date(thenew.createdDate);
    }
      return (
        <div className="col-lg-8">
        <div className="blog_content">
          <div className="blog_title">{thenew.title}</div>
          <div className="blog_meta">
            <ul>
               <li>Ngày tạo : <a href="#">{a.toLocaleString()}</a></li>
            </ul>
          </div>
          

          <div className="blog_quote d-flex flex-row align-items-center justify-content-start">
            
            <div dangerouslySetInnerHTML={{__html:thenew.content}}></div>
          </div>
          
        </div>
   
        {/* Comments */}
      </div>
       );
  }

}


export default NewDetail;
