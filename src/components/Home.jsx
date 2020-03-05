import React, { Component } from 'react';

import HomeTreesBg from '../images/backgrounds/home-page-trees-buildings.png';

import '../styles/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="bg-building" style={{backgroundImage: "url(" + HomeTreesBg + ")"}}>
        <div className="row text-center mt-5">
          <div className="offset-lg-3 col-sm-12 col-sm-12 col-md-12 col-lg-6">
            <h1 className="h1 text-green">
              Karishma Joshi
            </h1>

            <h5 className="mt-4">
              LAF Olmsted Scholar 2020
            </h5>
            <h5>
              Landscape Architecture | Planning and Urban Design
            </h5>

            <p className="mt-4">
              I am an Architecture Professional and an aspiring Landscape Designer with a goal to
              enhance people’s interaction with the spaces they spend the most time in. My inspiration
              comes from urban cityscapes and my designs imbue beauty, flexibility, and purpose. Let&#39;s
              connect and collaborate!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
