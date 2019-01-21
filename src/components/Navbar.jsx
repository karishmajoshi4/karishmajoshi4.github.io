import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="row pt-4">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 text-center">
          <Link to="/" className="page-title">KJ</Link>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 navigation">
          <Link to="/about" className="navigation-link">About</Link>
          <Link to="/work" className="navigation-link">Work</Link>
          <Link to="/sketchpressions" className="navigation-link">Sketchpressions</Link>
          <a href="https://drive.google.com/open?id=1_WRsssugWmUJcBgL199ntCI9yPOg4FLP" target="_blank" className="navigation-link">Resume</a>
          <a href="https://drive.google.com/open?id=0BypWPAmJdsyuMlV3TUpiRFAyaS0ybW1wT1hXOEQ4X3BPNDZ3" target="_blank" className="navigation-link">Architecture Portfolio</a>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-1">
        </div>
      </div>
    );
  }
}

export default Navbar;
