import React, { useState } from "react";
import AreaModalBody from "./AreaModalBody";
import SectionTitle from "./SectionTitle";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
export default function Area() {
    const [modal, setModal] = useState(NaN);
    const activities = [
        {
            title: "Plażowanie",
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528051/image_10_ejpfnt.png",
        },
        {
            title: "Trasy turystyczne",
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528050/image_14_m5pm15.png",
        },
        {
            title: "Trasy rowerowe",
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724528050/image_11_rpzlyw.png",
        },
        {
            title: "Sporty wodne",
            image: "https://res.cloudinary.com/dzuosnugg/image/upload/v1724525233/image_6_s2ctmy.png",
        },
    ];
    const handleBtnNext = () => {
        if (modal === 0) setModal(1);
        else if (modal === 1) setModal(2);
        else if (modal === 2) setModal(3);
        else if (modal === 3) setModal(0);
        else setModal(NaN);
    };
    const handleBtnPrev = () => {
        if (modal === 0) setModal(3);
        else if (modal === 1) setModal(0);
        else if (modal === 2) setModal(1);
        else if (modal === 3) setModal(2);
        else setModal(NaN);
    };
    return (
        <div className="w-[90%] h-auto mx-auto flex flex-col max-w-[1440px]">
            <SectionTitle text="Poznaj okolicę" />
            <div className="flex flex-col flex-wrap items-center justify-center w-full gap-1 mt-16 md:flex-row">
                {activities.map((activity, index) => {
                    return (
                        <div
                            type="button"
                            className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            key={index}
                        >
                            <div
                                className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover"
                                style={{ backgroundPosition: "50%" }}
                            >
                                <img
                                    className="max-w-[280px] lg:max-w-md h-full"
                                    src={activity.image}
                                    alt="activity"
                                />
                                <div
                                    onClick={(e) => setModal(index)}
                                    className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed bg-black/10 hover:bg-black/40"
                                >
                                    <div
                                        id={`activity${index}`}
                                        className="flex flex-col justify-center h-full cursor-pointer group items-c enter first-letter"
                                    >
                                        <p className="relative text-white font-bold uppercase font-lato tracking-widest text-2xl lg:text-[30px] text-center justify-center mb-0 flex">
                                            {activity.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div
                    className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog relative w-auto pointer-events-none min-w-[100vw] m-0 min-h-[100vh]">
                        <div className="modal-content min-h-[100vh] border-none shadow-lg relative flex flex-col h-full w-full pointer-events-auto bg-white bg-clip-padding  outline-none text-current">
                            <div className="flex items-center justify-between flex-shrink-0 p-4 modal-header ">
                                <button
                                    type="button"
                                    className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setModal(NaN)}
                                ></button>
                            </div>
                            <div className="relative flex flex-row flex-wrap items-center justify-around w-full p-4 modal-body max-w-[1440px] mx-auto">
                                <div
                                    className="text-[30px] fixed top-[50%] left-0 cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline transition duration-300 ease-in-out"
                                    type="button"
                                    onClick={handleBtnPrev}
                                >
                                    <BsChevronLeft />
                                </div>
                                <AreaModalBody index={modal} />
                                <div
                                    className="text-[30px] fixed top-[50%] cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline right-0 transition duration-300 ease-in-out"
                                    type="button"
                                    onClick={handleBtnNext}
                                >
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
