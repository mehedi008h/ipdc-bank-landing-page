import React from "react";
import { logo } from "../constants/images";

const Navbar = () => {
    return (
        <div className="w-full">
            <div className="h-24 w-4/5 mx-auto flex justify-between items-center">
                {/* logo */}
                <div>
                    <img src={logo} alt="" />
                </div>
                {/* link  */}
                <div className="flex gap-4 uppercase font-semibold font-poppins tracking-wide">
                    <a href="#">Retail</a>
                    <a href="#">Sme</a>
                    <a href="#">Corporate</a>
                    <a href="#">About us</a>
                    <a href="#">Covid 19</a>
                    <a href="#">Campgains</a>
                </div>

                <div>
                    <button className="px-4 py-2 bg-pink-600 text-white rounded-md font-roboto font-semibold tracking-widest hover:bg-pink-500 transition-all delay-100">
                        iSERVICE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
