import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';


function App() {

  return (
    <Router>
    <Fragment>
      <Navbar/>
    <div className = 'app-container'>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Route exact path = "/portfolio" component = {Portfolio}/>
      </Switch>
    </div>
    </Fragment>
    </Router>
 );
}

export default App;
