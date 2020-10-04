import React from "react";
import "../css/Nav.css";
import logo from '../img/logo.svg'

const Nav = () => {
  return (
    <div className='nav-container'>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>Projekty</li>
          <li>O nas</li>
          <li>Kontakt</li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;
