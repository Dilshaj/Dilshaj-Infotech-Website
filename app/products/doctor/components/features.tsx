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

export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".features-header", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".features-header",
                    start: "top 85%",
                }
            });

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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#04090E] py-20 pb-28 min-h-[500px] flex flex-col items-center justify-center font-sans overflow-hidden">

            {/* Top faded gradient for the header boundary */}
            <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#07131C] to-transparent pointer-events-none"></div>

            {/* Bottom Grid Overlay */}
            <div
                className="absolute bottom-0 left-0 w-full h-[250px] pointer-events-none opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 10px',
                    transform: 'perspective(500px) rotateX(60deg)',
                    transformOrigin: 'bottom center',
                }}
            ></div>

            {/* Heading */}
            <div className="relative z-10 flex flex-col items-center mb-16 max-md:-mt-20 features-header">
                <h2 className={`${poppins.className} max-md:whitespace-nowrap max-md:text-[20px] text-[32px] md:text-[40px] font-bold text-white mb-2 text-center`}>
                    Healthcare Made Simple
                </h2>
                {/* Gradient underline */}
                <div className="w-[180px] h-[4px] bg-gradient-to-r from-[#0094F0] via-[#459CFF] to-[#A26DFF] rounded-full"></div>
            </div>

            {/* Cards Grid */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                {/* Card 1 */}
                <div className="bg-[#1C1C1E] border border-white/[0.05] rounded-[16px] p-8 md:p-10 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_30px_0_rgba(0,0,0,0.5)] feature-card">
                    <div className="flex items-start justify-between mb-8">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#459CFF] to-[#A26DFF] flex items-center justify-center shadow-[0_0_15px_rgba(69,156,255,0.4)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
                                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
                                <circle cx="20" cy="10" r="2"></circle>
                            </svg>
                        </div>
                        <span className={`${poppins.className} text-white font-bold text-[24px] opacity-90`}>
                            01
                        </span>
                    </div>

                    <h3 className={`${poppins.className} text-[20px] md:text-[22px] font-semibold text-white mb-4 leading-[1.4]`}>
                        Find a Specialist<br />Doctor
                    </h3>
                    <p className="text-[#8B91A3] text-[15px] leading-[1.6]">
                        Browse verified doctors by specialty, ratings, and availability.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1C1C1E] border border-white/[0.05] rounded-[16px] p-8 md:p-10 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_30px_0_rgba(0,0,0,0.5)] feature-card">
                    <div className="flex items-start justify-between mb-8">
                        <div className="w-12 h-12 rounded-full bg-[#459CFF] flex items-center justify-center shadow-[0_0_15px_rgba(69,156,255,0.4)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <span className={`${poppins.className} text-white font-bold text-[24px] opacity-90`}>
                            02
                        </span>
                    </div>

                    <h3 className={`${poppins.className} text-[20px] md:text-[22px] font-semibold text-white mb-4 leading-[1.4]`}>
                        Book an<br />Appointment
                    </h3>
                    <p className="text-[#8B91A3] text-[15px] leading-[1.6]">
                        AI-powered content suggestions based on user interests.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#1C1C1E] border border-white/[0.05] rounded-[16px] p-8 md:p-10 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_30px_0_rgba(0,0,0,0.5)] feature-card">
                    <div className="flex items-start justify-between mb-8">
                        <div className="w-12 h-12 rounded-full bg-[#459CFF] flex items-center justify-center shadow-[0_0_15px_rgba(69,156,255,0.4)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <span className={`${poppins.className} text-white font-bold text-[24px] opacity-90`}>
                            03
                        </span>
                    </div>

                    <h3 className={`${poppins.className} text-[20px] md:text-[22px] font-semibold text-white mb-4 leading-[1.4]`}>
                        Consult & Receive<br />Prescription
                    </h3>
                    <p className="text-[#8B91A3] text-[15px] leading-[1.6]">
                        Connect securely via video call and receive digital prescriptions instantly.
                    </p>
                </div>

            </div>

        </section>
    );
}
