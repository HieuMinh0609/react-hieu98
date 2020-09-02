import React, { Component, Fragment } from 'react';
import '../../App.css';
import { Route, Link } from 'react-router-dom';

const MenuLinks = [
  {
     name : 'Giới thiệu',
     to : '/home/introduce',
     exac : false
  },
  {
    name : 'Khóa học',
    to : '/home/courses',
    exac : false 
 },
 {
  name : 'Cuộc thi',
  to : '/home/competitions',
  exac : false 
},
{
name : 'Tin tức',
to : '/home/news',
exac : false
},
{
name : 'Sự kiện',
to : '/home/events',
exac : false
} ,
{
name : 'Hỗ trợ',
to : '/home/support',
exac : false
}
];

const MenuLink = ({label,to,exac}) => {
return (
    <Route
     path={to}
     exac = {exac}
     children = {({match}) => {
       var isActive = match ? 'active' : '';
       return (
        <li className={isActive}>
            <Link to={to}>
                {label}
            </Link>
        </li>
    );
     }}
    >
    </Route>
);
}


class Header extends Component {

  
  render(){
      return (
         <Fragment>
       <header className="header">
        {/* Header Content */}
        <div className="header_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                  <div className="logo_container">
                    <a href="#">
                      <div className="logo_text">VN<span>Post</span></div>
                    </a>
                  </div>
                  <nav className="main_nav_contaner ml-auto">
                    <ul className="main_nav">
                       {this.showLinks(MenuLinks)}
                    </ul>
                    <div className="hamburger menu_mm">
                      <i className="fa fa-bars menu_mm" aria-hidden="true" />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>		
      </header>
     
      <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
        <div className="menu_close_container"><div className="menu_close"><div /><div /></div></div>
        <nav className="menu_nav">
          <ul className="menu_mm">
            <li className="menu_mm"><a href="index.html">Home</a></li>
            <li className="menu_mm"><a href="#">About</a></li>
            <li className="menu_mm"><a href="#">Courses</a></li>
            <li className="menu_mm"><a href="#">Blog</a></li>
            <li className="menu_mm"><a href="#">Page</a></li>
            <li className="menu_mm"><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
         </Fragment>
       );
  }

  showLinks = (menus) => {
    var result = null;
    if(menus.length > 0){
        result = menus.map((menu, index) => {
            return (
                <MenuLink 
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    exac={menu.exact}
                />
            );
        });
    }
    return result;
}

}
export default Header;
