import React from "react";
import Hero from "./components/hero";
import Platform from "./components/platform";
import Features from "./components/features";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export default function Page() {
    return (
        <React.Fragment>
            <Hero />
            <Platform />
            <Features />
            <ContactSection />
            <Footer />
        </React.Fragment>
    );
}
