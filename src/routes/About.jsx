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
            <Carousel 
              onChange={onChange}
              infiniteLoop="true"
              className="carousel"
              autoPlay="true"
              >
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
My name is Auden Woolfson. I’m from West Hartford, CT, and currently am located in San Jose, CA.
I graduated from Conard High School in 2019, and from there I began studying computer science at Connecticut College. 
One project I had the opportunity to take on during my time in college was an algorithm that matched students with course sections for registration. 
The algorithm was able to replace the first come first serve system that had been used in the computer science department for years, 
providing greater ease to both students and professors in the registration process and new insights into which courses students preferred. 
I also conducted bioinformatics research, 
which was an incredible way for me to combine my interests in biology and environmental studies with my technological skills.
I graduated from college in December 2023, and I'm currently working at IBM as a software engineer on the watsonx.data team.
            <br /><br />
When I'm not working, I love to get outdoors. In 2021, I through-hiked the Appalachian Trail, 
and I've been exploring bits of the Long Trail in Vermont since then. I hope to someday find the time to through hike the Pacific Crest Trail.
            <br /><br />
Music is a huge part of my life, and I'm always practicing guitar and drums. I'm a fan of all forms of music, and I'm always seeking
new opportunities to play.
            <br /><br />
And, of course, there's my digital playground—computer programming. 
I love diving into new tech and cooking up projects that spark my interest whenever I've got some downtime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;