import React from 'react'
import './footer.css';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'> ATUL</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://gitgub.com"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;{new Date().getFullYear()} Atul Chougale. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer