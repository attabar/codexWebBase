import React, { useState } from 'react';
// import { Link as LinkRouter} from 'react-router-dom';
import logo from './img/logo.jpg';
import './css/Navbar.css'
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
  const SitesInfo = {
    name: 'Lambda Academy',
    site: 'www.lanbdaacademy.com',
    purpose: 'teach digital skill',
    logo: logo,
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
      <div className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="brand">
          <img src={SitesInfo.logo} className="logo" alt="site logo" />
          <h1>Co<span>deX</span></h1>
        </div>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
          <li>
            <ScrollLink className="anchorLink" to="/">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink spy={true} smooth={true} duration={1000} className="anchorLink" to="about-section">
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink spy={true} smooth={true} duration={1000} className="anchorLink" to="courses">
              Courses
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="anchorLink" to="tutor-student-forum-container" spy={true} smooth={true} duration={9000}>
              Register
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="anchorLink" to="/login">
              Login
            </ScrollLink>
          </li>
          <li>
            <ScrollLink  className="anchorLink" to="/testimonials">
              Testimonials
            </ScrollLink>
          </li>
        </ul>
      </div>
 
  );
}

export default NavBar;