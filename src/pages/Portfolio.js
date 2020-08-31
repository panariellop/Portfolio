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
						github_link = "" link = "/"
						technologies = {["React", "Node.js"]}
		    		about ="I decided to use React for this project because of its
						superior component handling and control over the user interface. "/>
		    		<hr/>

						<Project name = "Workout"
						github_link = "" link = ""
						technologies = {["React", "Node.js", "MongoDB", "Express.js"]}
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

		    		<Project name = "Tee Time Alerter"
						github_link = "" link = ""
						technologies = {["React", "Node.js", "MongoDB", "Express.js"]}
		    		about = "This application uses the Miacomet Golf Course API to
						identify available tee times and alerts the user via email when a
						tee time is found that matches their requirements. "/>
		    	</div>
			</Fragment>
		)
	}

};

export default portfolio
