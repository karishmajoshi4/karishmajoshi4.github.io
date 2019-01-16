import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="row pt-4">
        <div className="col-md-2 text-center">
          <Link to="/" className="page-title">KJ</Link>
        </div>
        <div className="col-md-9 text-right">
          <Link to="/about" className="navigation-link">About</Link>
          <Link to="/work" className="navigation-link">Work</Link>
          <Link to="/work" className="navigation-link">Resume</Link>
          <Link to="/work" className="navigation-link">Portfolio</Link>
        </div>
        <div className="col-md-1">
        </div>
      </div>
    );
  }
}

export default Navbar;
