import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Future from "./components/future";
import Build from "./components/build";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export default function Page() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Future />
            <Build />
            <ContactSection />
            <Footer />
        </React.Fragment>
    );
}
