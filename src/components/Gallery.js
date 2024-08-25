import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import GalleryModal from "./GalleryModal";
export default function Gallery() {
    const galleries = [
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528576/image_13_ryr3jr.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724527408/20240714_122254_icpgoz.jpg" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528638/image_16_-min_gcrawd.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528055/image_8_eibbdd.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528687/image_15_-min_pouoab.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724527403/20240714_123843_pcgaal.jpg" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528053/image_12_zoqps0.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724525231/image_9_nvyvzc.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724527408/20240714_123709_c8wkzq.jpg" },
    ];
    const [modal, setModal] = useState(NaN);

    const handleBtnNext = () => {
        if (modal === 0) setModal(1);
        else if (modal === 1) setModal(2);
        else if (modal === 2) setModal(3);
        else if (modal === 3) setModal(4);
        else if (modal === 4) setModal(5);
        else if (modal === 5) setModal(6);
        else if (modal === 6) setModal(7);
        else if (modal === 7) setModal(8);
        else if (modal === 8) setModal(0);
        else setModal(NaN);
    };
    const handleBtnPrev = () => {
        if (modal === 0) setModal(8);
        else if (modal === 1) setModal(0);
        else if (modal === 2) setModal(1);
        else if (modal === 3) setModal(2);
        else if (modal === 4) setModal(3);
        else if (modal === 5) setModal(4);
        else if (modal === 6) setModal(5);
        else if (modal === 7) setModal(6);
        else if (modal === 8) setModal(0);
        else setModal(NaN);
    };

    return (
        <div className="w-[90%] lg:w-[60%] lg:min-h-[90vh] mx-auto flex flex-col">
            <SectionTitle text="Galeria" />
            <section className="mt-16 overflow-hidden text-gray-700">
                <div className="container mx-auto">
                    <div className="flex flex-wrap m-1 lg:-m-2">
                        {galleries.map((gallery, index) => {
                            return (
                                <div
                                    className="w-1/2 p-1 cursor-pointer lg:w-1/3 lg:p-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={(e) => setModal(index)}
                                    key={index}
                                >
                                    <img
                                        id={`gallery${index}`}
                                        alt={`gallery${index}`}
                                        className="block object-cover object-center w-full h-full transition duration-300 ease-in-out opacity-100 hover:opacity-80"
                                        src={gallery.image}
                                    />
                                </div>
                            );
                        })}
                        <div
                            className="modal fade fixed top-0 left-0 hidden w-[100%] h-full outline-none overflow-x-hidden overflow-y-auto p-0 cursor-pointer bg-black"
                            id="exampleModal"
                            // data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="exampleModal"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none min-w-[100%] min-h-[100vh] m-0">
                                <div className="relative flex flex-col w-full h-full text-current border-none outline-none pointer-events-auto modal-content bg-clip-padding">
                                    <div className="modal-body relative flex flex-row justify-around flex-wrap items-center w-[100%] pt-0">
                                        <div
                                            className="text-[30px] cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline w-[10%] flex flex-column transition duration-300 ease-in-out"
                                            type="button"
                                            onClick={handleBtnPrev}
                                        >
                                            <BsChevronLeft color="white" />
                                        </div>
                                        <GalleryModal index={modal} />
                                        <div
                                            className="text-[30px] cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline w-[10%] flex flex-column  transition duration-300 ease-in-out"
                                            type="button"
                                            onClick={handleBtnNext}
                                        >
                                            <BsChevronRight color="white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
