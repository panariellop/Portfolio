import React, {Fragment} from 'react'
import './Portfolio_project.styles.css'
import github_logo_inactive from '../static/GitHub_Logo.png';
import github_logo_active from '../static/GitHub_Logo_White.png';
import PropTypes from 'prop-types'
import Gallery from '../components/Gallery.js'


class Project extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			github_logo: github_logo_inactive,
			show_gallery: false,
			gallery_index: 0,
			showDetails: false,
		}
		this.handleGallery = this.handleGallery.bind(this)
		this.handleShowDetails = this.handleShowDetails.bind(this)
	}

	handleGallery(i){
		this.setState({
			show_gallery: !this.state.show_gallery,
			gallery_index : i
		})
	}

	handleShowDetails(){
		this.setState({
			showDetails: !this.state.showDetails
		})
	}



	render(){
		return(
			<Fragment>
				<div className = "portfolio-project">
						<div className = "portfolio-project-header">
			    			<i><h3>{this.props.name}</h3></i>
			    			<button onClick = {this.handleShowDetails}>
			    			{this.state.showDetails ? "Hide" : "More"}
			    			</button>
		    			</div>

		    			<div className = "portfolio-project-wrapper">

	    				<div className = {"portfolio-project-details-" + this.state.showDetails.toString()}>
	    				<p><strong>About: </strong>{this.props.about}</p>
						{this.props.issues && <p>
							<strong>Common Issues I Encountered: </strong>{this.props.issues}
						</p>}

							<div className = 'portfolio-project-technologies'>
							<ul>
								{this.props.technologies.map((e, i)=> {
									return (
										<li key = {i}>{this.props.technologies[i]}</li>
									)
								})}
							</ul>
						</div>

		    			{this.props.github_link && <a target="_blank" rel="noopener noreferrer" href = {this.props.github_link}><img src={this.state.github_logo} alt = "Github"
		    				onMouseEnter= { () => {
		    					this.setState({
		    						github_logo: github_logo_active
		    					})
		    				}}
		    				onMouseOut = { () => {
		    					this.setState({
		    						github_logo: github_logo_inactive
		    					})
		    				}}
		    			/></a>}

		    			{this.props.link &&
								<a target="_blank" rel="noopener noreferrer" href = {this.props.link}>
			    				Link to Project
			    			</a>}
			    		<hr/>
			    		</div>
						<div className = "screenshots-container">
						{this.props.screenshots &&
							this.props.screenshots.map((e,i)=>{
								return(
									<li className = "screenshots" key = {i}><img onClick = {()=>{this.handleGallery(i)}} alt = 'screenshot' src = {this.props.screenshots[i]}></img></li>
								)
							})
						}
						</div>

						<div className = "portfolio-gallery-container">
							{this.state.show_gallery &&
								<Gallery index = {this.state.gallery_index} handler = {this.handleGallery} screenshots = {this.props.screenshots}/>
							}
						</div>
						</div>



		    		</div>
			</Fragment>
		)
	}
}



Project.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string,
	about: PropTypes.string,
	technologies: PropTypes.arrayOf(PropTypes.string),
	screenshots: PropTypes.arrayOf(PropTypes.string),
	tags: PropTypes.arrayOf(PropTypes.string), 
}

export default Project
