"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, ChevronsRight } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function About() {
    return (
        <section className={`${poppins.className} relative w-full bg-white overflow-hidden`}>

            {/* About Ribbon */}
            <div className="absolute left-0 top-[30px] lg:top-[40px] z-20">
                <div
                    className="bg-[#0284c7] text-white font-[600] text-[13px] sm:text-[15px] pl-4 sm:pl-8 pr-10 sm:pr-14 py-[8px] sm:py-[10px] flex items-center gap-2 shadow-sm"
                    style={{ clipPath: "polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%)", letterSpacing: "0.5px" }}
                >
                    <ChevronsRight size={18} strokeWidth={3} />
                    <span>About</span>
                </div>
            </div>

            <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-14 pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[90px]">

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-x-12 xl:gap-x-16 gap-y-10 lg:gap-y-0 items-center">

                    {/* Left — Text */}
                    <div className="flex flex-col order-2 lg:order-1">

                        <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-[800] text-[#111827] leading-[1.25] mb-2 tracking-tight">
                            Security &amp; Navigation App
                        </h2>

                        <p className="text-[16px] sm:text-[18px] font-[700] text-[#111827] mb-5 leading-[1.4]">
                            "Smart Security &amp; Navigation Assistant"
                        </p>

                        <p className="text-[#374151] text-[14px] sm:text-[15px] leading-[1.75] mb-4 max-w-[500px] indent-4">
                            The Security &amp; Navigation App is an upcoming intelligent mobility solution designed to enhance personal safety and real-time navigation. With integrated GPS tracking, emergency assistance features, and secure route monitoring, the app ensures users stay connected and protected at all times.
                        </p>

                        <p className="text-[#374151] text-[14px] sm:text-[15px] leading-[1.75] mb-8 max-w-[500px] indent-4">
                            Built using modern technologies and real-time data processing, the platform delivers accurate directions, instant alerts, and seamless communication during travel.
                        </p>

                        <button className="flex items-center gap-3 bg-gradient-to-r from-[#60a5fa] to-[#a855f7] text-white rounded-full w-fit h-[44px] sm:h-[48px] pl-[6px] pr-6 font-[600] text-[14px] hover:shadow-[0_0_24px_rgba(168,85,247,0.4)] transition-all duration-300">
                            <div className="bg-white rounded-full w-[32px] sm:w-[36px] h-[32px] sm:h-[36px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                                <ChevronRight size={17} strokeWidth={3} className="text-black" />
                            </div>
                            <span className="tracking-wide">Get Early Access</span>
                        </button>
                    </div>

                    {/* Right — Image */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="relative w-full aspect-[1.25] sm:aspect-[1.35] lg:aspect-[1.3] rounded-[20px] overflow-hidden shadow-[0_10px_36px_rgba(0,0,0,0.13)]">
                            <Image
                                src="/products/security/about.png"
                                alt="Security & Navigation App"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
