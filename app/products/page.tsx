import HeroSection from "./components/hero-section";
import CardsSection from "./components/cards";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { FilterProvider } from "./context/FilterContext";


export default function ProductsPage() {
    return (
        <FilterProvider>
            <main className="w-full flex flex-col flex-1 bg-[#020617] overflow-x-hidden">
                <HeroSection />
                <CardsSection />
                <ContactSection />
                <Footer />
            </main>
        </FilterProvider>
    );
}
