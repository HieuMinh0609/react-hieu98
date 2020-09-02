import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getAllCourseBySearch} from './../../actions/ActCourse/index';
class SearchCourse extends Component{
  constructor(props) {
    super(props);
    this.state={
      txtname : ''
    }
  }
  onChange = (event) =>{
    var target = event.target ;
    var name = target.name ;
    var value = target.type==='checkbox' ? target.checked : target.value ;
    this.setState({
      [name] : value
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    var {txtname} = this.state;
    this.props.getAllCourseBySearch(0,txtname);
    
  }

    render(){
      var {txtname} = this.state ;
        return (
            <div className="courses_search_container">
            <form action="#" id="courses_search_form" className="courses_search_form d-flex flex-row align-items-center justify-content-start"
              onSubmit={this.onSubmit}
            >
              <input
               type="search" 
               className="courses_search_input"
               placeholder="Tên khóa học"
               style={{width: '100%'}} 
               name = "txtname"
               value ={txtname}
               onChange={this.onChange}
                 />
              <button action="submit" className="courses_search_button ml-auto">Tìm kiếm</button>
            </form>
          </div>
        )
    }
}


const mapStateToProps = (state) => {
  return {
    allCourses : state.allCourses,

  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    getAllCourseBySearch : (index,key) => {
      dispatch(getAllCourseBySearch(index,key));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchCourse);