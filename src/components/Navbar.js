import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './Navbar.css';
const logo = '../static/logo.ico';
const navbar = () => {
  return(
    <div className = "navbar_container">
      <h3 className = "logo">Piero Panariello</h3>
        <ul className = "nav">
          <li className = "navLink">
            <Link to = '/'>Home</Link>
          </li>
          <li className = "navLink">
            <Link to = '/contact'>Contact</Link>
          </li>
          <li className = "navLink">
            <Link to = '/portfolio'>Portfolio</Link>
          </li>
        </ul>
    </div>
  );

};

export default navbar 
