import React from 'react';
import Area from './components/Area';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import House from './components/House';
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
        <div id="house">
          <House />
        </div>
      
        <div id="gallery">
          <Gallery />
        </div>
        <div id="area">
          <Area />
        </div>
        <div id="contact" class="bg-[#eaecea]">
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
