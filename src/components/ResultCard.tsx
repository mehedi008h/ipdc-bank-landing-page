import React, { FC } from "react";

interface Props {
    amount: string;
    content: string;
}

const ResultCard: FC<Props> = ({ amount, content }) => {
    return (
        <div className="p-6 rounded-md hover:shadow-lg hover:text-pink-600 transition-all delay-75">
            <h1 className="text-3xl font-semibold font-poppins">{amount}</h1>
            <p className="text-gray-500 font-semibold text-base uppercase font-poppins mt-6">
                {content}
            </p>
        </div>
    );
};

export default ResultCard;
