import Hero from "./components/hero";
import Features from "./components/features";
import ComprehensiveFeatures from "./components/comprehensive-features";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export default function DoctorPage() {
    return (
        <main className="min-h-screen bg-[#07131C] flex flex-col font-sans">
            <Hero />
            <Features />
            <ComprehensiveFeatures />
            <ContactSection />
            <Footer />
        </main>
    );
}
