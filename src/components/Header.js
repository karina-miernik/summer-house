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
      class={`${
        scrollTop ? 'bg-c-third  shadow-md transition duration-300 ease-in-out' : 'bg-transparent'
      } h-[10vh] flex flex-row w-full  text-white transition duration-100 ease-in-out fixed top-0 z-30 uppercase justify-end py-4`}
    >
      <ul class="hidden md:flex tracking-wider capitalize font-lato text-base items-center w-[80%] justify-around">
        <Links />
      </ul>

      <div className="flex md:hidden items-center">
        <div
          className="space-y-2 px-4 py-0 cursor-pointer"
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
              className="h-8 w-8 text-white"
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
          <ul className="h-full w-full text-white capitalize font-lato text-xl md:text-base flex flex-col items-center justify-center gap-4">
            <Links handleOnClose={() => setIsNavOpen(false)}/>
          </ul>
        </div>
      </div>
    </div>
  );
}
