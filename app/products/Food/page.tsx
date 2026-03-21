import Hero from './components/hero';
import About from './components/about';
import Features from './components/features';
import CTA from './components/cta';

export default function FoodPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <About />
            <CTA />
            <Features />
        </main>
    );
}
