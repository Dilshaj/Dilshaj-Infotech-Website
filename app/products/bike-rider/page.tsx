
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";


export default function ProductsDetPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col font-sans">
            
            <Hero />
            <About />
            <Features />
            
        </main>
    );
}
