import React, { Component } from 'react';
import './App.css';



class Map extends Component {
    constructor(props){
        super(props);
        this.state={
            imgSrc: this.props.idle_image,
        }
    }

    render() {
        return (

            <div className="Locations" onClick = {this.props.onClick}>
                <img className="Location-Img" onMouseOver={(ev) => this.setState({imgSrc:this.props.active_image})} onMouseOut={(ev) => this.setState({imgSrc:this.props.idle_image})} src={this.state.imgSrc} alt={this.props.altText} />
            </div>

        );
    }
}

export default Map;
