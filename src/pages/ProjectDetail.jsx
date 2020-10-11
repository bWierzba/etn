import React from "react";
import "../css/Projects.css";

const ProjectDetail = (props) => {

  let go = ''

  if (props.id == '1') {
    go = 'projekt1'
  }
  else if (props.id == '2') {
    go = 'projekt2'
  }
  else if (props.id == '3') {
    go = 'projekt3'
  }

  console.log(go)

  return <div className="project-detail">{go}</div>;
};

export default ProjectDetail;
