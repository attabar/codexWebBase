import React from 'react'
import './css/Footer.css';
import logo from './img/logo.jpg';
import { FaWhatsapp, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'; // Import icons from the Font Awesome library
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
    const footerLogo = {
        footerLogo:logo
    }
  return (
    <div className='footer'>
        <div className='img-container'>
            <img className='footer-image' src={footerLogo.footerLogo} alt="" />
        </div>
      <h1>CodeX - Your Gateway to Excellence in Digital Learning!</h1>
      <div className="footer-menu">
        <div className="menu1 menu">
            <p>Addrees: Jiddari Bus Stop</p>
            <p>Phone: 08149715017, 09028350494</p>
            <p>Email: mabdulmalik436@gmail.com</p>
        </div>
        <div className="menu2 menu">
            <p>
                <ScrollLink to='home' spy={true} smooth={true} duration={1000}>
                    Home
                </ScrollLink>
            </p>
            <p>Courses</p>
            <p>About us</p>
            <p>Contact</p>
        </div>
        <div className="men3 menu">
            <p><FaWhatsapp/> WhatsApp</p>
            <p><FaFacebook/> Facebook</p>
            <p><FaYoutube/> YouTube</p>
        </div>
      </div>
      <div className="copyright-container">
       <p>&copy; 2024 CodeX. All rights reserved. Privacy Policy | Terms of Service</p> 
      </div>
    </div>
  )
}

export default Footer
