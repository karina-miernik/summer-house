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
      <div class="flex flex-col bg-gray-50">
      <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="offer">
          <Offer />
        </div>
      
        <div id="gallery">
          <Gallery />
        </div>
        <div id="area">
          <Area />
        </div>
        <div id="contact" class="bg-c-green-3">
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
