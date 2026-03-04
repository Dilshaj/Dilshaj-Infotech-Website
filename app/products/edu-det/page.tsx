import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Future from "./components/future";
import Build from "./components/build";

export default function Page() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Future />
            <Build />
        </React.Fragment>
    );
}
