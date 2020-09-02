import React, {Component, Fragment} from 'react';
import cours from  './../../../../images/cours.jpg';
import { connect } from 'react-redux';
import {getListRecomment} from './../../../../actions/DetailCourse/index';
import FormComment from './FormComment';

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state={
            shows : false,
            reComments : []
        }
    }
    
    render(){
        var {comments} = this.props;
       
        return (
            <div className="comments_container">
            <ul className="comments_list">
                {this.showComments(comments)}
            </ul>
            </div>
  
        )
    }
    

    showComments = (comments) => {
         let {listRecomment} = this.props ;
       
         let {shows,reComments} = this.state ;
      
        var result = '' ;
        if(comments.length >0){
            result = comments.map((vals , index) => {
                let ngay = '';
                if(vals.createdDate!== null){
                    ngay = new Date(vals.createdDate);
                }
                
                return (
                    <li key={index}>
                    <div className="comment_item d-flex flex-row align-items-start jutify-content-start">
 
                      <div className="comment_image"><div><img src={cours}/></div></div>
                      <div className="comment_content">
                        <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                <div className="comment_author"><a href="#">{vals.createdBy}</a></div>
                <div className="comment_time ml-auto">{ngay.toLocaleString()}</div>
                        </div>
                        <div className="comment_text">
                <p>{vals.contents}</p>
                        </div>
                        <div className="comment_extras d-flex flex-row align-items-center justify-content-start" >
                          <div className="comment_extra comment_reply" onClick={() => this.reComments(vals.id)}><a href="#icon"><i className="fa fa-reply" aria-hidden="true" /><span>Trả lời</span></a></div>
                         
                        </div>
                        {(shows===true) ? <FormComment/> : null}
                      </div>
                    </div>
                    <ul >
                        {this.showRecomment(listRecomment)}
                    </ul>
                  </li>	
                );
            })
        }
        return result ;
    } 

    reComments = (idcomment) => {
        this.props.getListRecomment(idcomment);
       
        this.setState({
            shows :true,
           
        })
           }

    showRecomment = (datas) =>{
        let result = '' ;
          result = datas.map((vals , index) =>{
              let ngay = '';
              if(ngay!==null){
                  ngay = new Date(vals.dateCommnet);
              }
              return (
                <li key ={index}>
                <div className="comment_item d-flex flex-row align-items-start jutify-content-start">
                  <div className="comment_image"><div><img src={cours} /></div></div>
                  <div className="comment_content">
                    <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
              <div className="comment_author"><a href="#">{vals.createdBy}</a></div>
              <div className="comment_time ml-auto">{ngay.toLocaleString()}</div>
                    </div>
                    <div className="comment_text">
              <p>{vals.contents}</p>
                    </div>
                  </div>
                </div>
              </li>
              )
          })
        

        return result;
    }
}

const mapStateToProps = state => {
    return {
        listRecomment : state.listRecomment
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getListRecomment : (id) => {
            dispatch(getListRecomment(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);