import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/KJ Logo.png';

import '../styles/Navbar.scss';
import ResumeLink from '../docs/KJ-Resume 2019.pdf';

class Navbar extends Component {
  render() {
    return (
      <div className="custom-navbar">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 text-center">
            <Link to="/" className="page-title">
              <img src={Avatar} className="img-fluid w-25" />
            </Link>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 text-right">
            <Link to="/about" className="navigation-link">About</Link>
            <a href="https://www.behance.net/gallery/90304493/Portfolio-of-Work-2017-2020" className="navigation-link">Work</a>
            <Link to="/sketchpressions" className="navigation-link">Sketchpressions</Link>
            <a href={ResumeLink} target="_blank" className="navigation-link">Resume</a>
            <a href="https://drive.google.com/open?id=0BypWPAmJdsyuMlV3TUpiRFAyaS0ybW1wT1hXOEQ4X3BPNDZ3" target="_blank" className="navigation-link">Architecture Portfolio</a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-1">
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
