import React from "react";

import "../css/Projects.css";

const Projects = (props) => {
  return <div className="projects-page" id='projects'>
    <button id='1' onClick={props.click}>1</button>
    <button id='2' onClick={props.click}>2</button>
    <button id='3' onClick={props.click}>3</button>
  </div>;
};

export default Projects;
