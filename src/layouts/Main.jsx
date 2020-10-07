import React from "react";
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from '../pages/Contact'

import "../css/Main.css";
const Main = () => {
  return <div className='main-container'>
    <Projects />
    <About />
    <Contact />
  </div>;
};

export default Main;
