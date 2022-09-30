import React from "react";
import { about_img } from "../constants/images";
import { BsArrowRightShort } from "react-icons/bs";

const About = () => {
    return (
        <div className="flex">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                    <img src={about_img} alt="About" />
                </div>
                <div className="col-span-7 p-12">
                    <h1 className="uppercase text-4xl font-bold font-poppins">
                        IPDC AT A GLANCE
                    </h1>
                    <p className="mt-8 text-gray-600 font-poppins text-base w-2/3 tracking-widest">
                        IPDC Finance Limited (previously known as "Industrial
                        Promotion and Development Company of Bangladesh
                        Limited") is the first private sector financial
                        institution of the country established in 1981 by a
                        distinguished group of shareholders namely International
                        Finance Corporation (IFC), USA, German Investment and
                        Development Company (DEG), Germany, The Aga Khan Fund
                        for Economic Development (AKFED), Switzerland,
                        Commonwealth Development Corporation (CDC), UK and the
                        Government of Bangladesh
                    </p>
                    <div className="mt-12 ">
                        <a
                            href="#"
                            className="text-pink-600 font-poppins text-base font-semibold cursor-pointer flex items-center gap-2"
                        >
                            Read more{" "}
                            <BsArrowRightShort
                                className="read_more_btn"
                                color="#ED017F"
                                size={25}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
