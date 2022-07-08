import React from 'react';
import ArrowDown from './ArrowDown';
import { Link } from 'react-scroll';

export default function Carousel() {
  const heros = [
    {
      img: 'https://images.unsplash.com/photo-1533757879476-8f4a3cb1ae4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3380&q=80',
      alt: 'hero1'
    },
    {
      img: 'https://images.unsplash.com/uploads/1412259799414a71445bd/f7a44cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1669&q=80',
      alt: 'hero2'
    },
    {
      img: 'https://images.unsplash.com/photo-1498176126716-a01bc267f662?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3380&q=80',
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
              <img src={hero.img} class="block w-full h-screen object-cover md:object-fill" alt={hero.alt} />
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
              ></div>
              <div class="carousel-caption flex flex-col justify-evenly absolute top-[10%] text-center">
                <div>
                  <p class="uppercase text-2xl md:text-[70px] md:leading-[72px] font-vol font-bold tracking-wider text-white mb-8">
                    Domek z Widokiem
                  </p>
                  <p class="font-lato text-lg md:text-3xl font-normal md:font-light text-white mb-16">
                    Jabłonka 84, 13-100 Nidzica
                  </p>
                  <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-90} duration={500}>
                    <button
                      type="submit"
                      class="w-fit flex justify-center
                px-4
                py-4
                m-auto
                bg-c-blue-1
                text-white
                font-lato
                items-end
                tracking-[3px]
                font-medium
                text-xs md:text-lg
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-c-blue-2 hover:shadow-lg
                focus:bg-c-blue-2 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-c-blue-2 active:shadow-lg
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
