import React from 'react';
import './about.css'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import ME from '../../assets/about_me.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=" About Img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working in Finance</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0 </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Hello, I'm Atul Shahaji Chougale, a full-stack developer looking for better opportunity to enhance my skills and knowledge.

            </p>
          <p>
          I realized that my true passion lay in software development, which led me to pursue a career in the technology industry. I completed a six-month internship at Arogo Plus, where I worked as a full-stack developer. During my time there, I gained experience working with technologies such as HTML , CSS , Javascript ,React js, mongodb,Node js , express js ,Bootstrap , tailwind css .

          </p>
          <p>

          I am always eager to learn new technologies and explore myself in this industry. As a full-stack developer, I'm excited to continue building innovative software solutions that make a difference in people's lives.          </p>
          <p>
          I am so confident now that I can work independently as a full stack developer and build the application on my own using the above technologies.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About