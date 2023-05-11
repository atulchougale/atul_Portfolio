import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>As a frontend web developer, I specialize in HTML, CSS, Bootstrap, Tailwind CSS, Material UI, and React JS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I build responsive and dynamic user interfaces that adapt to different devices, including desktops, laptops, tablets, and mobile phones.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I optimize web page performance to ensure fast load times and smooth user experiences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I implement accessibility features to make websites usable for everyone.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I create cross-browser compatible designs to ensure consistent experiences across different devices and browsers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I ensure seamless integration with backend systems to create fully functional web applications.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF ul/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>I specialize in user authentication services as a web developer.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I build robust login systems for web applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I implement OAuth authentication with social media platforms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I design secure password management workflows.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My goal is to ensure a seamless and secure user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I have some knowledge in exception handling to ensure that software applications can gracefully recover from errors and continue to operate reliably.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>I provide services using Git, GitHub, AWS, Render, Netlify, and Postman.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I use Git and GitHub for version control and collaboration with other developers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I deploy web applications on cloud platforms such as AWS and Render.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I ensure web application scalability and performance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I use Netlify for continuous integration and deployment.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I test web APIs using Postman.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services