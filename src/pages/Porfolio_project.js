import React, {Fragment} from 'react'
import './Portfolio.css'
import github_logo_inactive from '../static/GitHub_Logo.png';
import github_logo_active from '../static/GitHub_Logo_White.png';
import PropTypes from 'prop-types'


class Project extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			github_logo: github_logo_inactive
		}
	}

	render(){
		return(
			<Fragment>
				<div className = "portfolio-project">
		    			<h3>{this.props.name}</h3>
		    			<p>{this.props.about}</p>
		    			{this.props.github_link && <a href = {this.props.github_link}><img src={this.state.github_logo} alt = "Github" 
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
		    			
		    			<a href = {this.props.link}>
		    				Link to Project 
		    			</a>
		    			
		    		</div>
			</Fragment>
		)
	}
}

Project.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string,
	about: PropTypes.string, 
}

export default Project 