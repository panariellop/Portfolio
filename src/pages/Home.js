import React, {Fragment} from 'react';
import './Home.css';
import piero_logo from '../static/pieroLogo.png'; 

const Home = () =>{

  return (
    <Fragment>

    <div className = "home-biopic">
        <img style = {{width: "150px", height: "150px"}}alt = "name logo" src={piero_logo}></img>
    </div>


    <div className = "home-container">
      <div className = "home-about">
      <h3>About Me</h3>
        <p>
        Self-starter with an engineering mindset. Full stack web developer with experience in React, Node.js, and Express.js. I have a computer science background in Python3. 
        </p>
      </div>
      <div className = "home-skills">
      <h3>Skills</h3>  
        <ul>
          <li><span role = "img" aria-label = "python">🐍</span>Python</li>
          <li><span role = "img" aria-label = "react">⚛️</span>React</li>
          <li><span role = "img" aria-label = "nodejs">🇳</span>Node.js</li>
          <li><span role = "img" aria-label = "expressjs">🇪</span>Express.js</li>
          <li><span role = "img" aria-label = "django">🇩</span>Django</li>
          <li><span role = "img" aria-label = "mongodb">Ⓜ️</span>MongoDB</li>
        </ul>
      </div>
      <div className = "home-bio">
      <h3>Bio</h3>
      	<p>I am presently attending the College of William and Mary persuing a B.S. in Computer Science and Physics.</p>
    	<br/>
	<p>Growing up, my younger self always had an Idea for a new project related to engineering and computer science. Whether it was programming an Arduino Uno, building a rocket nozzle, designing a wind tunnel, or creating a game in Unity, I loved the challenge and freedom programming and engineering gave me.</p>
    	<br/>
    	<p>The combination of studying Computer Science and Physics continues to broaden the depth of my techical and analytical skills. I look forward to investing my talents and knowledge to effect positive change in the world and the lives of others.</p>
      </div>
      
    </div>
    </Fragment>
  )

};

export default Home 
