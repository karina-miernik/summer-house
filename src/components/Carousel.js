import React from 'react';
import {BsChevronDown} from 'react-icons/bs'
import ArrowDown from './ArrowDown';
export default function Carousel() {
  return (
<div
  id="carouselExampleCrossfade"
  class="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://images.unsplash.com/photo-1533757879476-8f4a3cb1ae4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3380&q=80"
        class="block w-full h-screen"
        alt="Motorbike Smoke"
      />
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(0,0,0,0.2)"}}></div>
      <div class="carousel-caption block absolute top-[20%] text-center">
        <p class="uppercase text-xl md:text-[70px] leading-[72px] font-vol font-bold tracking-wider text-white mb-4">Domek z Widokiem</p>
        <p class="font-lato text-lg md:text-3xl font-bold text-white">Jabłonka 84, 13-100 Nidzica</p>
        <ArrowDown/>
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src="https://images.unsplash.com/photo-1520819716183-631708b900aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90aby1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3380&q=80"
        class="block w-full h-screen"
        alt="Mountaintop"
      />
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(0,0,0,0.2)"}}></div>

      <div class="carousel-caption block absolute top-[20%] text-center">
        <p class="uppercase text-xl md:text-[70px] leading-[72px] font-vol font-bold tracking-wider text-white mb-4">Domek z Widokiem</p>
        <p class="font-lato text-lg md:text-3xl font-bold text-white">Jabłonka 84, 13-100 Nidzica</p>
        <ArrowDown/>
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src="https://images.unsplash.com/photo-1508041811615-4ee369a24c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3380&q=80"
        class="block w-full h-screen"
        alt="Woman Reading a Book"
      />
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(0,0,0,0.2)"}}></div>

      <div class="carousel-caption block absolute top-[20%] text-center">
        <p class="uppercase text-xl md:text-[70px] leading-[72px] font-vol font-bold tracking-wider text-white mb-4">Domek z Widokiem</p>
        <p class="font-lato text-lg md:text-3xl font-bold text-white">Jabłonka 84, 13-100 Nidzica</p>
        <ArrowDown/>
      </div>
    </div>
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
