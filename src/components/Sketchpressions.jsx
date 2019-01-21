import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

import Timelapse2 from '../videos/timelapse-1.mp4';
import Timelapse1 from '../videos/timelapse-2.mp4';
import Timelapse3 from '../videos/timelapse-3.mp4';

import "../styles/Sketchpressions.scss";

class Sketchpressions extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="row video-container justify-content-lg-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 video-item">
            <video className="w-100" loop controls>
              <source src={Timelapse1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 video-item">
            <video className="w-100" loop controls>
              <source src={Timelapse2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 video-item">
            <video className="w-100" loop controls>
              <source src={Timelapse3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default Sketchpressions;
