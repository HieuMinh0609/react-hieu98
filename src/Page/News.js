import React, {Component,Fragment} from 'react';
import ContentLeft from './../components/contentLeft/ContentLeft';
import ContentRight from './../components/contentRight/ContentRight';
import  {getListNew}  from './../actions/index';
import  {getListCategories}  from './../actions/index';
import {getListNewBycategory} from './../actions/index';
import { connect } from 'react-redux';


class News extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id : ''
        }
    }
    

    componentDidMount(){
    
     
       if(this.props.history.location.state){
            this.props.getListNewBycategory(this.props.history.location.state.idCate);
            this.setState({
                id : this.props.history.location.state.idCate 
            });
       } else{
        this.props.getListNew();
        this.props.getListCategories();
       }

    
    }

    render(){
        var {id} = this.state;
        var dulieu = this.props.news.data;
        var categories = this.props.categories;
       var cates = this.props.cates.data;

        return (
            <Fragment>
                <ContentLeft news={id ? categories : dulieu}/>
                <div className="col-lg-4">
        <div className="sidebar">
          {/* Categories */}
          <ContentRight cates = {cates} showList={this.showList}/>
        </div>
      </div>
                
            </Fragment>
        )
    }

    showList = (id) =>{
        this.setState({
            id : id 
        });
        this.props.getListNewBycategory(id);
   
    }
}

const mapStateToProps = state => {
    return {
        news : state.news,
        cates : state.cates,
        categories : state.categories
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News);
