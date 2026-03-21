"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ChevronRight, Check } from "lucide-react";
import { FaReact, FaNodeJs, FaAws, FaFlutter, FaChevronRight } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left Column Text Animations
            gsap.from(".gsap-hero-text", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Right Column Robot Animation
            gsap.from(".gsap-hero-robot", {
                x: 80,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            // Bottom Cards Animation
            gsap.from(".gsap-hero-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".gsap-hero-card-container",
                    start: "top 90%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${poppins.className} relative w-full pt-[90px] lg:pt-[80px] pb-6 flex flex-col justify-start min-h-screen bg-[#07050e] overflow-hidden`}
        >
            {/* Background Image (User specified 2,3 images mapped to /services/bg.png and /services/hero.png) */}
            <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0 opacity-90 pointer-events-none">
                <Image
                    src="/services/Rectanglebg.png"
                    alt="Abstract Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="right center"
                    priority
                />
                {/* Fallback subtle subtle grid overlay just in case image is missing */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#07050e] via-[#07050e]/80 to-transparent"></div>
                {/* Subtle vertical lines similar to the image */}
                <div className="absolute right-[40%] top-0 w-[1px] h-full bg-[#8e54e9]/20 hidden lg:block"></div>
                <div className="absolute right-[20%] top-0 w-[1px] h-full bg-[#8e54e9]/20 hidden lg:block"></div>
            </div>

            {/* Main Content Container */}
            <div className="w-full px-[5%] xl:px-[8%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 flex-grow mt-[-40px]">

                {/* Left Column: Text Content */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-start pt-14 lg:pt-0 mt-2 lg:mt-[-80px]">
                    <h2 className="gsap-hero-text text-[#ececec] text-[15.5px] md:text-[36px] lg:text-[40px] font-normal leading-tight mb-2 lg:mb-2 tracking-wide">
                        Looking for a
                    </h2>
                    <h1 className="gsap-hero-text text-white text-[25.5px] md:text-[52px] lg:text-[58px] font-bold leading-[1.2] lg:leading-[1.1] mb-0 lg:mb-2 tracking-wide">
                        Technology Partner
                    </h1>
                    <h1 className="gsap-hero-text text-white text-[25.5px] md:text-[50px] lg:text-[56px] font-bold leading-[1.2] lg:leading-[1.1] mb-5 lg:mb-6 tracking-wide">
                        You Can Truly Rely On?
                    </h1>

                    <p className="gsap-hero-text text-[#a5a5af] text-[13px] md:text-[18px] max-w-[45rem] font-normal leading-[1.7] lg:leading-[1.6] mt-2 lg:mt-12 mb-7 w-[95%] px-5 lg:px-0 mx-auto lg:mx-0">
                        Dilshaj Infotech delivers innovative digital solutions,
                        scalable products, and industry-ready services designed
                        to transform your business vision into reality.
                    </p>

                    {/* Explore Services Button */}
                    <button suppressHydrationWarning className="gsap-hero-text group flex items-center relative h-12 w-fit cursor-pointer">
                        {/* LEFT ICON CIRCLE */}
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                            <FaChevronRight className="w-4 h-4 text-[#3799FA]" />
                        </div>

                        {/* MAIN BUTTON BODY */}
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                            Build Your Future Today
                        </div>
                    </button>
                </div>

                {/* Right Column: Hero Image (Robot) */}
                <div className="relative h-[500px] md:h-[650px] lg:h-[800px] w-full flex items-center justify-center lg:justify-end mt-[-20px] md:mt-12 lg:mt-0">
                    <div className="relative w-[115%] max-w-[700px] lg:max-w-[950px] h-[120%] -right-4 lg:-right-[80px] top-[-30px] md:top-10 lg:top-[60px]">
                        <Image
                            src="/services/Home-bg-image.png"
                            alt="Robot holding tablet"
                            layout="fill"
                            objectFit="contain"
                            className="gsap-hero-robot z-10 drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* 3 Bottom Cards */}
            <div className="gsap-hero-card-container w-full px-0 md:px-[5%] xl:px-[8%] mx-auto mt-[-30px] md:mt-6 mb-0 md:mb-8 relative z-20">
                <div className="w-full bg-[#1b1c1e]/90 md:bg-[#1c1d20]/95 backdrop-blur-[40px] md:rounded-2xl border-t border-[#ffffff15] md:border md:border-white/30 flex flex-col md:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

                    {/* Card 1 */}
                    <div className="gsap-hero-card flex-1 flex flex-row items-center p-6 md:p-8 lg:p-10 xl:p-12 border-b border-[#ffffff10] md:border-b-0 md:border-r md:border-white/20 relative overflow-hidden group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-[30px] h-[30px] md:w-[48px] md:h-[48px] min-w-[30px] min-h-[30px] md:min-w-[48px] md:min-h-[48px] rounded-full bg-[#3b82f6] flex items-center justify-center mr-5 shadow-sm">
                            <Check className="w-[14px] h-[14px] md:w-6 md:h-6 text-white stroke-[4]" />
                        </div>
                        <p className="text-[#a0a0ab] text-[13px] md:text-[16px] lg:text-[17px] leading-[1.6] font-normal tracking-wide">
                            Scalable Web Solutions Powered By Modern Technology & Smart Architecture
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="gsap-hero-card flex-1 flex flex-row items-center p-6 md:p-8 lg:p-10 xl:p-12 border-b border-[#ffffff10] md:border-b-0 md:border-r md:border-white/20 relative overflow-hidden group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-[30px] h-[30px] md:w-[48px] md:h-[48px] min-w-[30px] min-h-[30px] md:min-w-[48px] md:min-h-[48px] rounded-full bg-[#3b82f6] flex items-center justify-center mr-5 shadow-sm">
                            <Check className="w-[14px] h-[14px] md:w-6 md:h-6 text-white stroke-[4]" />
                        </div>
                        <p className="text-[#a0a0ab] text-[13px] md:text-[16px] lg:text-[17px] leading-[1.6] font-normal tracking-wide">
                            Performance-Driven Development Built For Speed, Security & Reliability
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="gsap-hero-card flex-1 flex flex-row items-center p-6 md:p-8 lg:p-10 xl:p-12 relative overflow-hidden group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-[30px] h-[30px] md:w-[48px] md:h-[48px] min-w-[30px] min-h-[30px] md:min-w-[48px] md:min-h-[48px] rounded-full bg-[#3b82f6] flex items-center justify-center mr-5 shadow-sm">
                            <Check className="w-[14px] h-[14px] md:w-6 md:h-6 text-white stroke-[4]" />
                        </div>
                        <p className="text-[#a0a0ab] text-[13px] md:text-[16px] lg:text-[17px] leading-[1.6] font-normal tracking-wide">
                            User-Centric Web Experiences Designed To Maximize Growth & Engagement
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}
