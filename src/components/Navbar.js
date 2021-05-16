import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import hamburger from "../static/hamburger_trans.png"

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
      color: '#DDA74F'
    }
    const inactive_style = {
      color: 'black'
    }
    const container_format_inactive = {
      paddingTop: "10px",
      transition: "0.5s ease-in-out"
    }
    const container_format_active = {
      paddingTop: "0px",
      transition: "0.5s ease-in-out"
    }



		return(
			<div className = "navbar-container" style = {this.state.showMenu? container_format_active : container_format_inactive}>
				<h3 className = "navbar-logo">Piero Panariello</h3>
          <button onClick = {this.showMenu}><img alt = "navigation" src = {hamburger} width = "30px" height = "30px"/></button>
          <div className = {"navbar-navmenu-" + this.state.showMenu}>
            <ul className = "navbar-navmenu-container">
              
              <li className = "navbar-menulink">
                <Link style = {this.state.active_pane === 'home'? active_style: inactive_style} onClick = {() => {
                    this.setState({
                      showMenu: false, 
                      active_pane: 'home'
                    })
                  }} className = "navbar-routerlink" to = '/'>Home</Link>
              </li>
              <li className = "navbar-menulink">
                <Link style = {this.state.active_pane === 'portfolio'? active_style: inactive_style} onClick = {() => {
                    this.setState({
                      showMenu: false, 
                      active_pane: 'portfolio'
                    })
                  }} className = "navbar-routerlink" to = '/portfolio'>Portfolio</Link>
              </li>
              <li className = "navbar-menulink">
                <Link style = {this.state.active_pane === 'contact'? active_style: inactive_style} onClick = {() => {
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
