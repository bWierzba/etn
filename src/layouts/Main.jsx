import React from "react";
import Projects from '../pages/Projects'
import ProjectDetail from '../pages/ProjectDetail'
import About from '../pages/About'
import Contact from '../pages/Contact'
import "../css/Main.css";


class Main extends React.Component {

  render() {
    return (
      <div className='main-container'>
        <Projects />
        <About />
        <Contact />
      </div>
    )
  }

};

export default Main;
