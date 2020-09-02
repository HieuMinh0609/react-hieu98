import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getOutLineCourse,getHocLieuCourse} from './../../../../actions/DetailCourse/index';
import callApi from './../../../../functions/callApi';

import OutLine from './OutLine';
class DeCuong extends Component{
   constructor(props) {
     super(props);
     this.state={
       hoclieu : [],
       idChapter : ''
     }
   }
   

    componentDidMount(){
      let {idc} = this.props;
      this.props.getOutLineCourse(idc);
     
    }
    
    render(){
       
       var {outline}  = this.props ;
        return (
            <ul className="dropdowns">

              {this.showChapter(outline)}

          </ul>
        )
    }
    
 
    
    showChapter =(datas) =>{
      var {hoclieu,idChapter} = this.state;
      var result = null ;
      if(datas.length >0){
        result = datas.map((outline ,index) =>{
          return  <OutLine 
          key = {index}
          outline = {outline}
          >

          </OutLine>
        })
      }
     return  result;
    }

    // showhoclieus = (data) =>{
    //   var result = null; 
    //   if(data.length>0){
    //     result = data.map((vals , index) =>{

    //       return <CoursewareItem  
    //         key={index}
    //         item = {vals}
    //       >

    //       </CoursewareItem>
         
    //     })
    //   }
    //   return result;
    // } 
}
const mapStateToProps = (state) => {
  return {
    outline : state.outline,
 
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    getOutLineCourse : (id) => {
      dispatch(getOutLineCourse(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeCuong);