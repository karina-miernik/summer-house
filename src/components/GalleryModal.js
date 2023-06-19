import React, { useState } from "react";
export default function GalleryModal({ index, handleOnNext }) {
    // eslint-disable-next-line no-unused-vars
    const [modal, setModal] = useState(index);
    const galleries = [
        {
            image: "bed.jpeg",
        },
        {
            image: "bathroom.jpeg",
        },
        {
            image: "domek.jpeg",
        },
        {
            image: "boat.jpeg",
        },
        {
            image: "balcony.jpeg",
        },
        {
            image: "living.jpeg",
        },
        {
            image: "outside.jpg",
        },
    ];
    console.log();
    return (
        <>
            <div class="flex flex-col w-[80%] lg:w-[80%] m-auto h-full relative gap-4">
                <button
                    type="button"
                    class="btn-close box-content self-end w-4 h-4 bg-white border-none rounded-full p-2 text-white opacity-100 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setModal(NaN)}
                ></button>
                <div class="flex flex-row h-[90%] gap-16">
                    <div
                        class="flex flex-col w-full m-auto border-4 border-white"
                        data-interval="false"
                    >
                        <div class="w-full overflow-hidden">
                            {galleries.map((gallery, i) => {
                                return (
                                    <>
                                        <div
                                            id={i}
                                            class={`carousel-item ${
                                                i === index ? "active" : ""
                                            } relative float-left w-full`}
                                        >
                                            <img
                                                src={gallery.image}
                                                class="block w-full max-h-[700px] object-cover"
                                                alt="..."
                                            />
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
