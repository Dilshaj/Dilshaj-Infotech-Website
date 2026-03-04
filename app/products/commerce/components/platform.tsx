"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Platform() {
    return (
        <section className={`${poppins.className} relative w-full pt-16 pb-24 lg:pt-[120px] lg:pb-[140px] bg-[#000000] overflow-hidden flex flex-col items-center justify-center`}>

            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/products/commerce/platbg.png"
                    alt="Background elements"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Blending Gradients to make the image fade softly */}
            <div className="absolute top-0 left-0 right-0 h-[100px] z-[1] bg-gradient-to-b from-[#000000] to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[100px] z-[1] bg-gradient-to-t from-[#000000] to-transparent pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
                <h3 className="text-[20px] sm:text-[24px] font-[700] tracking-wider uppercase mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">
                    ABOUT THE UPCOMING APP
                </h3>

                <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[700] text-white mb-6 tracking-tight leading-[1.2]">
                    A Platform Built for Growth
                </h2>

                <p className="text-[#a1a1aa] text-[15px] sm:text-[16px] leading-[1.7] mb-8 lg:mb-10 max-w-[650px] font-[400]">
                    From product management to secure payments and real-time order tracking, our platform provides everything businesses need to launch and scale successfully. Designed with scalable architecture and a mobile-first approach, it ensures smooth performance across all devices.
                </p>

                <button className="flex items-center group relative h-12 w-fit cursor-pointer">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5"><polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                        Stay Tuned
                    </div>
                </button>
            </div>
        </section>
    );
}
