import React, { useState } from "react";
export default function GalleryModal({ index, handleOnNext }) {
    // eslint-disable-next-line no-unused-vars
    const [modal, setModal] = useState(index);
    const galleries = [
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528576/image_13_ryr3jr.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724527408/20240714_122254_icpgoz.jpg" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528638/image_16_-min_gcrawd.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528055/image_8_eibbdd.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528687/image_15_-min_pouoab.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724527403/20240714_123843_pcgaal.jpg" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528053/image_12_zoqps0.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724525231/image_9_nvyvzc.png" },
        { image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724527408/20240714_123709_c8wkzq.jpg" },
    ];

    return (
        <>
            <div className="flex flex-col w-[80%] lg:w-[80%] m-auto h-full relative gap-4">
                <button
                    type="button"
                    className="box-content self-end w-4 h-4 p-2 text-white bg-white border-none rounded-full opacity-100 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setModal(NaN)}
                ></button>
                <div className="flex flex-row h-[90%] gap-16">
                    <div
                        className="flex flex-col w-full m-auto border-4 border-white"
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
