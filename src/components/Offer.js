import React from "react";
import SectionTitle from "./SectionTitle";

export default function Offer() {
    return (
        <div className="w-full md:w-[90%] lg:w-[60%] h-auto mx-auto flex flex-col max-w-[1440px]">
            <div
                className="w-full text-base flex items-center min-h-[80vh] font-lato text-center font-light leading-[32px] font-italic bg-cover lg:bg-contain bg-no-repeat bg-center bg-fixed mx-auto"
                style={{ backgroundImage: "url('https://res.cloudinary.com/dzuosnugg/image/upload/v1724526968/image_7_cuzknt.png')" }}
            >
                <div className="bg-white h-fit mx-auto mt-8 mb-8 lg:mt-0 md-mb-0 text-black p-4 lg:p-8 w-[80%] lg:w-[60%] flex flex-col text-[14px] lg:text-base justify-center items-center m-auto">
                    <div className="border-t-2 border-c-third-2 w-[10%] mx-auto my-2"></div>
                    <SectionTitle text="Oferta" />
                    <div
                    >
                        {/* <div className="relative bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselDarkVariant"
                                data-bs-slide-to="0"
                                className="cursor-pointer active"
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
                        </div> */}
                        <div className="relative w-full overflow-hidden h-fit min-h-[200px] text:md md:text-lg">
                            {/* <div className="relative float-left w-full carousel-item active">
                                <div>
                                    <p className="mb-4">
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
                                        <strong className="line-through">452 zł / domek</strong>
                                    </p>
                                </div>
                            </div> */}
                            <ul className="relative w-full text-left list-disc list-inside">
                                <li>
                                    Cena: <strong>450 zł za domek</strong> (w
                                    cenę wliczona jest opłata klimatyczna)
                                </li>
                                <li>
                                    {" "}
                                    Przy rezerwacji z wyprzedzeniem, na następny
                                    rok - zniżka 5%.
                                </li>
                                <li>Domek 5 osobowy</li>
                                <li>Rezerwacja po wpłacie zadatku</li>
                                <li>Zadatek wynosi 20% opłaty, należy opłacić w ciągu 7 dni</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
