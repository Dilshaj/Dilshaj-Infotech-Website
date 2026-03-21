import { Poppins } from "next/font/google";
import HeroSection from "./components/HeroSection";
import ServicePlatformSection from "./components/ServicePlatformSection";
import SpecialSection from "./components/SpecialSection";
import CtaSection from "./components/CtaSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export default function Products2Main() {
    return (
        <div className={`w-full min-h-screen bg-black ${poppins.className} flex flex-col md:block`}>
            {/* HERO SECTION */}
            <HeroSection />

            {/* ====== ABOUT / SERVICE PLATFORM SECTION ====== */}
            <ServicePlatformSection />

            {/* ====== WHAT MAKES IT SPECIAL SECTION ====== */}
            <SpecialSection />

            {/* ====== CTA SECTION ====== */}
            <CtaSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
