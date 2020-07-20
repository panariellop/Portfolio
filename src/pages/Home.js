import React, {Fragment} from 'react';
import './Home.css';

const Home = () =>{
  return (
    <div className = "home_container">
      <div className = "about">
      <h3>About Me:</h3>
        <p>I am a full stack web developer with experience in React, Node.js, and Express.js.</p>
      </div>
      <div className = "skills">
      <h3>Skills</h3>  
        <ul>
          <li>Python</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  )

};

export default Home 
