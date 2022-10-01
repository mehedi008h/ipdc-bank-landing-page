import React from "react";

const Newslater = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-pink-50">
            <div className="my-24">
                <h1 className="font-poppins font-bold xl:text-4xl lg:text-4xl md:text-4xl text-3xl text-center">
                    Newsletter
                </h1>
                <p className="mt-8 text-gray-500 font-poppins text-center xl:w-2/3 lg:w-2/3 md:w-2/3 w-full mx-auto text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam bibendum eget morbi dignissim eu pharetra consequat
                    montes, sagittis.
                </p>

                <div className="mt-12 mb-4 flex xl:flex-row lg:flex-row md:flex-row flex-col items-center justify-center gap-4">
                    <input
                        className="px-4 py-3.5 xl:w-1/4 lg:w-1/4 md:w-1/4 w-3/4 outline-none bg-white"
                        type="email"
                        placeholder="Your email ..."
                    />
                    <button className="px-5 py-3 bg-pink-600 text-white uppercase">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newslater;
