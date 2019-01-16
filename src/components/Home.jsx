import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

import '../styles/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="bg-building">
        <Navbar />

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="hello">
              <span>H</span><span className="small">ello!</span>
            </div>
            <div className="hello-ext-info">
              <p>I am Karishma Joshi. Landscape Architect and a Design professional.</p>
              <p>I am pursuing a masters in Landscape Architecture from Texas A&M University, College Station, Texas.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
