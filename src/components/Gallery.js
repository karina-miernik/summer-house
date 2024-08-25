import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import GalleryModal from "./GalleryModal";
export default function Gallery() {
    const galleries = [
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528576/image_13_ryr3jr.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724527408/20240714_122254_icpgoz.jpg",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528638/image_16_-min_gcrawd.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528055/image_8_eibbdd.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528687/image_15_-min_pouoab.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724527403/20240714_123843_pcgaal.jpg",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724528053/image_12_zoqps0.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724525231/image_9_nvyvzc.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/w_600/v1724527408/20240714_123709_c8wkzq.jpg",
        },
    ];
    const [modal, setModal] = useState(0);

    const handleBtnNext = (e) => {
        e.preventDefault();
        if (modal === 8) setModal(0);
        else setModal((prev) => prev + 1);
    };
    const handleBtnPrev = (e) => {
        e.preventDefault();
        if (modal === 0) setModal(8);
        else setModal((prev) => prev - 1);
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
                                        className="block object-cover object-center w-full h-full transition duration-300 ease-in-out opacity-100 outline:none focus:none hover:opacity-80"
                                        src={gallery.image}
                                        tabIndex="-1"
                                    />
                                </div>
                            );
                        })}
                        <div
                            className="modal fade fixed top-0 left-0 hidden w-[100%] h-full outline-none overflow-x-hidden overflow-y-hidden p-0 cursor-pointer bg-black"
                            id="exampleModal"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="exampleModal"
                            aria-hidden="true"
                        >
                            <div className="flex items-center justify-between flex-shrink-0 p-4 modal-header ">
                                <button
                                    type="button"
                                    className="box-content self-end w-4 h-4 p-2 text-white border-none rounded-full opacity-100 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal"
                                    onClick={() => setModal(NaN)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="#fff"
                                    >
                                        <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none min-w-[100%] h-full m-0">
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
