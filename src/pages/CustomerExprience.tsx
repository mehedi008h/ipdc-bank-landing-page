import React from "react";
import ExprienceCard from "../components/ExprienceCard";
import { data } from "../constants/date";

const CustomerExprience = () => {
    return (
        <div className="min-h-screen w-4/5 mx-auto flex justify-center">
            <div className="my-16">
                <h1 className="font-poppins font-bold text-4xl text-center">
                    Creating Extraordinary Customer Experience
                </h1>
                <p className="mt-8 text-gray-500 font-poppins text-center w-2/3 mx-auto text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam bibendum eget morbi dignissim eu pharetra consequat
                    montes, sagittis.
                </p>

                <div className="grid grid-cols-12 gap-8 mt-16">
                    {data.map((item) => (
                        <div
                            key={item.title}
                            className="lg:col-span-3 md:col-span-3 sm:col-span-6"
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
