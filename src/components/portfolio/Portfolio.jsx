import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/blog.jpg'
import IMG2 from '../../assets/goldCal.jpg'
import IMG3 from '../../assets/urlShort.jpg'
import IMG4 from '../../assets/foodii.jpg'
import IMG5 from '../../assets/calculator1.png'
import IMG6 from '../../assets/Quiz_app2.png'
import IMG7 from '../../assets/pancard21.png'

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Blog Application',
      githubBackend: 'https://github.com/atulchougale/Blog-App-BE.git',
      githubFrontend: 'https://github.com/atulchougale/Blog-App-FE.git',
      demo: 'https://ac-myblog-apllication.netlify.app/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Gold Rate Calculator',
      githubBackend: 'https://github.com/',
      githubFrontend: 'https://github.com/atulchougale/project-GoldRateCalculator-frontend.git',
      demo: 'https://gold-rate-calculator-ac.netlify.app/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Url Shortener',
      githubBackend: 'https://github.com/atulchougale/urlshortener-backend.git',
      githubFrontend: 'https://github.com/atulchougale/urlShortner-frontend.git',
      demo: 'https://urlshortner-frontend.netlify.app/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'FOODII- Food Delivery application',
      githubBackend: 'https://github.com/atulchougale/MINI_PROJECT_FINAL_FOOD_DELIVERY--FOODII.git',
      githubFrontend: 'https://github.com/atulchougale/MINI_PROJECT_FINAL_FOOD_DELIVERY--FOODII.git',
      demo: 'https://mini-project-foodii-new.netlify.app/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Demo- Calculator',
      githubBackend: 'https://github.com/atulchougale/DOM-Calculator.git',
      githubFrontend: 'https://github.com/atulchougale/DOM-Calculator.git',
      demo: 'https://dom-claculator.netlify.app/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Demo- Quiz Application',
      githubBackend: 'https://github.com/atulchougale/Quiz_App_nonRsponsive.git',
      githubFrontend: 'https://github.com/atulchougale/Quiz_App_nonRsponsive.git',
      demo: 'https://quiz-app-nonresponcive.netlify.app/'
    },
    {
      id: 7,
      image: IMG7,
      title: 'Demo- Pan Card Application Form',
      githubBackend: 'https://github.com/atulchougale/PAN-Card-Applicatin.git',
      githubFrontend: 'https://github.com/atulchougale/PAN-Card-Applicatin.git',
      demo: 'https://pan-card-applicatin.netlify.app/'
    },
    

  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, githubFrontend,githubBackend, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={githubFrontend} className='btn' rel='noreferrer' target='_blank'>Github Clint</a>
                  <a href={githubBackend} className='btn' rel='noreferrer' target='_blank'>Github Server</a>
                </div>
                <div className="portfolio__item-cta2">
                <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>

                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio