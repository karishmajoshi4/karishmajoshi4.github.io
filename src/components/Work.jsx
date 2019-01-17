import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import '../styles/Work.scss';

class Work extends Component {

  createImages() {
    var arr = [];
    for (let i = 0; i < images.length; i++) {
      arr.push(
        <div className={"carousel-item text-center " + (i === 0 ? "active" : "")} key={i}>
          <img src={images[i]} alt="portfolio-work-images" />
        </div>
      )
    }
    return arr;
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="row">
          <div className="col-md-12">
            <div id="portfolio-carousel" className="my-3 carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {this.createImages()}
              </div>
              <a className="carousel-control-prev" href="#portfolio-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#portfolio-carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/portfolio-images/', false, /\.(JPG)$/));
export default Work;
