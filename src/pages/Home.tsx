import React from "react";
import About from "./About";
import Banner from "./Banner";

import CustomerExprience from "./CustomerExprience";

const Home = () => {
    return (
        <div>
            <Banner />
            <CustomerExprience />
            <About />
        </div>
    );
};

export default Home;
