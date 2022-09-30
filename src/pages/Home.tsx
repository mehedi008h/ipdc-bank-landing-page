import React from "react";
import About from "./About";
import Banner from "./Banner";

import CustomerExprience from "./CustomerExprience";
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
        </div>
    );
};

export default Home;
