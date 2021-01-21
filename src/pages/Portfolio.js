import React, {Fragment} from 'react';
import './Portfolio.css'
import Project from './Porfolio_project.js'

//screenshots import
import ghfsc1 from '../static/screenshots/ghfsc1.png';
import ghfsc2 from '../static/screenshots/ghfsc2.png';
import ghfsc3 from '../static/screenshots/ghfsc3.png';

import ttasc1 from '../static/screenshots/ttasc1.png';

import wsc1 from '../static/screenshots/wsc1.png';
import wsc2 from '../static/screenshots/wsc2.png';
import wsc3 from '../static/screenshots/wsc3.png';
import wsc4 from '../static/screenshots/wsc4.png';
import wsc5 from '../static/screenshots/wsc5.png';

import minimescreenshot from '../static/screenshots/minimeimg.png';

class portfolio extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			filter: 'all' //filter tag: all, frontend, backend, data_structures, machine learning
		}
		this.handleFilter = this.handleFilter.bind(this)
	}

	handleFilter(){
		/*
			1) Show a dropdown menu
			2) Shows the different tags that the user can explore
			3) Filter the projects that just have that tag
		*/
	}


	render(){
		return (
		    <Fragment>
		    	<div className = 'portfolio-header'>
		    		<h1>Portfolio</h1>
		    		<p>All projects with a Github link allow you to view the source code.</p>
		    	</div>
		    	<div className = "portfolio-projects-wrapper">

				<Project name = "Minime URL"
						github_link = "" link = "https://minime-url.herokuapp.com/"
						issues = "I was able to make the application secure by including rate limiters to the API to avoid possible misuse."
						about = "This is a simple URL shortener built with Django. Django offers a high degree of flexibility when it comes to designing the API, which was crutial to this application. To serve the front-end, I decided to use React to handle state and components, and Webpack to package it. Heroku was chosen to host the application because of its ease of use and great free tier options."
						technologies = {["React", "Webpack", "Django", "Heroku", "Amazon RDS"]}
						screenshots = {[minimescreenshot]}
						tags = {['all', 'frontend', 'backend']}
				/>

				<Project name = "Workout"
						github_link = "https://github.com/panariellop/workout" link = ""
						issues = "This application was a complex project with many moving parts. The largest issue I encountered involved security of the application and user data. I relied heavily on industry standards to ensure my application and any data transferred was secure and was received by the correct user. I learned how JSON web tokens functioned, and how they are used to provide a secure connection method to the API."
						technologies = {["React", "Node.js", "MongoDB", "Express.js", "Heroku"]}
		    			about = "One of my passions is weightlifting, however, I found it difficult to track my progress intermittently stopping to use pen and paper. Although Google Sheets was not built for this type of application, it was useful since my data could be accessed on multiple devices. Other applications suited to solve this problem had the same issue in common: they were not customizable and lacked the analytical features useful in tracking my progress. My application resolved these issues and improved the features found in other applications. I implemented a complete, secure, RESTful API in this application and used MongoDB Atlas to store user information in the cloud allowing my information to be accessed everywhere. My app has a unique frontend interface for complete control over my data."
						screenshots = {[wsc1, wsc2, wsc3, wsc4, wsc5]}
						tags = {['all']}
						/>

				<Project name = "Tee Time Alerter"
						github_link = "" link = "https://teealert.herokuapp.com/"
						issues = "To facilitate app functionality, an automated script was used to check the golf club's API for available tee times meeting user requirements. Fairness was an issue I had to solve, and I decided the most fair way to distribute requests was a first-come-first-serve method. All incoming user requests were sent to a database accessed by my automated script at discrete time intervals."
						technologies = {["React/Bootstrap", "Node.js", "MongoDB", "Express.js", "Heroku"]}
		    			about = "This application interfaces with a golf club’s API to identify available tee times in real time and alerts the user via email, when a tee time is available matching their pre-set requirements. Particularly in the time of COVID 19, this app was extensively used due to the high demand for outdoor activities. I built a backend system in Express.js to facilitate requests and automate tasks. This was connected to a React frontend to allow users to input data."
						screenshots = {[ttasc1]}
						tags = {['all']}
						/>


						<Project name = "Github Finder"
						github_link = "https://github.com/panariellop/github_finder" link = "https://panariellopgithubfinder.netlify.app"
						technologies = {["React", "Netlify"]}
						about = "This application was created with help from Brad Traversy's Udemy introduction to React and Node course. This application aided my understanding of RESTful APIs and how to connect a backend system to a frontend framework like React."
						screenshots={[ghfsc1, ghfsc2, ghfsc3]}
						tags = {['all']}
						/>



						<Project name = "ppanariello"
						github_link = "https://github.com/panariellop/Portfolio" link = "/"
						technologies = {["React", "Node.js", "Netlify"]}
		    			about ="This application was built using react for state management and component handling. The application was deployed using Netlify."
		    			tags = {['all']}
		    			/>
						



		    	</div>
			</Fragment>
		)
	}

};

export default portfolio
