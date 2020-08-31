import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const logo = '../static/logo.ico';
class Navbar extends React.Component{
  render(){
		return(
			<div className = "navbar-container">
				<h3 className = "navbar-logo">Piero Panariello</h3>
					<ul className = "navbar-navlist">
						<li className = "navbar-navlink">
							<Link className = "navbar-routerlink" to = '/'>Home</Link>
						</li>
						<li className = "navbar-navlink">
							<Link className = "navbar-routerlink" to = '/portfolio'>Portfolio</Link>
						</li>
						<li className = "navbar-navlink">
							<Link className = "navbar-routerlink" to = '/contact'>Contact</Link>
						</li>
					</ul>
			</div>
  );
	}
};

export default Navbar 
