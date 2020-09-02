import React, {Component} from 'react';
import Left from './../../components/Courses/DetailCourse/Left/Left';
import Right from '../../components/Courses/DetailCourse/Right/Right';
import {getDetailCourse} from './../../actions/DetailCourse/index';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
class DetailCourse extends Component{
    componentDidMount(){
     
      var id = this.props.match.params.id;
      this.props.getDetailCourse(id);
    }

    render(){
      var {detailCourse} = this.props;
      if(Object.keys(detailCourse).length>0){
        var id = this.props.match.params.id;
      // var checkvh = this.checkVaohoc(detailCourse[15],detailCourse[7].courseConfig, detailCourse[7].courseConfig.freedomRegister ,detailCourse[14]);
        return (
          <div className="super_container">
            <div className="course">
              <div className="container">
                <div className="row">
                  {/* Course */}
                  <div className="col-lg-8">
                     <Left obj={detailCourse} idc ={id}/>
                  </div>
                  {/* Course Sidebar */}
                  <div className="col-lg-4">
              
                    <Right  obj={detailCourse}/>
    
                  </div>
          <div style={{ left: '31%' , marginTop: '20px'}}>
          {this.checkLearningTimeStart(detailCourse[15],detailCourse[7].courseConfig, detailCourse[7].courseConfig.freedomRegister ,detailCourse[14],detailCourse[7].id)}
          </div>
                </div>
              </div>
            </div>
          </div>
            )
      }
      return (
        <div></div>
      )
     
    }
    
   checkfinnish = () =>  {
      alert("Bạn không thể đăng ký khóa học này do thời gian chưa tới hoặc đã hết hạn!");
      }

     checktimeStart = () => {
       alert("Chưa đến thời gian học hoặc đã quá thời gian học ,  xin vui lòng quay lại sau !");
    
    }

    checkLearningTimeStart=(isJoin , config ,freedom, isoke,idc) =>{
      
      if (!isJoin) {

        if (config) {
            if (freedom === 1 ) {
                if(isoke==3){return (<a className="btn btn-primary text-uppercase khoahocdaketthuc"  onClick={this.checkfinnish} type="button" href="#" data-id="` + res[7].id + `"  >Đăng kí học <i className="fa fa-sign-in"></i></a>)}
                else  if(isoke ===2){
                    return (<a className="btn btn-primary  text-uppercase" href="#"  onClick={this.checktimeStart}  >Vào học <i className="fa fa-sign-in"></i></a>)
                }
                else if(isoke ===1){
                    return (<a className="btn btn-primary text-uppercase modalsss" type="button" href="#" data-id="` + res[7].id + `" data-toggle="modal" data-target="#exampleModal1"   >Đăng kí học <i className="fa fa-sign-in"></i></a>)
                }
            }
            else {
                if(isoke ===3) {
                    return (<a className="btn btn-primary text-uppercase khoahocdaketthuc"  onClick={this.checkfinnish} type="button" href="#" data-id="` + res[7].id + `"  >Đăng kí học <i className="fa fa-sign-in"></i></a>)
                  }
                else  if(isoke ===2){
                    return (<a className="btn btn-primary  text-uppercase" href="#"  onClick={this.checktimeStart}>Vào học <i className="fa fa-sign-in"></i></a>)
                }
                else if(isoke ===1){
                   return (<a className="btn btn-primary ajax-before-go-to-href text-uppercase "  href="#">Vào học <i className="fa fa-sign-in"></i></a>)
                }

            }
        }

    } else {

            if(isoke ===2) { return (<a className="btn btn-primary  text-uppercase" href="#"  onClick={this.checktimeStart} >Vào học <i className="fa fa-sign-in"></i></a>)}
            else return (<Link className="btn btn-primary text-uppercase" to= {`/home/golearning/${idc}`}  >Vào học<i className="fa fa-sign-in"></i></Link>)
    }   
     
  }

}
  


const mapStateToProps = state => {

  return {
     detailCourse : state.detailCourse
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
       getDetailCourse : (id) => {
          dispatch(getDetailCourse(id));
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailCourse);