import React from "react";
import { Footer } from "../components";
import About from "./About";
import Banner from "./Banner";

import CustomerExprience from "./CustomerExprience";
import Newslater from "./Newslater";
import Result from "./Result";
import Service from "./Service";

const Home = () => {
    return (
        <div>
            <Banner />
            <CustomerExprience />
            <About />
            <Service />
            <Result />
            <Newslater />
            <Footer />
        </div>
    );
};

export default Home;
