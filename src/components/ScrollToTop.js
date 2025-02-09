import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function ScrollToTop() {
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
    <div className="fixed bottom-0 right-0">
      <Link className="cursor-pointer" activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className={`${
            scrollTop ? 'block opacity-100 transition duration-500 ease-in-out' : 'hidden opacity-0'
          } p-3 bg-c-primary text-white font-medium text-[32px]s leading-tight uppercase rounded-full shadow-md hover:bg-c-secondary hover:shadow-lg focus:bg-c-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-c-secondary active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5 fixed`}
          id="btn-back-to-top"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
}
