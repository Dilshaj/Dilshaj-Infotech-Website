import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Special from "./components/special";
import Launch from "./components/launch";

export default function Page() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Special />
            <Launch />
        </React.Fragment>
    );
}
