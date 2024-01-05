import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const About = () => {
  return (
    <div className="content-container">
      <div className="carousel-container">
          <Carousel className="carousel">
            <img src="/carousel-images/headshot2.png" alt="slide" className="carousel-slide"/>
            <img src="/carousel-images/drums.PNG" alt="slide" className="carousel-slide"/>
            <img src="/carousel-images/hike.PNG" alt="slide" className="carousel-slide"/> 
            <img src="/carousel-images/guitar.JPG" alt="slide" className="carousel-slide"/> 
          </Carousel>
      </div>
    </div>
  );
};
export default About;
