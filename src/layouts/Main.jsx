import React from "react";
import Projects from '../pages/Projects'
import ProjectDetail from '../pages/ProjectDetail'
import About from '../pages/About'
import Contact from '../pages/Contact'
import "../css/Main.css";


class Main extends React.Component {

  state = {
    isDetailed: false,
    projectID: ''
  }

  handleClick = (e) => {
    this.setState({
      isDetailed: !this.state.isDetailed,
      projectID: e.target.id
    })
  }

  render() {
    return (
      <div className='main-container'>
        {!this.state.isDetailed ? <Projects click={this.handleClick} /> : <ProjectDetail id={this.state.projectID} />}
        <About />
        <Contact />
      </div>
    )
  }

};

export default Main;
