import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import routes from './rounters';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  render(){
      return (
         <Router>
        <div className="super_container">
            <Header/>
        <div className="courses">
          <div className="container">
            <div className="row">
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </div>
         </Router>
       );
  }
  
showContentMenus = (rountes) => {
  var result = null;
  if (routes.length > 0) {
      result = routes.map((route, index) => {
          return (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
              />
          );
      });
  }
  return <Switch>{result}</Switch>;
}
}


export default App;
