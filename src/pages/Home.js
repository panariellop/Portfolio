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
        I am a full stack web developer with experience in React, Node.js, and Express.js.
        I have a computer science background in Python3. 
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
      <p>
      I am a student at the College of William and Mary, where I am persuing a major in Computer Science and a minor in Physics. Since a young age, I was always working on some computer science project. Whether it was programming an Arduino Uno or creating a game in Unity, I loved the creative freedom and empowerment programming gave me. Studying physics at William and Mary has allowed me to gain a broader understanding the physical nature of our world. It has helped me understand computer science to a greater degree, and has trained me to solve problems with an analytical point of view. Going forward, I look forward to employing my knowledge in computer science and problem solving ability towards projects that will make an impactful difference in the world. 
      </p>
      </div>
      
    </div>
    </Fragment>
  )

};

export default Home 
