import React, {Fragment} from 'react';
import './Portfolio.css'
import Project from './Porfolio_project.js'

class portfolio extends React.Component{


	render(){
		return (
		    <Fragment>
		    	<div className = 'portfolio-header'>
		    		<h1>Portfolio</h1>
		    		<p>All projects with a Github link allow you to view the source code.</p>
		    	</div>
		    	<div className = "portfolio-projects-wrapper">

				<Project name = "Tee Time Alerter"
						github_link = "" link = "https://teealert.herokuapp.com/"
						issues = "In order to make this app functional, an automated script was used to check the golf club's API for available tee times against the user requests that were being processed. All incoming user requests were sent to a database, which could then be accessed by my automated script."
						technologies = {["React/Bootstrap", "Node.js", "MongoDB", "Express.js", "Heroku"]}
		    			about = "This application uses the Miacomet Golf Course API to identify available tee times and alerts the user via email when a tee time is found that matches their requirements."/>

						<hr/>

		    		

						<Project name = "Workout"
						github_link = "" link = ""
						issues = "This application was a complex project with many moving parts. The largest issues encountered involved security of the application and user data. I relied heavily on industry standards to ensure my application and any data transfered was secure and was recieved by the correct user."
						technologies = {["React", "Node.js", "MongoDB", "Express.js", "Heroku"]}
		    			about = "This application was created to solve a problem I encounter every day: I love weightlifting, but I find it difficult to track my progress through analytical data. Using pen and paper is extremely versitile, but creating graphics is extremely time consuming. While Google Sheets was not built for this type of application, it was useful since my data could be accessed by multiple devices. Other applications suited to solve this problem always had the same problem: they were not customizable and lacked the analytical features that I found were useful to track my progress. My application targets all of these issues and improves upon the features found in other applications."/>
						

						<hr/>

		    		

						<Project name = "Github Finder" 
						github_link = "https://github.com/panariellop/github_finder" link = "https://panariellopgithubfinder.netlify.app"
						technologies = {["React", "Netlify"]}
						about = "This application was created with help from Brad Traversy's Udemy introduction to React and Node course. This application aided my understanding of RESTful APIs and how to connect a backend system to a frontend framework like React."/>

						<hr/>

						<Project name = "This Website"
						github_link = "https://github.com/panariellop/Portfolio" link = "/"
						technologies = {["React", "Node.js", "Netlify"]}
		    			about ="This application was developed at the request of very enthusiastic golfers, to automatically alert them to available tee times. In the time of COVID 19 this app was used extensively because of the high demand for outdoor activities."/>
		    		


		    	</div>
			</Fragment>
		)
	}

};

export default portfolio
