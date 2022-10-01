import React from "react";
import {
    FaCarSide,
    FaHome,
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { banner_img } from "../constants/images";
import Navbar from "../components/Navbar";

const Banner = () => {
    return (
        <div className="banner_container min-h-screen">
            {/* navbar  */}
            <Navbar />
            {/* banner  */}
            <div className="flex justify-between xl:items-center lg:items-center md:items-center items-start banner relative">
                {/* banner description  */}
                <div className="xl:px-32 lg:px-32 md:px-32 px-4 xl:mt-0 lg:mt-0 md:mt-0 mt-20">
                    <h1 className="xl:text-6xl lg:text-6xl md:text-6xl text-5xl font-extrabold xl:text-start lg:text-start md:text-start text-center font-poppins">
                        Chase Your
                    </h1>
                    <h1 className="xl:text-6xl lg:text-6xl md:text-6xl text-5xl font-extrabold font-poppins xl:text-start lg:text-start md:text-start text-center">
                        Dream with us
                    </h1>
                    <p className="font-poppins mt-5 text-gray-500 xl:w-4/5 lg:w-4/5 md:w-4/5 w-full xl:text-start lg:text-start md:text-start text-center">
                        The harder you work for something, the greater you’ll
                        feel when you achieve it.
                    </p>

                    <div className="mt-8 flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4">
                        <button className="px-5 py-2 bg-pink-600  text-white rounded-md uppercase font-roboto font-medium tracking-wider hover:bg-pink-500 transition-all delay-100">
                            Apply online
                        </button>
                        <button className="px-5 py-1.5 text-pink-600 border-2 border-pink-500 rounded-md uppercase font-roboto font-medium tracking-wider hover:text-black hover:border-black transition-all delay-100">
                            Loan Calculation
                        </button>
                    </div>
                </div>

                {/* loans option  */}
                <div
                    className="absolute top-14 bg-white px-5 py-3 rounded-full shadow-lg xl:flex lg:flex md:flex hidden justify-center items-center gap-3"
                    style={{ left: "45%" }}
                >
                    <FaCarSide color="#ED017F" size={25} />
                    <p className="font-poppins font-bold">Car Loans</p>
                </div>

                <div className="absolute top-36 right-20 bg-white px-5 py-3 rounded-full shadow-lg xl:flex lg:flex md:flex hidden justify-center items-center gap-3">
                    <FaHome color="#ED017F" size={25} />
                    <p className="font-poppins font-bold">Home Loans</p>
                </div>

                {/* banner image  */}
                <div className="absolute right-0 xl:-bottom-20 lg:-bottom-20 md:-bottom-20 -bottom-20">
                    <img src={banner_img} alt="" />
                </div>
            </div>
            {/* banner footer  */}
            <div className="px-32 xl:flex lg:flex md:flex hidden items-center gap-5">
                <IoCallOutline size={30} color="#ED017F" />
                <p className="text-2xl font-poppins font-medium">16519</p>
                <p>|</p>
                <FaFacebookF
                    size={25}
                    color="#4A71FB"
                    className="cursor-pointer"
                />
                <FaYoutube
                    size={25}
                    color="#FF0000"
                    className="cursor-pointer"
                />
                <FaLinkedinIn
                    size={25}
                    color="#4A71FB"
                    className="cursor-pointer"
                />
                <FaInstagram
                    size={25}
                    color="#FF0000"
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Banner;
