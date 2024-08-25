import React from "react";
import Form from "./Form";
import SectionTitle from "./SectionTitle";
import MyMap from "../Maps/MyMap";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { SiOpenstreetmap } from "react-icons/si";
export default function Contact() {
    return (
        <>
            {" "}
            <div className="w-full min-h-[90vh] mx-auto my-26 flex flex-col max-w-[1440px] ">
                <SectionTitle text="Skontaktuj się z nami!" />
                <div className="w-[90%] m-auto flex flex-row md:flex-row flex-wrap justify-around items-center mt-16 gap-8 lg:gap-0 mb-4">
                    <div className="font-lato font-light flex flex-col justify-start w-full md:w-1/2 lg:w-[25%] gap-4">
                        <span className="flex items-center gap-4 transition duration-300 ease-in-out hover:text-c-primary">
                            <BsTelephoneFill /> +48 608 458 768
                        </span>
                        <span className="flex items-center gap-4 transition duration-300 ease-in-out hover:text-c-primary">
                            <AiOutlineMail />{" "}
                            <a href="mailto:dartojab@gmail.com">
                                dartojab@gmail.com
                            </a>
                        </span>
                        <span className="flex items-center gap-4 transition duration-300 ease-in-out hover:text-c-primary">
                            <SiGooglemaps />
                            <a href="https://goo.gl/maps/4o295GCDQsrM6adDA">
                                Lokalizacja
                            </a>
                        </span>
                        <span className="flex items-center gap-4 transition duration-300 ease-in-out hover:text-c-primary">
                            <SiOpenstreetmap />
                            Jabłonka 84, 13-100 Natać Wielka
                        </span>
                    </div>
                    <Form />
                    <div className="h-[300px] lg:h-[400px] w-full lg:w-[35%] m-auto">
                        <MyMap />
                    </div>
                </div>
            </div>
            <div className="border-t-2 bg-c-third-2 text-c-secondary font-lato text-base m-auto italic h-[10vh] bottom-0 w-full text-center flex  flex-col justify-center items-center">
                <p className="m-auto w-full max-w-[1440px]">
                    Copyright {new Date().getFullYear()} by Karina Miernik
                </p>
            </div>
        </>
    );
}
