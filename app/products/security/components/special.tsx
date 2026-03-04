"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Shield, Navigation, AlertTriangle } from "lucide-react";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const features = [
    {
        num: "01",
        icon: Shield,
        title: "Real-Time Security Monitoring",
        desc: "Live tracking with continuous route monitoring for enhanced safety.",
    },
    {
        num: "02",
        icon: Navigation,
        title: "Smart GPS Navigation",
        desc: "Accurate turn-by-turn directions with optimized route suggestions.",
    },
    {
        num: "03",
        icon: AlertTriangle,
        title: "Emergency SOS Alert",
        desc: "Instant alerts to emergency contacts with live location sharing.",
    },
];

export default function Special() {
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardsRef.current) return;

        const cards = cardsRef.current.querySelectorAll(".feature-card");

        // Set initial hidden state via GSAP (not CSS) so cards show if JS fails
        gsap.set(cards, { y: 80, opacity: 0 });

        ScrollTrigger.refresh();

        gsap.to(
            cards,
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section className={`${poppins.className} relative w-full overflow-hidden bg-[#070e1d]`}>

            {/* Background image — grid/circuit pattern */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/products/security/special.png"
                    alt="Special Background"
                    fill
                    className="object-cover object-bottom opacity-60"
                />
                {/* Top fade to blend with about section */}
                <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#070e1d] to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-14 pt-[70px] lg:pt-[90px] pb-[80px] lg:pb-[110px]">

                {/* Top header row */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-y-4 lg:gap-x-12 mb-12 lg:mb-16">

                    {/* Left — labels + heading */}
                    <div>
                        <p className="text-[#60a5fa] text-[12px] sm:text-[13px] font-[700] uppercase tracking-[2px] mb-3">
                            What Makes It Special
                        </p>
                        <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-[800] text-white leading-[1.2] tracking-tight max-w-[420px]">
                            Powerful Features for Safer Navigation
                        </h2>
                    </div>

                    {/* Right — tagline */}
                    <div className="flex items-center lg:items-start lg:pt-8">
                        <p className="text-[#9ca3af] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] max-w-[420px]">
                            Advanced security tools and intelligent navigation technology designed to keep every journey safe, smart, and stress-free.
                        </p>
                    </div>
                </div>

                {/* Feature Cards — GSAP animates from bottom */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
                >
                    {features.map((feat, idx) => (
                        <div
                            key={idx}
                            className="feature-card bg-[#0d1a2e]/80 border border-white/5 rounded-[16px] p-7 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[230px] lg:min-h-[250px] backdrop-blur-sm hover:border-white/15 transition-all duration-300"
                        >
                            {/* Top row: icon + number */}
                            <div className="flex items-center justify-between mb-8 lg:mb-10">
                                <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#3b82f6]/40 to-[#a855f7]/30 border border-[#3b82f6]/40 flex items-center justify-center">
                                    <feat.icon size={24} className="text-[#60a5fa]" strokeWidth={1.8} />
                                </div>
                                <span className="text-white/25 text-[30px] font-[800] leading-none tracking-tight">
                                    {feat.num}
                                </span>
                            </div>

                            {/* Title & desc */}
                            <div>
                                <h3 className="text-white text-[17px] sm:text-[18px] font-[700] mb-3 leading-[1.3]">
                                    {feat.title}
                                </h3>
                                <p className="text-[#9ca3af] text-[13px] sm:text-[14px] leading-[1.65]">
                                    {feat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
