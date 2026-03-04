import { Poppins } from "next/font/google";
import HeroSection from "./components/HeroSection";
import SpecialSection from "./components/SpecialSection";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export default function DigitalNewsMain() {
    return (
        <div className={`w-full min-h-screen bg-black ${poppins.className} flex flex-col md:block overflow-hidden`}>
            <HeroSection />
            <AboutSection />
            <CtaSection />
            <SpecialSection />
        </div>
    );
}
