import React from "react";
import ArrowDown from "./ArrowDown";

export default function Carousel() {
    const heros = [
        {
            img: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724525240/image_f5yqs8.png",
            alt: "hero1",
        },
        {
            img: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724526584/image_5_-min_vmidqe.png",
            alt: "hero2",
        },
        {
            img: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724526796/image_1_-min_coydwe.png",
            alt: "hero3",
        },
    ];
    return (
        <div
            id="carouselExampleCrossfade"
            className="relative carousel slide carousel-fade"
            data-bs-ride="carousel"
        >
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
                <button
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="0"
                    className="active"
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

            <div className="relative w-full overflow-hidden carousel-inner ">
                {heros.map((hero, index) => {
                    return (
                        <div
                            key={`hero-${index}`}
                            className={`carousel-item ${
                                index === 0 ? "active" : ""
                            } relative float-left w-full`}
                        >
                            <img
                                src={hero.img}
                                className="block object-cover w-full h-screen"
                                alt={hero.alt}
                            />
                            <div
                                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
                                style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                            ></div>
                            <div className="carousel-caption flex flex-col justify-evenly absolute top-[10%] text-center">
                                <div>
                                    <p className="uppercase text-2xl lg:text-[70px] lg:leading-[72px] font-vol font-bold tracking-wider text-white mb-8">
                                        Domek z Widokiem
                                    </p>
                                    <p className="font-lato text-lg lg:text-[32px] font-normal lg:font-light text-white mb-16">
                                        Jabłonka 84, 13-100 Nidzica
                                    </p>

                                    <a
                                        href="mailto:domek.z.widokiem@gmail.com?subject=Domek z widokiem: rezerwacja terminu"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            type="submit"
                                            className="w-fit flex justify-center
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
                                    </a>
                                </div>
                                <ArrowDown />
                            </div>
                        </div>
                    );
                })}
            </div>
            <button
                className="absolute left-0 flex items-center justify-center p-0 text-center border-0 top-1/2 h-fit carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="prev"
            >
                <span
                    className="inline-block bg-no-repeat carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="absolute right-0 flex items-center justify-center p-0 text-center border-0 top-1/2 h-fit carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="next"
            >
                <span
                    className="inline-block bg-no-repeat carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
