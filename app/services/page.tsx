import Hero from "./components/hero";
import Reasons from "./components/reasons";
import ServicesSection from "./components/services";
import Approach from "./components/approach";
import Journey from "./components/journey";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


export const metadata = {
    title: "Services | Dilshaj Infotech",
    description: "Explore our innovative digital solutions, scalable products, and industry-ready services designed to transform your business vision into reality.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#07050e] text-white overflow-hidden relative selection:bg-blue-500/30">
            <Hero />
            <Reasons />
            <ServicesSection />
            <Approach />
            <Journey />
            <ContactSection />
            <Footer />

        </main>
    );
}
