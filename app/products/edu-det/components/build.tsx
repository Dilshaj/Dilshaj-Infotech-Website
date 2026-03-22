"use client";
import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Build() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".build-header", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".build-header",
                    start: "top 90%",
                }
            });

            gsap.from(".build-content-reveal", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".build-content-reveal",
                    start: "top 95%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={`${poppins.className} w-full relative bg-white pt-24 pb-12 overflow-hidden flex flex-col items-center`}>
            <h2 className="text-[24px] xs:text-[26.5px] sm:text-[32px] md:text-[40px] lg:text-[52px] font-medium text-center tracking-normal sm:tracking-[0.1em] lg:tracking-[0.15em] text-[#1a1a1a] mb-[5px] lg:mb-[-60px] z-20 md:whitespace-nowrap sm:scale-y-105 w-full max-w-[342px] md:max-w-none mx-auto flex flex-col md:block items-center justify-center gap-1 md:gap-0 leading-[1.3] md:leading-[1.4] build-header">
                <span className="whitespace-nowrap">BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c084fc] font-semibold">CAREER</span> WITH</span>
                <span className="md:ml-3">CONFIDENCE</span>
            </h2>

            <div className="relative w-full max-w-none flex justify-center items-center mt-2 px-0 overflow-hidden">
                <div className="relative w-full z-10 block overflow-visible">
                    <Image
                        src="/products/edu-det/build.png"
                        alt="Build your career with confidence"
                        width={1800}
                        height={936}
                        className="object-contain w-[165%] sm:w-[120%] lg:w-[110%] max-w-none relative left-[50%] -translate-x-[50%]"
                        priority
                    />
                </div>

                {/* Massive White Fade Overlay directly masking the image */}
                <div
                    className="absolute bottom-[0px] md:bottom-[-60px] left-0 right-0 h-[150px] md:h-[450px] z-20 pointer-events-none"
                    style={{
                        background: "linear-gradient(to top, rgba(255,255,255,1) 15%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%)"
                    }}
                />
                {/* Left Fade Overlay */}
                <div
                    className="absolute inset-y-0 left-0 w-[60px] sm:w-[150px] md:w-[300px] lg:w-[400px] z-20 pointer-events-none"
                    style={{
                        background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
                    }}
                />
                {/* Right Fade Overlay */}
                <div
                    className="absolute inset-y-0 right-0 w-[60px] sm:w-[150px] md:w-[300px] lg:w-[400px] z-20 pointer-events-none"
                    style={{
                        background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
                    }}
                />
            </div>

            {/* Footer Text & App Store Button */}
            <div className="relative z-30 flex flex-col items-center max-w-[900px] text-center mt-[-30px] sm:mt-[-50px] md:mt-[-160px] lg:mt-[-220px] px-4">
                <p className="text-[#333333] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.7] md:leading-[1.8] font-medium mb-8 sm:mb-10 px-4 build-content-reveal">
                    EduProva is your AI-powered growth engine for students, professionals, freelancers, and
                    founders. Learn smarter, connect better, and unlock real-world opportunities.
                </p>

                <div className="build-content-reveal">
                    <button suppressHydrationWarning className="flex items-center group relative h-12 w-fit cursor-pointer">
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5"><polyline points="9 18 15 12 9 6" /></svg>
                        </div>
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                            Download on App Store
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
