import React from "react";
import ProjectShowcase from "../components/ProjectShowcase";
import { ProjectShowcaseData } from "../ProjectShowcaseData";

const Projects = () => {
  return (
    <div className="content-container">
      <h1>My Projects</h1>
      <div className="project-showcase-container">
        {ProjectShowcaseData.map((menu, index) => {
          return <ProjectShowcase items={menu} className={`project-${index}`}/>;
        })}
      </div>
    </div>
  );
};

export default Projects;