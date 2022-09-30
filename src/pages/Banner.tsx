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
            <div className="flex justify-between items-center banner relative">
                {/* banner description  */}
                <div className="px-32">
                    <h1 className="text-6xl font-extrabold font-poppins">
                        Chase Your
                    </h1>
                    <h1 className="text-6xl font-extrabold font-poppins">
                        Dream with us
                    </h1>
                    <p className="font-poppins mt-5 text-gray-500 w-4/5">
                        The harder you work for something, the greater you’ll
                        feel when you achieve it.
                    </p>

                    <div className="mt-8 flex gap-4">
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
                    className="absolute top-14 bg-white px-5 py-3 rounded-full shadow-lg flex justify-center items-center gap-3"
                    style={{ left: "45%" }}
                >
                    <FaCarSide color="#ED017F" size={25} />
                    <p className="font-poppins font-bold">Car Loans</p>
                </div>

                <div className="absolute top-36 right-20 bg-white px-5 py-3 rounded-full shadow-lg flex justify-center items-center gap-3">
                    <FaHome color="#ED017F" size={25} />
                    <p className="font-poppins font-bold">Home Loans</p>
                </div>

                {/* banner image  */}
                <div className="absolute right-0 -bottom-20">
                    <img src={banner_img} alt="" />
                </div>
            </div>
            {/* banner footer  */}
            <div className="px-32 flex items-center gap-5">
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
