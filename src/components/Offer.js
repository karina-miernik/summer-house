import React from "react";
import SectionTitle from "./SectionTitle";

export default function Offer() {
    return (
        <div class="w-[90%] lg:w-[60%] h-auto mx-auto flex flex-col ">
            <div
                class="w-full text-base flex items-center min-h-[80vh] font-lato text-center font-light leading-[32px] font-italic bg-cover lg:bg-contain bg-no-repeat bg-center bg-fixed mx-auto"
                style={{ backgroundImage: "url('offer.jpeg')" }}
            >
                <div class="bg-white h-fit mx-auto mt-8 mb-8 lg:mt-0 md-mb-0 text-black p-4 lg:p-8 w-[80%] lg:w-[60%] flex flex-col text-[14px] lg:text-base justify-center items-center m-auto">
                    <div class="border-t-2 border-c-third-2 w-[10%] mx-auto my-2"></div>
                    <SectionTitle text="Oferta" />
                    <div
                        id="carouselDarkVariant"
                        class="carousel slide relative  carousel-dark"
                        data-bs-ride="carousel"
                    >
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
                            <button
                                type="button"
                                data-bs-target="#carouselDarkVariant"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                            ></button>
                        </div>
                        <div class="carousel-inner relative w-full overflow-hidden  h-[200px] text-lg">
                            <div class="carousel-item active relative float-left w-full">
                                <div>
                                    <p class="mb-4">
                                        <strong>
                                            Last minute: 18.07.2023 - 30.07.2023
                                        </strong>
                                    </p>
                                    <p>
                                        Promocyjna cena{" "}
                                        <strong>370 zł / domek</strong>
                                    </p>
                                    <p>
                                        Obecna cena{" "}
                                        <strong class="line-through">452 zł / domek</strong>
                                    </p>
                                </div>
                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <div>
                                    <p>
                                        Cena <strong>425 zł / domek</strong>
                                    </p>
                                    <p>
                                        Przy rezerwacji z wyprzedzeniem, na
                                        następny rok - zniżka 5%.{" "}
                                    </p>
                                    <p>
                                        W cenę wliczona jest opłata klimatyczna
                                    </p>
                                </div>
                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <div>
                                    <p>
                                        Powyżej 5 osób dostawki we własnym
                                        zakresie
                                    </p>
                                    <p>płatne dodatkowo 20zł/osoba </p>
                                </div>
                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <div>
                                    <p>Minimalny czas pobytu 5 dób</p>
                                    <p>Rezerwacja po wpłacie zadatku</p>
                                    <p>Zadatek - 20% opłaty</p>
                                    <p> należy wpłacić w ciągu 7 dni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
