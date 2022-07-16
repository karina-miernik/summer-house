import React from 'react';
import ArrowDown from './ArrowDown';
import { Link } from 'react-scroll';

export default function Carousel() {
  const heros = [
    {
      img: 'landing.jpg',
      alt: 'hero1'
    },
    {
      img: 'trees.jpg',
      alt: 'hero2'
    },
    {
      img: 'lake.jpg',
      alt: 'hero3'
    }
  ];
  return (
    <div id="carouselExampleCrossfade" class="carousel slide carousel-fade relative" data-bs-ride="carousel">
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="1" aria-label="Slide 1"></button>
        <button data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="2" aria-label="Slide 1"></button>
      </div>

      <div class="carousel-inner relative w-full overflow-hidden">
        {heros.map((hero, index) => {
          return (
            <div class={`carousel-item ${index === 0 ? 'active' : ''} relative float-left w-full`}>
              <img src={hero.img} class="block w-full h-screen object-cover lg:object-cover" alt={hero.alt} />
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
              ></div>
              <div class="carousel-caption flex flex-col justify-evenly absolute top-[10%] text-center">
                <div>
                  <p class="uppercase text-2xl lg:text-[70px] lg:leading-[72px] font-vol font-bold tracking-wider text-white mb-8">
                    Domek z Widokiem
                  </p>
                  <p class="font-lato text-lg lg:text-[32px] font-normal lg:font-light text-white mb-16">
                    Jabłonka 84, 13-100 Nidzica
                  </p>
                  <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-90} duration={500}>
                    <button
                      type="submit"
                      class="w-fit flex justify-center
                px-4
                py-4
                m-auto
                bg-c-primary
                text-white
                font-lato
                items-end
                tracking-[3px]
                font-medium
                text-xs lg:text-lg
                leading-tight
                uppercase
                shadow-md
                hover:bg-c-secondary hover:shadow-lg
                focus:bg-c-secondary focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-c-secondary active:shadow-lg
                transition
                duration-300
                ease-in-out"
                    >
                      Napisz do nas!
                    </button>
                  </Link>
                </div>
                <ArrowDown />
              </div>
            </div>
          );
        })}
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
