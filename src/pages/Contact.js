import React from 'react';
import './Contact.css';
const contact = () => {

	return (
	<div className = "contact-container">

      <div className = "contact-header">
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me on any one of these platforms.</p>
      </div>

      <div className = "contact">
      	<h3>Email</h3>
      	<p>pierodpanariello@gmail.com</p>
      </div>
      <hr/>
      <div className = "contact">
            <h3>Linked-In</h3>
            <p><a href = "https://www.linkedin.com/in/piero-panariello-a460a81b0">Piero Panariello</a></p>
      </div>
	</div>
	);
};

export default contact
