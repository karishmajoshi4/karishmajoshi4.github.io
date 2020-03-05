import React, { Component } from 'react';
import FullAvatar from '../images/backgrounds/full-avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/About.scss';

class About extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 h-100">
            <div className="full-size-avatar">
              <img src={FullAvatar} alt="karishma-joshi" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 h-100">
            <div className="about-me">
              <h1 className="text-green">Hi there!</h1>
              <span>
                I am a Design Enthusiast, an Architecture Professional and a Landscape Designer with a passion for design, graphics, sketching, doodling, photography and illustration.
                <br />
                <br />
                As an architect, I believe myself to be an artist as well. I think the artist's sensitivity towards nature and natural elements reflects into the landscapes designed. I am interested in Urban resiliency and flood mitigation and aim to develop ingenious, creative and functional design solutions to solve these problems. I am here to contribute my bit to make the world better; let's work together.
              </span>
            </div>

            <div className="find-me-on">
              <a className="social-media-icon" href="mailto:karishma4793@gmail.com">
                <FontAwesomeIcon icon="envelope" />
              </a>
              <a className="social-media-icon" href="tel:+19797397182">
                <FontAwesomeIcon icon="phone" />
              </a>
              <a className="social-media-icon" href="https://www.linkedin.com/in/karishma-joshi-5a411669/">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
              <a className="social-media-icon" href="https://www.instagram.com/kari.joshi/">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a className="social-media-icon" href="https://facebook.com/karishma.joshi.944">
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </a>
              <a className="social-media-icon" href="https://github.com/joshi-chinmay">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
