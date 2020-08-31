import React, {Fragment} from 'react';
import './Home.css';

const Home = () =>{
  return (
    <Fragment>

    <div className = "home-biopic">
        <h1>Piero Panariello</h1>
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
          <li><span role = "img" aria-label = "mongodb">Ⓜ️</span>MongoDB</li>
          <li><span role = "img" aria-label = "heroku">🇭</span>Heroku</li>
        </ul>
      </div>
      <div className = "home-bio">
      <h3>Bio</h3>
      <p>
      I am a student at the College of William and Mary, where I am majoring in 
      Computer Science and minoring in Physics. I love developing applications
      that can impact peoples lives and make a meaningful difference. 
      </p>
      </div>
      
    </div>
    </Fragment>
  )

};

export default Home 
