"use client";
import React, { useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const featuresList = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: "Instant Booking",
        desc: "Book a ride in seconds with our user-friendly interface.",
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
        title: "Real-Time Tracking",
        desc: "Track your vehicle's location and estimate arrival precisely.",
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
        title: "Transparent Pricing",
        desc: "Upfront cost estimation without hidden charges or surges.",
    }
];

export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".feature-card",
                    start: "top 90%",
                }
            });

            gsap.from(".features-banner", {
                scale: 0.95,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".features-banner",
                    start: "top 95%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white font-sans py-16 md:py-24 px-4 md:px-8 lg:px-12 overflow-hidden">

            {/* Feature Cards Grid */}
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                {featuresList.map((f, i) => (
                    <div key={i} className="flex flex-col items-center text-center feature-card">
                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-primary-500 mb-6 shadow-sm border border-blue-100/50">
                            <span className="text-[#3799FA]">{f.icon}</span>
                        </div>
                        <h3 className={`${poppins.className} text-[20px] md:text-[24px] font-bold text-[#111] mb-4`}>
                            {f.title}
                        </h3>
                        <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.6]">
                            {f.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Large Banner Card (matches food and others) */}
            <div className="max-w-[1440px] mx-auto rounded-[32px] overflow-hidden relative shadow-2xl features-banner">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-[#0F1023] z-0 flex pointer-events-none">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#446CE4] to-transparent mix-blend-screen opacity-60"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#221035] to-transparent mix-blend-screen opacity-80"></div>
                </div>

                <div className="relative z-10 p-12 md:p-16 lg:px-24 flex flex-col items-center md:flex-row md:justify-between text-center md:text-left gap-8 md:gap-12">
                    <h2 className={`${poppins.className} text-[26px] md:text-[36px] lg:text-[42px] font-bold text-white leading-tight max-w-[700px]`}>
                        Build the Future of Smart<br className="hidden md:block" /> Urban Travel with Our Highly Scalable Rider Solution.
                    </h2>

                    {/* CTA Button */}
                    <div className="flex justify-center md:justify-end w-fit">
                        <button suppressHydrationWarning className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]">
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-gradient-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-700 ease-in-out group-hover:stroke-white"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-gradient-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                Get Updated
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}
