import React from "react";
export default function GalleryModal({ index }) {
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
            <div className="flex flex-col w-[80%] lg:w-[80%] m-auto h-full relative gap-4 items-center" key={index}>
                <div className="flex flex-row h-[90%] gap-16 max-w-[1440px] mx-0 ">
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
                                        } relative float-left w-full `}
                                    >
                                        <img
                                            src={gallery.image}
                                            className="w-full max-h-[700px] object-cover pointer-events-none focus:none cursor-none"
                                            alt={`gallery-${i}`}
                                            tabIndex="-1"
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
