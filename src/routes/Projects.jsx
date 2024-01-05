import React from "react";
import ProjectShowcase from "../components/ProjectShowcase";
import { ProjectShowcaseData } from "../ProjectShowcaseData";

const Projects = () => {
  return (
    <div className="content-container">
      <h1>My Projects</h1>
      <div className="project-showcase-container">
        {ProjectShowcaseData.map((items, index) => {
          return <ProjectShowcase items={items} num={index}/>;
        })}
      </div>
    </div>
  );
};

export default Projects;