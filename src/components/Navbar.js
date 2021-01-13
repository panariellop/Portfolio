import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      active_pane: "home", 
      showMenu: false, 
    }
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu(){
    this.setState({
      showMenu: !this.state.showMenu
    })
  }



  render(){

    const active_style = {
      color: 'blue'
    }



		return(
			<div className = "navbar-container">
				<h3 className = "navbar-logo">Piero Panariello</h3>
					<ul className = {"navbar-navlist-" + (this.state.showMenu ? "false" : "true")}>
						<li className = "navbar-navlink">
							<Link style = {this.state.active_pane === 'home'? active_style: null} onClick = {() => {
                  this.setState({
                    active_pane: 'home'
                  })
                }} className = "navbar-routerlink" to = '/'>Home</Link>
						</li>
						<li className = "navbar-navlink">
							<Link style = {this.state.active_pane === 'portfolio'? active_style: null} onClick = {() => {
                  this.setState({
                    active_pane: 'portfolio'
                  })
                }} className = "navbar-routerlink" to = '/portfolio'>Portfolio</Link>
						</li>
						<li className = "navbar-navlink">
							<Link style = {this.state.active_pane === 'contact'? active_style: null} onClick = {() => {
                  this.setState({
                    active_pane: 'contact'
                  })
                }} className = "navbar-routerlink" to = '/contact'>Contact</Link>
						</li>
					</ul>
          <button onClick = {this.showMenu}>+</button>
          <div className = {"navbar-navmenu-" + this.state.showMenu}>
            <ul className = "navbar-navmenu-container">
                <li className = "navbar-menulink">
                <Link style = {this.state.active_pane === 'home'? active_style: null} onClick = {() => {
                    this.setState({
                      showMenu: false, 
                      active_pane: 'home'
                    })
                  }} className = "navbar-routerlink" to = '/'>Home</Link>
              </li>
              <li className = "navbar-menulink">
                <Link style = {this.state.active_pane === 'portfolio'? active_style: null} onClick = {() => {
                    this.setState({
                      showMenu: false, 
                      active_pane: 'portfolio'
                    })
                  }} className = "navbar-routerlink" to = '/portfolio'>Portfolio</Link>
              </li>
              <li className = "navbar-menulink">
                <Link style = {this.state.active_pane === 'contact'? active_style: null} onClick = {() => {
                    this.setState({
                      showMenu: false, 
                      active_pane: 'contact'
                    })
                  }} className = "navbar-routerlink" to = '/contact'>Contact</Link>
              </li>
            </ul>
          </div>
			</div>
  );
	}
};

export default Navbar
