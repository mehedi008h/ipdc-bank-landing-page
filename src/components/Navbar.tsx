import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { CgMenuRound } from "react-icons/cg";
import { motion } from "framer-motion";
import { logo } from "../constants/images";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="w-full">
            <div className="h-24 w-4/5 mx-auto flex justify-between items-center">
                {/* logo */}
                <div>
                    <img src={logo} alt="" />
                </div>
                {/* link  */}
                <div className="xl:flex lg:flex md:flex hidden gap-4 uppercase font-semibold font-poppins tracking-wide">
                    <a href="#" className="link">
                        Retail
                    </a>
                    <a href="#" className="link">
                        Sme
                    </a>
                    <a href="#" className="link">
                        Corporate
                    </a>
                    <a href="#" className="link">
                        About us
                    </a>
                    <a href="#" className="link">
                        Covid 19
                    </a>
                    <a href="#" className="link">
                        Campgains
                    </a>
                </div>

                <div className="xl:flex lg:flex md:flex hidden">
                    <button className="px-4 py-2 bg-pink-600 text-white rounded-md font-roboto font-semibold tracking-widest hover:bg-pink-500 transition-all delay-100">
                        iSERVICE
                    </button>
                </div>
                <div className="xl:hidden lg:hidden md:hidden flex app__navbar-menu">
                    <CgMenuRound
                        color="#DB2777"
                        size="35"
                        onClick={() => setToggle(true)}
                    />

                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                            className="mb_nav"
                        >
                            <HiX onClick={() => setToggle(false)} size="30" />
                            <ul className="link_items">
                                {[
                                    "Retail",
                                    "Sme",
                                    "Corporate",
                                    "About us",
                                    "Covid 19",
                                    "Campgains",
                                ].map((item) => (
                                    <li key={item} className="link_item">
                                        <a
                                            href={`#${item}`}
                                            onClick={() => setToggle(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
