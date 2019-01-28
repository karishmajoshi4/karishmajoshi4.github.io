import React, { Component } from 'react';

import HomeTreesBg from '../images/backgrounds/home-page-trees-buildings.png';

import '../styles/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="bg-building" style={{backgroundImage: "url(" + HomeTreesBg + ")"}}>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3"></div>
          <div className="col-sm-12 col-sm-12 col-md-12 col-lg-9">
            <div className="hello">
              <span>H</span><span className="small">ello!</span>
            </div>
            <div className="hello-ext-info">
              <p>I am Karishma Joshi. I am an Architect and a Design professional.</p>
              <p>I am pursuing a masters in Landscape Architecture from Texas A&M University, College Station, Texas.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
