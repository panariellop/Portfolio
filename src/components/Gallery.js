import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import './Gallery.css'
class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            current_index: this.props.index
        }
    }

    handleNextImage(add_index){
        var next_index = (((this.state.current_index+add_index) % this.props.screenshots.length)+this.props.screenshots.length)%this.props.screenshots.length; 
        this.setState({
            current_index: next_index
        })
    }

    handleClose(){

    }

    render(){
        return(
            <Fragment>
                <div className = "gallery-container">
                    <div className = "gallery-container-inner">
                    <div className = "gallery-controls-del">
                        <button className = "gallery-controls-del" onClick = {this.props.handler}>X</button>
                    </div>
                    <div className = "gallery-current-screenshot">
                        <img src = {this.props.screenshots[this.state.current_index]} alt = "screenshot"></img>
                    </div>
                    <div className = "gallery-controls">
                    <div className = "gallery-controls-nav">
                        <button onClick = {()=> {this.handleNextImage(-1)}}>← Previous</button>
                        <button style = {{float:"right"}} onClick = {()=> {this.handleNextImage(1)}}>Next →</button>
                    </div>
                    
                    </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

Gallery.propTypes = {
    screenshots: PropTypes.arrayOf(PropTypes.string)
}

export default Gallery