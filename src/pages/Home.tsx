import React from "react";
import About from "./About";
import Banner from "./Banner";

import CustomerExprience from "./CustomerExprience";
import Service from "./Service";

const Home = () => {
    return (
        <div>
            <Banner />
            <CustomerExprience />
            <About />
            <Service />
        </div>
    );
};

export default Home;
