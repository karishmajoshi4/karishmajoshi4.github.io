import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import '../styles/Work.scss';
import PortfolioCarousel from './PortfolioCarousel.jsx';

class Work extends Component {

  render() {
    return (
      <div>
        <Navbar />

        <div className="row">
          <div className="col-xs-12 col-md-2"></div>
          <div className="col-md-8">
            <PortfolioCarousel />
          </div>
          <div className="col-xs-12 col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default Work;
