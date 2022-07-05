import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Header() {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
        currentScrollY = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTop]);
  return (
    <div class={`${scrollTop ? 'bg-teal-900/90 shadow-md transition duration-300 ease-in-out' : 'bg-transparent'} h-[10vh] flex flex-row w-full text-white fixed top-0 z-30 uppercase justify-end py-4`}>
      <ul class="font-lato flex tracking-wider text-base md:text-xl items-center w-[80%] justify-around">
        <li class="cursor-pointer">
          <Link class=" transition ease-in-out duration-300" activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
            Strona Główna
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link class=" transition ease-in-out duration-300" activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
            O nas
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link class=" transition ease-in-out duration-300" activeClass="active" to="services" spy={true} smooth={true} offset={-100} duration={500}>
            Udogodnienia
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link class=" transition ease-in-out duration-300" activeClass="active" to="house" spy={true} smooth={true} offset={-100} duration={500}>
            Info
          </Link>
        </li>

        <li class="cursor-pointer">
          <Link class=" transition ease-in-out duration-300" activeClass="active" to="gallery" spy={true} smooth={true} offset={-100} duration={500}>
            Galeria
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link class=" transition ease-in-out duration-300" activeClass="active" to="area" spy={true} smooth={true} offset={-100} duration={500}>
            Okolica
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link class=" transition ease-in-out duration-300" activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500}>
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
}
