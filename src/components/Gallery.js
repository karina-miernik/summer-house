import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import GalleryModal from "./GalleryModal";
export default function Gallery() {
    const galleries = [
        { image: "bed.jpeg" },
        { image: "bathroom.jpeg" },
        { image: "domek.jpeg" },
        { image: "boat.jpeg" },
        { image: "balcony.jpeg" },
        { image: "living.jpeg" },
    ];
    const [modal, setModal] = useState(NaN);

    const handleBtnNext = () => {
        if (modal === 0) setModal(1);
        else if (modal === 1) setModal(2);
        else if (modal === 2) setModal(3);
        else if (modal === 3) setModal(4);
        else if (modal === 4) setModal(5);
        else if (modal === 5) setModal(0);
        else setModal(NaN);
    };
    const handleBtnPrev = () => {
        if (modal === 0) setModal(3);
        else if (modal === 1) setModal(0);
        else if (modal === 2) setModal(1);
        else if (modal === 3) setModal(4);
        else if (modal === 4) setModal(5);
        else if (modal === 5) setModal(0);
        else setModal(NaN);
    };

    return (
        <div class="w-[90%] lg:w-[60%] lg:min-h-[90vh] mx-auto  flex flex-col">
            <SectionTitle text="Galeria" />
            <section class="overflow-hidden text-gray-700 mt-16">
                <div class="container mx-auto">
                    <div class="flex flex-wrap m-1 lg:-m-2">
                        {galleries.map((gallery, index) => {
                            return (
                                <div
                                    class="w-1/2 lg:w-1/3 p-1 lg:p-2 cursor-pointer"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={(e) => setModal(index)}
                                    key={index}
                                >
                                    <img
                                        id={`gallery${index}`}
                                        alt={`gallery${index}`}
                                        class="block object-cover  object-center w-full h-full opacity-100 hover:opacity-80 transition duration-300 ease-in-out"
                                        src={gallery.image}
                                    />
                                </div>
                            );
                        })}
                        <div
                            class="modal fade fixed top-0 left-0 hidden w-[100%] h-full outline-none overflow-x-hidden overflow-y-auto p-0 cursor-pointer"
                            id="exampleModal"
                            // data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabindex="-1"
                            aria-labelledby="exampleModal"
                            aria-hidden="true"
                        >
                            <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none min-w-[100%] min-h-[100vh] m-0">
                                <div class="modal-content border-none relative flex flex-col h-full w-full pointer-events-auto bg-clip-padding  outline-none text-current">
                                    <div class="modal-body relative flex flex-row justify-around flex-wrap items-center w-[100%] pt-0">
                                        <div
                                            class="text-[30px] cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline w-[10%] flex flex-column transition duration-300 ease-in-out"
                                            type="button"
                                            onClick={handleBtnPrev}
                                        >
                                            <BsChevronLeft color="white" />
                                        </div>
                                        <GalleryModal index={modal} />
                                        <div
                                            class="text-[30px] cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline w-[10%] flex flex-column  transition duration-300 ease-in-out"
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
