import React from "react";
import { ServiceCard } from "../components";
import { services } from "../constants/date";

const Service = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center w-4/5 mx-auto">
            <h1 className="font-poppins font-bold text-4xl text-center">
                Our Service
            </h1>
            <p className="mt-8 text-gray-500 font-poppins text-center w-2/3 mx-auto text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                bibendum eget morbi dignissim eu pharetra consequat montes,
                sagittis.
            </p>

            <div className="grid grid-cols-12 gap-8 mt-16">
                {services.map((item) => (
                    <div
                        key={item.title}
                        className="lg:col-span-3 md:col-span-3 sm:col-span-6"
                    >
                        <ServiceCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
