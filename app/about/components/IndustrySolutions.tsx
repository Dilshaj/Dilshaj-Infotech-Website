import { useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const industryCards = [
    {
        id: 1,
        type: "image",
        image: "/industry-solutions/business.png",
        alt: "Modern Business Architecture",
    },
    {
        id: 2,
        type: "image",
        image: "/industry-solutions/growth.png",
        alt: "Financial Growth and Digital ROI",
    },
    {
        id: 3,
        type: "content",
        title: "Food & Restaurant",
        bullets: [
            "Menu Optimization Intelligence",
            "Inventory & Supply Automation",
            "Food Safety Monitoring",
            "AI Customer Engagement",
        ],
        ctaText: "Partner With Us",
    },
    {
        id: 4,
        type: "image",
        image: "/industry-solutions/ecommerce.png",
        alt: "Digital Retail and E-commerce",
    },
    {
        id: 5,
        type: "image",
        image: "/industry-solutions/healthcare.png",
        alt: "Future of Healthcare Technology",
    },
];

export default function IndustrySolutions() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".industry-card");

        gsap.fromTo(cards,
            {
                y: 60,
                opacity: 0,
                immediateRender: false
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    onEnter: () => ScrollTrigger.refresh()
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            ` }} />

            <div className="max-w-[1920px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight-4">
                        Transforming Industries with Intelligent <br className="hidden md:block " /> <span className="mt-6 block">Digital Solutions</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                        We combine domain expertise and advanced technology to deliver measurable impact across diverse sectors.
                    </p>
                </div>

                {/* Desktop: Single Row | Tablet: 2 Cols | Mobile: 1 Col */}
                <div ref={containerRef} className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-center gap-6 lg:gap-8 items-center overflow-x-auto pb-4 no-scrollbar">
                    {industryCards.map((card) => (
                        <div
                            key={card.id}
                            className="industry-card opacity-0 relative flex-shrink-0 w-full md:max-w-none lg:w-[371px] lg:h-[467px] aspect-[371/467] rounded-[32px] overflow-hidden shadow-xl group transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            {card.type === "image" ? (
                                <Image
                                    src={card.image!}
                                    alt={card.alt!}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="relative w-full h-full">
                                    {/* Background with Gradient instead of Image to be safer/cleaner for Card 3 */}
                                    <div className="absolute inset-0 bg-[#0A0A0B]">
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_40%_40%,_#3b82f6_0%,_transparent_60%)]" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative h-full p-8 sm:p-10 flex flex-col justify-between z-10 text-left">
                                        <div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                                                {card.title}
                                            </h3>
                                            <ul className="space-y-4">
                                                {card.bullets?.map((bullet, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button suppressHydrationWarning className="group/btn flex items-center relative h-12 w-fit cursor-pointer">
                                            {/* LEFT ICON CIRCLE */}
                                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                                                <ChevronRight className="w-4 h-4 text-[#3799FA]" />
                                            </div>

                                            {/* MAIN BUTTON BODY */}
                                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                                                {card.ctaText}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
