import React, { Component } from 'react';

import HomeBg from '../images/backgrounds/LinesPNG.png';

import '../styles/Home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row text-center mt-5">
          <div className="offset-lg-3 col-sm-12 col-sm-12 col-md-12 col-lg-6">
            <h1 className="h1 text-success">
              Karishma Joshi
            </h1>

            <h4 className="mt-4">
              LAF Olmsted Scholar
            </h4>
            <h4>
              Landscape Architecture | Planning and Urban Design
            </h4>

            <p className="lead mt-5">
              I am an Architect and an aspiring Landscape Designer with a goal to enhance the way people interact with the spaces they spend the most time in. My inspiration comes from urban cityscapes and my designs imbue beauty, flexibility, and purpose.
              Let's connect and collaborate!
            </p>
          </div>
        </div>
        <div className="bg-abstract" style={{backgroundImage: "url(" + HomeBg + ")"}}>
        </div>
      </div>
    );
  }
}

export default Home;
