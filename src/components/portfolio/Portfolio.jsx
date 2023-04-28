import React from 'react'
import './portfolio.css';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="" alt="" />
          </div>
          <h3>This Is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' rel='noreferrer' target='_blank'>Github</a>
            <a href="#demo" className='btn btn-pri' rel='noreferrer' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio