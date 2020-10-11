import React from "react";
import "../css/Nav.css";
import logo from '../img/logo.svg'
import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-ls/facebook';
import instagramIcon from '@iconify/icons-ls/instagram';
import { Link, animateScroll as scroll } from "react-scroll";


const Nav = () => {
  return (
    <div className='nav-container' id='nav'>
      <nav>
        <Link
          activeClass=""
          to="header"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        ><img src={logo} alt="logo" /></Link>
        <ul>
          <li><Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >projekty</Link></li>
          <li><Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >o nas</Link></li>
          <li><Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >kontakty</Link></li>
        </ul>
      </nav>
      <div className='social-media-container'>
        <Icon icon={instagramIcon} />
        <Icon icon={facebookIcon} />
      </div>

    </div>
  )
};

export default Nav;
