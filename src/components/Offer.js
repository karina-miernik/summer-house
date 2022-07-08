import React from 'react';
import SectionTitle from './SectionTitle';

export default function Offer() {
  return (
    <div class="w-[90%] md:w-[60%] h-auto mx-auto my-32 flex flex-col ">
      <div
        class="w-full text-base flex min-h-[80vh] font-lato text-center font-light leading-[32px] font-italic bg-cover md:bg-contain bg-no-repeat bg-center bg-fixed mx-auto"
        style={{ backgroundImage: "url('offer.jpeg')" }}
      >
        <div class="bg-white text-black p-4 md:p-8 w-[80%] md:w-[60%] flex flex-col text-[14px] md:text-base justify-center items-center m-auto">
          <div class="border-t-2 border-c-blue-1 w-[10%] m-0"></div>
          <SectionTitle text="Oferta" />
          <div id="carouselDarkVariant" class="carousel slide relative  carousel-dark" data-bs-ride="carousel">
            <div class="carousel-indicators relative right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="0"
                class="active cursor-pointer"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden  h-[200px]">
              <div class="carousel-item active relative float-left w-full">
                <div>
                  <p>Cena 400-420/domek</p>
                  <p>Polecamy zarezerwować z wyprzedzeniem, na następny rok - zniżka 5%. </p>
                  <p>W cenę wliczona jest opłata klimatyczna</p>
                  <p>
                    Gwarancją rezerwacji jest wpłata zadatku po uzgodnieniu telefonicznym, w wysokości 20% opłaty za
                    cały pobyt, który należy wpłacić w ciągu 7 dni.
                  </p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <div>
                  <p>Dostawki we własnym zakresie, powyżej 5 osób płatne dodatkowo 20zł/osoba </p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <div>
                  <p>Minimalny czas pobytu 5 dób</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
