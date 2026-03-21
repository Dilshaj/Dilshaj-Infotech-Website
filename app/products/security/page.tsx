import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Special from "./components/special";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export default function Page() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Special />
            <ContactSection />
            <Footer />
        </React.Fragment>
    );
}
