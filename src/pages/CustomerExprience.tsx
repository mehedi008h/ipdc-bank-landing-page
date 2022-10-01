import React from "react";
import { ExprienceCard } from "../components";
import { data } from "../constants/date";

const CustomerExprience = () => {
    return (
        <div className="min-h-screen xl:w-4/5 lg:w-4/5 md:w-4/5 w-full px-2 mx-auto flex justify-center">
            <div className="my-16">
                <h1 className="font-poppins font-bold xl:text-4xl lg:text-4xl md:text-4xl text-3xl text-center">
                    Creating Extraordinary Customer Experience
                </h1>
                <p className="mt-8 text-gray-500 font-poppins text-center xl:w-2/3 lg:w-2/3 md:w-2/3 w-full mx-auto text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam bibendum eget morbi dignissim eu pharetra consequat
                    montes, sagittis.
                </p>

                <div className="grid grid-cols-12 gap-8 mt-16">
                    {data.map((item) => (
                        <div
                            key={item.title}
                            className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-6"
                        >
                            <ExprienceCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomerExprience;
