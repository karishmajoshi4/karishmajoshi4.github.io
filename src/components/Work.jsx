import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import PortfolioCarousel from './PortfolioCarousel.jsx';

import '../styles/Work.scss';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselOpen: false
    }
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="row images-container">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div className="overlay with-bg-img academic-img">
              <div className="overlay-title">
                <span>Academic</span>
              </div>
              <div className="overlay-text">
                <h5>Design Philosophy</h5>
                <span>
                  In the past five years of learning architecture, the extensive design studios and research-oriented activities have helped me develop a sensitive, pragmatic and functional approach towards design. I have always believed that buildings share a relationship with their surroundings as well as nature around. Built masses do not stand in isolation but should be in tune with the surrounding natural context. Hence in every design proposal, I have been keen towards establishing a strong relationship between the built form and the landscape, evolving a holistic landscape and building design.
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div className="overlay with-bg-img professional-img">
              <div className="overlay-title">
                <span>Professional</span>
              </div>
              <div className="overlay-text">
                <span>When I envision my professional career as a Landscape Architect, my primary aspiration is to contribute to exemplary works of architecture, working with accomplished professionals in the field of Landscape Architecture and Technology. On a personal level, I am of the opinion that architecture greatly affects the quality of societal life. I wish to make a significant contribution to the landscape architectural fraternity and establish concepts that will be environmentally sustainable and socially pragmatic.</span>
                <br /><br />
                <span>
                  WORK EXPERIENCE (2017-2019)
                  <br />
                  1. Callison RTKL. Inc. Dallas , TX
                  <br />
                  <small>Landscape Architecture Intern | Summer 2018</small>
                  <br />
                  2. Ravi Varsha Gavandi Landscape Architects, Pune, India
                  <br />
                  <small>Junior Architect | January-July 2017</small>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div className="overlay with-bg-img sketchlogue-img">
              <div className="overlay-title">
                <span>Sketchlogue</span>
              </div>
              <div className="overlay-text">
                <span>
                  Sketching has always been a medium of comfort. Since the first year of being into architecture, I have been recording my observations, some visuals that seemed interesting or any unique and intellectual construction details in the form of sketches. Any tour or excursion is complete only when it finds its place in the “sketchlogue” as I call it. When I roam around visiting different places and appreciating the architecture, I feel the experience is cherished in the form of sketches.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={"row mt-2 " + (this.state.carouselOpen ? "d-block" : "d-none")}>
          <div className="col-md-12">
            <PortfolioCarousel activeCarouselTab={this.state.activeCarouselTab} />
          </div>
        </div>

        <div className={"row mt-2 " + (this.state.carouselOpen ? "d-block" : "d-none")}>
          <div className="col-md-12">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn">Academic</button>
              <button type="button" className="btn">Professional</button>
              <button type="button" className="btn">Sketchlogue</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
