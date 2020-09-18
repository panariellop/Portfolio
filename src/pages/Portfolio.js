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

		    		<Project name = "This Website"
						github_link = "https://github.com/panariellop/Portfolio" link = "/"
						technologies = {["React", "Node.js", "Netlify"]}
		    			about ="I decided to use React for this project because of its
						superior component handling and control over the user interface. "/>
		    		<hr/>

						<Project name = "Workout"
						github_link = "" link = ""
						issues = "This application was a complex project with many moving parts. 
						The largest issues I encountered involved security of the application and 
						user data. I relied heavily on industry standards to ensure my application and
						any data transfered was secure and was recieved by the correct user."
						technologies = {["React", "Node.js", "MongoDB", "Express.js", "Heroku"]}
		    			about = "I created this application to solve a problem I encounter
						every day: I love working out in the gym, but I find it difficult to
						track my progress through analytical data. Using pen and paper is
						extremely versitile, but creating graphics is extremely time consuming.
						Using an application like Google Sheets is great for making graphics,
						but the versatility is severely lacking. Other applications suited
						to solve this problem always had the same problem: they were not
						customizable and lacked the analyticalfeatures that I found were
						useful to track my progress. My application targets all of these
		    			issues and improves upon the features found in other applications."/>
						<hr/>

						<Project name = "Todo"
						github_link = "https://github.com/panariellop/todo" link = ""
						issues = "While this application is bare-bones, I did run into the issue of managing state
						between multiple components. If I were to expand the application further, I would consider
						using a state manager such as Redux. "
						technologies = {["React", "Netlify"]}
						about = "This application is a basic todo tracker. It uses local storage to remember
						user input and to save information between sessions. Because all todos 
						are stored localy, this means that the information cannot be accessed in a different 
						browser from a different device."/>

						<hr/>

		    		<Project name = "Tee Time Alerter"
						github_link = "" link = "https://teealert.herokuapp.com/"
						issues = "In order to make this app functional, I had to employ
						an automated script that would check the API for available tee times
						against the user requests that were being processed.
						I eventually settled on storing all incoming user requests to a database,
						which could then be accessed by my automated script."
						technologies = {["React/Bootstrap", "Node.js", "MongoDB", "Express.js", "Heroku"]}
		    			about = "This application uses the Miacomet Golf Course API to
						identify available tee times and alerts the user via email when a
						tee time is found that matches their requirements."/>

						<hr/>

						<Project name = "Github Finder" 
						github_link = "https://github.com/panariellop/github_finder" link = "https://panariellopgithubfinder.netlify.app"
						technologies = {["React", "Netlify"]}
						about = "This application was created with help from Brad Traversy's Udemy introduction to React and Node course."/>


		    	</div>
			</Fragment>
		)
	}

};

export default portfolio
