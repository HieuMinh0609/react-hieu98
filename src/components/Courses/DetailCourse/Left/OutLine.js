import React, {Component, Fragment} from 'react';
import cours from  './../../../../images/cours.jpg';
import { connect } from 'react-redux';
import callApi from './../../../../functions/callApi';
import {getListRecomment} from './../../../../actions/DetailCourse/index';
import FormComment from './FormComment';
import CoursewareItem from './CoursewareItem';
class OutLine extends Component{
    constructor(props) {
        super(props);
        this.state={
           values:''
        }
    }
    
    render(){
        var {outline} = this.props;
       
        return (
            <li  className="has_children" id={outline.id} onClick={() => this.showhoclieu(outline.id)}>
            <div className="dropdown_item" data-toggle="collapse" data-target= {`#collapseOne`+outline.id+``} >
          <div className="dropdown_item_title" ><span>{outline.name}</span></div>
            </div>
            <ul id={`collapseOne`+outline.id+``} className="collapse">
                    {this.showhoclieus(this.state.values)}

            </ul>
          </li>
        )
    }

    showhoclieu = (id) =>{
        callApi(`http://localhost:8080/api/outline/out/${id}`,'GET',null).then(res => {
            console.log(res);
            this.setState({
                values :res.data
            })
        }).catch(err => {
     
   });
    }

        showhoclieus = (data) =>{
            var result = null; 
            if(data.length>0){
                result = data.map((vals , index) =>{

                return <CoursewareItem  
                    key={index}
                    item = {vals}
                >

                </CoursewareItem>
                
                })
            }
            return result;
    } 
    

    
}
 
export default OutLine;