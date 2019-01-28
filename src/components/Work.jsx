import React, { Component } from 'react';
import PortfolioCarousel from './PortfolioCarousel.jsx';

import AcademicBg from '../images/backgrounds/academic.jpg';
import professionalBg from '../images/backgrounds/professional.jpg';
import sketchlogueBg from '../images/backgrounds/sketchlogue.jpg';

import '../styles/Work.scss';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselOpen: false,
      currentActiveTab: "",
      activeCarouselTab: 0
    }

    this.closeCarousel = this.closeCarousel.bind(this);
    this.activateCarousel = this.activateCarousel.bind(this);
  }

  closeCarousel() {
    this.setState({carouselOpen: false});
  }

  activateCarousel(type) {
    var carouselMetaData = {
      academic: 1,
      professional: 27,
      sketchlogue: 43
    }

    this.setState({carouselOpen: true, currentActiveTab: type, activeCarouselTab: carouselMetaData[type]});
  }

  render() {
    return (
      <div>
        <div className={"row justify-content-lg-center images-container " + (this.state.carouselOpen ? "d-none" : "")}>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3" onClick={() => this.activateCarousel("academic")}>
            <div className="overlay with-bg-img academic-img" style={{backgroundImage: "url(" + AcademicBg + ")"}}>
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
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3" onClick={() => this.activateCarousel("professional")}>
            <div className="overlay with-bg-img professional-img" style={{backgroundImage: "url(" + professionalBg + ")"}}>
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
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3" onClick={() => this.activateCarousel("sketchlogue")}>
            <div className="overlay with-bg-img sketchlogue-img" style={{backgroundImage: "url(" + sketchlogueBg + ")"}}>
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

        <div className={"row carousel-container " + (this.state.carouselOpen ? "" : "d-none")}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3"></div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <span className="act-as-link" onClick={this.closeCarousel}>close</span>
            <PortfolioCarousel activeCarouselTab={this.state.activeCarouselTab} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3"></div>
        </div>

        <div className={"row text-center mt-2 mb-4 " + (this.state.carouselOpen ? "d-block" : "d-none")}>
          <div className="col-md-12">
            <div className="btn-group" role="group" aria-label="carousel">
              <button onClick={() => this.activateCarousel("academic")} type="button" className={"btn " + (this.state.currentActiveTab === "academic" ? "active" : "") }>Academic</button>
              <button onClick={() => this.activateCarousel("professional")} type="button" className={"btn " + (this.state.currentActiveTab === "professional" ? "active" : "") }>Professional</button>
              <button onClick={() => this.activateCarousel("sketchlogue")} type="button" className={"btn " + (this.state.currentActiveTab === "sketchlogue" ? "active" : "") }>Sketchlogue</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
