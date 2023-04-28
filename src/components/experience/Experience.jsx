import React from 'react';
import './experience.css';
import { DiMaterializecss } from 'react-icons/di';

import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiMysql, SiGithub, SiPostman, SiRender, SiNetlify } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiMaterializecss className='experience__details-icon' />
              <div>
                <h4>Material UI</h4>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>Node js</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <div>
                <h4>Express js</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>mongoDB</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'> Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__other">

          <h3>Other Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaAws className='experience__details-icon' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGithub className='experience__details-icon' />
              <div>
                <h4>Github</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostman className='experience__details-icon' />
              <div>
                <h4>Postman</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiRender className='experience__details-icon' />
              <div>
                <h4>Render</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiNetlify className='experience__details-icon' />
              <div>
                <h4>Netlify</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience