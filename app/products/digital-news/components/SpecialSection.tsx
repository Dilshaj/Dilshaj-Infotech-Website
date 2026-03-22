"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "../images/whatspecialback.png";

export default function SpecialSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".special-header", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".special-header",
                    start: "top 85%",
                }
            });

            gsap.from(".special-card", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".special-card",
                    start: "top 90%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-black py-16 md:py-24 px-6 md:px-12 xl:px-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0 opacity-50 xl:opacity-40 pointer-events-none">
                <Image
                    src={bgImage}
                    alt="Section background grid"
                    fill
                    className="object-cover object-bottom"
                />
            </div>
            {/* Black fade gradient mask over bottom of background */}
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>

            <div className="max-w-[1240px] mx-auto relative z-10 w-full">
                {/* Header Area */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-12 md:mb-16 special-header">
                    <div className="w-full xl:w-1/2 flex flex-col items-start text-left">
                        <h3
                            className="font-semibold uppercase mb-4"
                            style={{
                                backgroundImage: "linear-gradient(90deg, #20B5F9 0%, #A851ED 100%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                fontSize: "clamp(16px, 2vw, 24px)",
                                letterSpacing: "0%",
                                lineHeight: "100%",
                            }}
                        >
                            WHAT MAKES IT SPECIAL
                        </h3>
                        <h2
                            className="text-white font-semibold"
                            style={{
                                fontSize: "clamp(36px, 4vw, 52px)",
                                lineHeight: "126%",
                                letterSpacing: "0%",
                            }}
                        >
                            Powerful Features.<br className="hidden md:block" /> Seamless Experience.
                        </h2>
                    </div>

                    <div className="w-full xl:w-[45%]">
                        <p
                            className="font-normal"
                            style={{
                                color: "#FFFFFFB8",
                                fontSize: "clamp(18px, 2vw, 24px)",
                                lineHeight: "140%",
                                letterSpacing: "0%",
                            }}
                        >
                            Built with scalable technology and high-performance infrastructure, our platform ensures speed, security, and uninterrupted access to information.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6 xl:gap-8 p-2">
                    {/* Card 01 */}
                    <div className="bg-[#202022] rounded-[24px] p-8 md:p-10 flex flex-col h-full border border-white/5 relative group shadow-2xl transition-all special-card">
                        <div className="flex justify-between items-start mb-8 md:mb-12 w-full">
                            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-[#20B5F9] to-[#A851ED]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                                </svg>
                            </div>
                            <span
                                className="text-white font-semibold mt-1"
                                style={{
                                    fontSize: "clamp(28px, 3vw, 36px)",
                                    lineHeight: "100%",
                                }}
                            >
                                01
                            </span>
                        </div>
                        <h4
                            className="text-white font-medium mb-4"
                            style={{
                                fontSize: "clamp(24px, 2.5vw, 32px)",
                                lineHeight: "120%",
                            }}
                        >
                            Live Breaking<br className="hidden lg:block" /> News
                        </h4>
                        <p
                            className="font-normal"
                            style={{
                                color: "#FFFFFF80",
                                fontSize: "clamp(16px, 1.5vw, 20px)",
                                lineHeight: "140%",
                            }}
                        >
                            Instant alerts and real-time updates as events unfold.
                        </p>
                    </div>

                    {/* Card 02 */}
                    <div className="bg-[#202022] rounded-[24px] p-8 md:p-10 flex flex-col h-full border border-white/5 relative group shadow-2xl transition-all special-card">
                        <div className="flex justify-between items-start mb-8 md:mb-12 w-full">
                            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-[#20B5F9] to-[#A851ED]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                            </div>
                            <span
                                className="text-white font-semibold mt-1"
                                style={{
                                    fontSize: "clamp(28px, 3vw, 36px)",
                                    lineHeight: "100%",
                                }}
                            >
                                02
                            </span>
                        </div>
                        <h4
                            className="text-white font-medium mb-4"
                            style={{
                                fontSize: "clamp(24px, 2.5vw, 32px)",
                                lineHeight: "120%",
                            }}
                        >
                            Personalized<br className="hidden lg:block" /> News Feed
                        </h4>
                        <p
                            className="font-normal"
                            style={{
                                color: "#FFFFFF80",
                                fontSize: "clamp(16px, 1.5vw, 20px)",
                                lineHeight: "140%",
                            }}
                        >
                            AI-powered content suggestions based on user interests.
                        </p>
                    </div>

                    {/* Card 03 */}
                    <div className="bg-[#202022] rounded-[24px] p-8 md:p-10 flex flex-col h-full border border-white/5 relative group shadow-2xl transition-all special-card">
                        <div className="flex justify-between items-start mb-8 md:mb-12 w-full">
                            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-[#20B5F9] to-[#A851ED]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22l-3-3-4 1 1-4-3-3 3-3-1-4 4 1 3-3 3 3 4-1-1 4 3 3-3 3 1 4-4-1z"></path>
                                    <path d="M9 12l2 2 4-4"></path>
                                </svg>
                            </div>
                            <span
                                className="text-white font-semibold mt-1"
                                style={{
                                    fontSize: "clamp(28px, 3vw, 36px)",
                                    lineHeight: "100%",
                                }}
                            >
                                03
                            </span>
                        </div>
                        <h4
                            className="text-white font-medium mb-4"
                            style={{
                                fontSize: "clamp(24px, 2.5vw, 32px)",
                                lineHeight: "120%",
                            }}
                        >
                            Trusted & Verified<br className="hidden lg:block" /> Reporting
                        </h4>
                        <p
                            className="font-normal"
                            style={{
                                color: "#FFFFFF80",
                                fontSize: "clamp(16px, 1.5vw, 20px)",
                                lineHeight: "140%",
                            }}
                        >
                            Fact-checked journalism ensuring credibility and transparency.
                        </p>
                    </div>
                </div>

                {/* Optional pager dots at bottom center for desktop styling (seen in design) */}
                <div className="hidden lg:flex justify-end mt-12 gap-2">
                    <div className="w-[30px] h-[4px] rounded-full bg-gradient-to-r from-[#20B5F9] to-[#A851ED]"></div>
                    <div className="w-[8px] h-[4px] rounded-full bg-[#FFFFFF30]"></div>
                </div>
            </div>
        </section>
    );
}
