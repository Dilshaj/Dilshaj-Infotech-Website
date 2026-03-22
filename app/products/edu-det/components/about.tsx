"use client";
import React, { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".about-text-content", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-text-content",
                    start: "top 90%",
                }
            });

            gsap.from(".about-impact-card", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-impact-card",
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={`${poppins.className} w-full bg-white text-black py-20 relative`} style={{ paddingBottom: "100px" }}>
            {/* About Ribbon (Left Edge) */}
            <div
                className="absolute left-0 top-16 flex items-center gap-2 pl-4 pr-10 py-2.5 shadow-md z-10"
                style={{
                    background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                    clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
                }}
            >
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
                <span className="text-white font-bold text-[18px] tracking-wider pr-4">About</span>
            </div>

            <div className="max-w-[1300px] mx-auto w-full px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-start mt-24">
                {/* Left Side */}
                <div className="max-w-[550px] ml-0 lg:ml-2 text-left about-text-content">
                    <h2 className="text-[32px] md:text-[46px] leading-[1.25] font-semibold lg:font-normal mb-4 lg:mb-6 text-[#111111] tracking-tight">
                        Building AI-Powered Careers <br className="block lg:inline" /> For Everyone
                    </h2>
                    <p className="text-[#606060] text-[14.5px] md:text-[15px] leading-[1.7] md:leading-[1.8] pr-4 lg:px-0">
                        EduProva is an intelligent ecosystem designed to help students,
                        professionals, freelancers, and founders learn, connect, earn, and
                        grow — all in one unified AI-driven platform.
                    </p>
                </div>

                {/* Right Side Cards Grid */}
                <div className="grid grid-cols-2 gap-4 lg:gap-5 mt-12 lg:mt-0 flex-shrink-0 w-full lg:w-auto">
                    <div className="bg-[#f8f9fc] rounded-[24px] w-full min-h-[160px] lg:w-[180px] lg:h-[160px] flex flex-col justify-center items-center p-3 text-center about-impact-card">
                        <h3 className="text-[28px] md:text-[32px] font-bold text-[#111] tracking-tight">10,000+</h3>
                        <p className="text-[12px] text-[#888888] mt-1 font-medium">Active Learners</p>
                    </div>
                    <div className="bg-[#000000] text-white rounded-[24px] w-full min-h-[160px] lg:w-[180px] lg:h-[160px] flex flex-col justify-center items-center shadow-lg p-3 text-center about-impact-card">
                        <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight">500+</h3>
                        <p className="text-[12px] text-[#9a9a9a] mt-1 font-medium">AI-Powered Courses</p>
                    </div>
                    <div className="bg-[#f8f9fc] rounded-[24px] w-full min-h-[160px] lg:w-[180px] lg:h-[160px] flex flex-col justify-center items-center p-3 text-center about-impact-card">
                        <h3 className="text-[28px] md:text-[32px] font-bold text-[#111] tracking-tight">1,200+</h3>
                        <p className="text-[12px] text-[#888888] mt-1 font-medium">Opportunities</p>
                    </div>
                    <div className="bg-[#f8f9fc] rounded-[24px] w-full min-h-[160px] lg:w-[180px] lg:h-[160px] flex flex-col justify-center items-center p-3 text-center about-impact-card">
                        <h3 className="text-[28px] md:text-[32px] font-bold text-[#111] tracking-tight">150+</h3>
                        <p className="text-[12px] text-[#888888] mt-1 font-medium">Startup Ideas Funded</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
