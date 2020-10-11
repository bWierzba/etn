import React from "react";
import ProjectDetail from '../pages/ProjectDetail'
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/3.jpg";

import "../css/Projects.css";

const projectList = [
  { photos: [image2, image3, image4], title: ['projekt1', 'wroclaw', '1999'], text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { photos: [image2, image3, image4], title: ['projekt2', 'poznan', '2020'], text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { photos: [image2, image3, image4], title: ['projekt3', 'wawka', '2021'], text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { photos: [image2, image3, image4], title: ['projekt4', 'elk', '2023'], text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { photos: [image2, image3, image4], title: ['projekt5', 'lodz', '2019'], text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { photos: [image2, image3, image4], title: ['projekt6', 'lipa', '2010'], text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
]


class Projects extends React.Component {



  state = {
    isDetailded: false,
    project: {}
  }

  handleClick = (project) => {
    console.log(project)
    this.setState({
      isDetailded: !this.state.isDetailded,
      project: project
    })
  }

  render() {
    let list = projectList.map(project => {
      return (
        <div onClick={() => this.handleClick(project)} className='project' key={project.title[0]}>
          <img src={project.photos[0]} alt="project thumbnail" />
          <h1>{project.title[0]}</h1>
        </div>
      )
    })

    return <div className="projects-page" id='projects'>
      <div className={this.state.isDetailded.toString()}>{list}</div>
      {this.state.isDetailded ? <ProjectDetail project={this.state.project} /> : 'null'}
    </div>
  }
};

export default Projects;
