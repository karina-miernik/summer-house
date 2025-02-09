import React from 'react';
import Area from './components/Area';
import Contact from './components/Contact';
import About from './components/About';
import Offer from './components/Offer';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Carousel from './components/Carousel';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div>
      <div id="home">
        <Header />
        <Carousel />
      </div>
      <div className="flex flex-col bg-gray-50">
      <div id="about" className="my-32">
          <About />
        </div>
        <div id="services" className="mb-32">
          <Services />
        </div>
        <div id="offer" className="mb-32">
          <Offer />
        </div>
      
        <div id="gallery" className="mb-32">
          <Gallery />
        </div>
        <div id="area" className="mb-32">
          <Area />
        </div>
        <div id="contact" className="bg-c-green-3 mt-32">
          <Contact />
        </div>
        <div>
          <ScrollToTop />
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
