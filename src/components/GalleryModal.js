import React, { useState } from "react";
export default function GalleryModal({ index, handleOnNext }) {
    // eslint-disable-next-line no-unused-vars
    const [modal, setModal] = useState(index);
    const galleries = [
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528576/image_13_ryr3jr.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724527408/20240714_122254_icpgoz.jpg",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528638/image_16_-min_gcrawd.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528055/image_8_eibbdd.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528687/image_15_-min_pouoab.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724527403/20240714_123843_pcgaal.jpg",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528053/image_12_zoqps0.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724525231/image_9_nvyvzc.png",
        },
        {
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724527408/20240714_123709_c8wkzq.jpg",
        },
    ];

    return (
        <>
            <div className="flex flex-col w-[80%] lg:w-[80%] m-auto h-full relative gap-4 max-w-[1440px] mx-0 items-center">
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
                <div className="flex flex-row h-[90%] gap-16 ">
                    <div
                        className="flex flex-col w-full m-auto"
                        data-interval="false"
                    >
                        <div className="w-full overflow-hidden">
                            {galleries.map((gallery, i) => {
                                return (
                                    <div
                                        key={`gallery-${i}`}
                                        id={i}
                                        className={`carousel-item ${
                                            i === index ? "active" : ""
                                        } relative float-left w-full`}
                                    >
                                        <img
                                            src={gallery.image}
                                            className="block w-full max-h-[700px] object-cover"
                                            alt="..."
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
