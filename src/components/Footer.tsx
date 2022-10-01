import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="flex">
            <div className="w-4/5 mx-auto my-12">
                <div className="grid grid-cols-12 gap-6 font-poppins">
                    <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-12">
                        <h3 className="text-2xl font-medium">
                            About the company
                        </h3>
                        <p className="mt-6 text-gray-500 xl:w-3/4 lg:w-3/4 md:w-3/4 w-full">
                            Learn To Love Growth And Change And You Will Be A
                            Success. Microsoft Patch{" "}
                        </p>
                        <div className="flex gap-3 mt-10">
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
                    <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-6">
                        <h3 className="text-2xl font-medium">Products</h3>
                        <div className="flex flex-col gap-2 mt-6 text-gray-500">
                            <a href="#">CSR Activities</a>
                            <a href="#">Green Banking</a>
                            <a href="#">News</a>
                            <a href="#">Ongoing Campgain</a>
                            <a href="#">Updates</a>
                        </div>
                    </div>
                    <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-6">
                        <h3 className="text-2xl font-medium">Get Started</h3>
                        <div className="flex flex-col gap-2 mt-6 text-gray-500">
                            <a href="#">Career</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Government Securities</a>
                            <a href="#">Examples</a>
                            <a href="#">NIS</a>
                        </div>
                    </div>
                    <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-6">
                        <h3 className="text-2xl font-medium">About</h3>
                        <div className="flex flex-col gap-2 mt-6 text-gray-500">
                            <a href="#">IPDC at a Glance</a>
                            <a href="#">Mission, VIsion & Values</a>
                            <a href="#">Corporate Governanace</a>
                            <a href="#">Shareholders</a>
                            <a href="#">Investor Relations</a>
                        </div>
                    </div>
                    <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-6">
                        <div className="flex gap-2">
                            <IoCallOutline size={30} color="#ED017F" />
                            <p className="text-2xl font-poppins font-medium">
                                16519
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
