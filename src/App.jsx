
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonial from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';



function App() {
  return (
    <>
    <Header/>
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
