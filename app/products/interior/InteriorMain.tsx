import { Poppins } from "next/font/google";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import CtaSection from "./components/CtaSection";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export default function InteriorMain() {
    return (
        <div className={`w-full flex flex-col ${poppins.className}`}>
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <CtaSection />
        </div>
    );
}
