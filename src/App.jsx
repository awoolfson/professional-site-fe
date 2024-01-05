import React from "react";
import { motion } from "framer-motion";
import ArrowLink from "./components/ArrowLink";

const App = () => {
  return (
    <div className="content-container">
      <motion.h1
        initial={{ x: "-50%" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Auden Woolfson
      </motion.h1>
      <motion.h2
        initial={{ x: "100%" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Software Engineer
      </motion.h2>
      <motion.img
        animate={{
          scale: [0.1, 1],
          rotate: [0, 0],
        }}
        transition={{ duration: 0.3 }}
        src="/headshot.jpeg" 
        alt="Auden's Headshot"
        className="headshot"
      >
      </motion.img>
      <p className="app-body-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /><br />
        Fuga sapiente aliquid sint explicabo quae officia totam sunt <br /><br />
        molestiae voluptatibus ut incidunt, quod labore doloribus <br /><br />
        temporibus quo dolorem veniam, laborum doloremque? <br /><br />
      </p>
      <br /><br /><br />
      <div className="app-arrow-link-div">
        <ArrowLink route="/projects" text="Check out my projects" className="projects-arrow-link">
        </ArrowLink>
        <ArrowLink route="/about" text="More about me" className="about-arrow-link">
        </ArrowLink>
      </div>
      <br /><br /><br />
      <div className="app-skills-div">
        <img src="/tech-logos/python.png" alt="Python logo" className="python-logo"/>
        <img src="/tech-logos/java.png" alt="Java logo" className="java-logo"/>
        <img src="/tech-logos/rust.png" alt="Rust logo" className="rust-logo"/>
        <img src="/tech-logos/js.png" alt="JavaScript logo" className="js-logo"/>
        <img src="/tech-logos/css.png" alt="CSS logo" className="css-logo"/>
        <img src="/tech-logos/html.png" alt="HTML logo" className="html-logo"/>
      </div>
    </div>
  );
};
export default App;