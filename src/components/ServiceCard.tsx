import React, { FC } from "react";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
    logo: string;
    title: string;
    type: string;
}

const ServiceCard: FC<Props> = ({ logo, title, type }) => {
    return (
        <div>
            <img src={logo} alt={title} />
            <div className="flex justify-between items-center mt-3">
                <div>
                    <h3 className="text-gray-600 font-semibold xl:text-2xl lg:text-2xl md:text-2xl text-xl uppercase font-poppins">
                        {title}
                    </h3>
                    <h3 className="text-gray-500 font-semibold text-xl uppercase font-poppins">
                        {type}
                    </h3>
                </div>
                <div className="h-8 w-8 rounded-full bg-pink-200 hover:bg-pink-100 flex justify-center items-center transition-all delay-100 cursor-pointer">
                    <BsArrowRightShort color="#ED017F" size={23} />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
