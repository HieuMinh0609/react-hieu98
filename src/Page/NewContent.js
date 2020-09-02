import React, {Component} from 'react';
import LastestNews from '../components/NewDetail/LatestNews';
import ContentRight from '../components/contentRight/ContentRight';
import NewDetail from '../components/NewDetail/NewDetail';
import  {getListCategories ,getListNew,getNEW,getListNewBycategory}  from './../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class NewContent extends Component {
  constructor(props) {
    super(props);
    this.state ={
        id : ''
    }
   }
  componentDidMount(){
  
    var id = this.props.match.params.id;
    this.props.getNew(id);
    this.props.getListCategories();
  }

  render(){
      var {thenew,cates} = this.props;
      var datas = cates.data;
      var datanew = thenew.data ;
      //this.redirect(this.state.id);
      if(this.state.id){
        return    <Redirect to={{
          pathname:`/home/news`,
          state: {idCate:this.state.id}
        }}/>
      }
      
      return (
        <div>      
        <div className="super_container">
          {/* Header */}
          {/* Menu */}
          {/* Blog */}
          <div className="blog">
            <div className="container">
              <div className="row">
                {/* Blog Content */}
                 <NewDetail thenew={datanew ? datanew : null} 
                />
                {/* Blog Sidebar */}
                <div className="col-lg-4">
                  <div className="sidebar">
                    {/* Categories */}
                      <ContentRight cates={datas}
                       showList={this.showList}/>

                    {/* Latest News */}
                     <LastestNews/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       );
  }

  showList = (id) =>{
    this.setState({
        id : id 
    });
  }

  // redirect = (id) =>{
  //   console.log(id)
   
  
  // }
}


const mapStateToProps = state => {
  return {
      cates : state.cates,
      thenew : state.thenew,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      getListNew : () => {
          dispatch(getListNew());
      },
      getListNewBycategory : (id) => {
        dispatch(getListNewBycategory(id));
    },
      getListCategories : () => {
        dispatch(getListCategories());
    },
      getNew : (id) => {
          dispatch(getNEW(id));
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewContent);