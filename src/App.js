import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './App.scss';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
    <Fragment>
      <Navbar/>
   </Fragment>
    </Router>
 );
}

export default App;
