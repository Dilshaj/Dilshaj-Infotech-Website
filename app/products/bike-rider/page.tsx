import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export default function ProductsDetPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col font-sans">
            <Hero />
            <About />
            <Features />
            <ContactSection />
            <Footer />
        </main>
    );
}
