"use client";

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ServicesDetail from "./components/ServicesDetail";
import WhyChooseUs from "./components/WhyChooseUs";
import AISolutions from "./components/AISolutions";
import IndustrySolutions from "./components/IndustrySolutions";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


export default function AboutPage() {
    return (
        <main className="flex flex-col w-full min-h-screen">
            <Hero />
            <Stats />
            <ServicesDetail />
            <WhyChooseUs />
            <AISolutions />
            <IndustrySolutions />
            <TechStack />
            <Testimonials />
            <FAQ />
            <ContactSection />
            <Footer />

        </main>
    );
}
