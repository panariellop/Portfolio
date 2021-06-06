import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';
import Contact from '..//pages/Contact';
import Portfolio from '../pages/Portfolio';
import Home from '../pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      active_pane: "home", 
    }
  }



  render(){
      return(
          <Fragment>
          <Router>
            <div className = "navbar">
                <div className = "menu">
                    <ul>
                        <li><Link to = "/" className = "link">home</Link></li>
                        <li><Link to = "/portfolio" className = "link">portfolio</Link></li>
                        <li><Link to = "/contact" className = "link">contact</Link></li>
                    </ul>
                </div>
                <div className = "name">
                    <h1>Piero Panariello</h1>
                    <h3>Developer.</h3>
                </div>
                <div className = "content">
                   <Switch>
                    <Route exact path = "/" component = {Home}/>
                    <Route exact path = "/contact" component = {Contact}/>
                    <Route exact path = "/portfolio" component = {Portfolio}/>
                   </Switch>
                </div>
            </div> 
          </Router>
          </Fragment>
      )
  }
};

export default Navbar
