import React, {Component} from 'react';

class NewCategory extends Component {
  render(){
      return (
        <div className="sidebar_section">
        <div className="sidebar_section_title">Categories</div>
        <div className="sidebar_categories">
          <ul className="categories_list">
            <li><a href="#" className="clearfix">Art &amp; Design<span>(25)</span></a></li>
            <li><a href="#" className="clearfix">Business<span>(10)</span></a></li>
            <li><a href="#" className="clearfix">IT &amp; Software<span>(22)</span></a></li>
            <li><a href="#" className="clearfix">Languages<span>(12)</span></a></li>
            <li><a href="#" className="clearfix">Programming<span>(18)</span></a></li>
          </ul>
        </div>
      </div>
       );
  }
}


export default NewCategory;
