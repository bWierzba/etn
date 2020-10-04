import React from "react";
import "../css/Nav.css";
import logo from '../img/logo.svg'
import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-ls/facebook';
import instagramIcon from '@iconify/icons-ls/instagram';


const Nav = () => {
  return (
    <div className='nav-container'>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>Projekty</li>
          <li>O nas</li>
          <li>Kontakt</li>
          <li><Icon icon={instagramIcon} /></li>
          <li><Icon icon={facebookIcon} /></li>

        </ul>
      </nav>
    </div>
  )
};

export default Nav;
