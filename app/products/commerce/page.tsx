import React from "react";
import Hero from "./components/hero";
import Platform from "./components/platform";
import Features from "./components/features";

export default function Page() {
    return (
        <React.Fragment>
            <Hero />
            <Platform />
            <Features />
        </React.Fragment>
    );
}
