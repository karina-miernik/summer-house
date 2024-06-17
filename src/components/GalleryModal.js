import React, { useState } from "react";
export default function GalleryModal({ index, handleOnNext }) {
    // eslint-disable-next-line no-unused-vars
    const [modal, setModal] = useState(index);
    const galleries = [
        { image: "chimney.png" },
        { image: "living-room.jpg" },
        { image: "hall.jpg" },
        { image: "bathroom.png" },
        { image: "kitchen.jpg" },
        { image: "plot.png" },
        { image: "boat.jpeg" },
        { image: "living.jpeg" },
        { image: "trees.jpg" },
    ];

    return (
        <>
            <div className="flex flex-col w-[80%] lg:w-[80%] m-auto h-full relative gap-4">
                <button
                    type="button"
                    className="btn-close box-content self-end w-4 h-4 bg-white border-none rounded-full p-2 text-white opacity-100 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
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
