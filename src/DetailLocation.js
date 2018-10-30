import React, { Component } from 'react';
import './App.css';

import bookmark_blank from './images/icons/bookmark_blank.png';
import share from './images/icons/share.png';


class DetailLocation extends Component {
  

  render() {
    return (
      <div className="Content">
        <img src={this.props.image} className="Content-Img" alt="this.props.altText" />
        <div className="InfoBox">
          <div className="Floating-icons-container">
            <img src={bookmark_blank} className="Floating-icon" alt="Bookmark Button" />
            <img src={share} className="Floating-icon" alt="Share Button" />
          </div>
          <div className="Scroll-info">
            <img src={this.props.description} className="Scroll-info-img" alt="Scroll Info" />
          </div>
        </div>
      </div>
    );
  }
}

export default DetailLocation;
