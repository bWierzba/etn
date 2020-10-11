import React from "react";
import "../css/Projects.css";

const ProjectDetail = (props) => {

  return <div className="project-detail">{props.project.title[0]}</div>;
};

export default ProjectDetail;
