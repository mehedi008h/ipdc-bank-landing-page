import React, { FC } from "react";

interface Props {
    logo: string;
    title: string;
    description: string;
}

const ExprienceCard: FC<Props> = ({ logo, title, description }) => {
    return (
        <div className="p-4 bg-white rounded-md hover:shadow-xl transition-all delay-100">
            <img src={logo} alt={title} />
            <h3 className="mt-3 text-xl font-semibold font-poppins">{title}</h3>
            <p className="mt-3 text-base font-poppins text-gray-500">
                {description}
            </p>
        </div>
    );
};

export default ExprienceCard;
