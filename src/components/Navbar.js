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
      this.handleChange = this.handleChange.bind(this)
  }


    handleChange(e){
        this.setState({
            active_pane: e.target.name
        })

    }


  render(){
        const active_link = {
            textDecoration: "line-through"
        }

      return(
          <Fragment>
          <Router>
            <div className = "navbar">
                <div className = "menu">
                    <ul>
                        <li><Link
                                style = { this.state.active_pane === "home" ? active_link : null}
                                to = "/"
                                className = "link"
                                onClick = {this.handleChange}
                                name = "home"
                        >home</Link></li>
                        <li><Link
                                 style = { this.state.active_pane === "portfolio" ? active_link : null}
                                 to = "/portfolio"
                                 className = "link"
                                 name = "portfolio"
                                 onClick = {this.handleChange}
                                 >portfolio</Link></li>
                        <li><Link
                                style = { this.state.active_pane === "contact" ? active_link : null}
                                 to = "/contact"
                                 className = "link"
                                 name = "contact"
                                 onClick = {this.handleChange}
                                 >contact</Link></li>
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
