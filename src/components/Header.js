import React, { useState, useEffect } from 'react';
import Links from './Links';

export default function Header() {
  const [scrollTop, setScrollTop] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
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
    <div
      className={`${
        scrollTop ? 'bg-c-third  shadow-md transition duration-300 ease-in-out' : 'bg-transparent'
      } h-[10vh] flex flex-row w-full  text-white transition duration-100 ease-in-out fixed top-0 z-30 uppercase justify-end lg:justify-center py-4`}
    >
      <ul className="hidden lg:flex tracking-wider capitalize font-lato text-[18px] items-center w-[80%] justify-around font-bold max-w-[1440px] lg:mx-0">
        <Links />
      </ul>

      <div className="flex items-center lg:hidden">
        <div
          className="px-4 py-0 space-y-2 cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)} 
        >
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
        </div>

        <div
          className={
            isNavOpen ? 'flex absolute left-0 top-0 h-screen w-screen bg-c-third flex-col items-center' : 'hidden'
          }
        >
          <div className="absolute top-0 right-0 p-4 cursor-pointer" onClick={() => setIsNavOpen(false)}>
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="h-full w-full text-white capitalize font-lato text-[32px]l lg:text-base flex flex-col items-center justify-center gap-4">
            <Links handleOnClose={() => setIsNavOpen(false)}/>
          </ul>
        </div>
      </div>
    </div>
  );
}
