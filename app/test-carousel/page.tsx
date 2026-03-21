import ConvexCarousel from "@/app/components/ConvexCarousel";

export const metadata = {
    title: "3D Convex Carousel Demo",
    description: "A demonstration of the 3D Convex Carousel component.",
};

export default function TestCarouselPage() {
    return (
        <main className="min-h-screen bg-slate-950 flex items-center justify-center">
            <ConvexCarousel />
        </main>
    );
}
