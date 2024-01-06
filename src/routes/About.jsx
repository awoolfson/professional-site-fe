import React from "react";
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import { SlidesData } from "../SlidesData";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const About = () => {
  
  const [colorh1, setColorh1] = useState("green");
  const [colorh2, setColorh2] = useState("darkgreen");

  var styleh1 = {
    color: colorh1
  }

  var styleh2 = {
    color: colorh2
  }

  const onChange = ( index, item ) => {
    setColorh1(SlidesData[index].colorh1)
    setColorh2(SlidesData[index].colorh2)
  }

  return (
    <div className="content-container">
      <div className="about-content-box">
        <div className="carousel-container">
            <Carousel onChange={onChange} className="carousel">
              {SlidesData.map((items, index) => {
                return <img src={items.path} alt="slide" className="carousel-slide"/>;
              })}
            </Carousel>
        </div>
        <div className="about-text">
          <h1 className="about-text-header" style={styleh1}>
            Hi there...
          </h1>
          <h2 className="about-text-header" style={styleh2}>
            nice to meet you!
          </h2>
          <p className="about-text-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores reiciendis repellat, 
            non totam porro doloremque illum suscipit odit dolore 
            repellendus necessitatibus voluptates soluta officiis magni neque blanditiis distinctio? Unde!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;