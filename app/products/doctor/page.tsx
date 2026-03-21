import Hero from "./components/hero";
import Features from "./components/features";
import ComprehensiveFeatures from "./components/comprehensive-features";

export default function DoctorPage() {
    return (
        <main className="min-h-screen bg-[#07131C] flex flex-col font-sans">
            <Hero />
            <Features />
            <ComprehensiveFeatures />
        </main>
    );
}
