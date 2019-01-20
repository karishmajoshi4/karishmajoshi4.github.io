import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/OverrideCarousel.scss';
import { Carousel } from 'react-responsive-carousel';

class PortfolioCarousel extends Component {

  createImages() {
    var arr = [];

    for (let i = 0; i < images.length; i++) {
      arr.push(
        <div key={i}>
          <img src={images[i]} alt="portfolio-work-images" />
        </div>
      )
    }
    return arr;
  }

  render() {
    return (
      <Carousel showIndicators={false} showThumbs={false} useKeyboardArrows={true} selectedItem={this.props.activeCarouselTab}>
        {this.createImages()}
      </Carousel>
    );
  }
}

function importAll(r) {
  var arr = [];
  for(var i = 4; i < 50; i++) {
    arr.push("./Slide" + i + ".JPG");
  }
  return arr.map(r);
}

const images = importAll(require.context('../images/portfolio-images/', true, /\.(JPG)$/));
export default PortfolioCarousel;
