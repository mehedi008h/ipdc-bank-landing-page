import React from "react";
import ResultCard from "../components/ResultCard";
import { results } from "../constants/date";

const Result = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center xl:w-4/5 lg:w-4/5 md:w-4/5 w-full px-2 mx-auto">
            <div className="my-8">
                <h1 className="font-poppins font-bold xl:text-4xl lg:text-4xl md:text-4xl text-3xl text-center">
                    Our best results for the year
                </h1>
                <p className="mt-8 text-gray-500 font-poppins text-center xl:w-2/3 lg:w-2/3 md:w-2/3 w-full mx-auto text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam bibendum eget morbi dignissim eu pharetra consequat
                    montes, sagittis.
                </p>

                <div className="grid grid-cols-12 gap-8 mt-16">
                    {results.map((item, index) => (
                        <div
                            key={index}
                            className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-6"
                        >
                            <ResultCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Result;
