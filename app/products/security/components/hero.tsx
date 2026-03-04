"use client";

import React from "react";
import Image from "next/image";

import { ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Hero() {
    return (
        <section
            className={`${poppins.className} relative w-full overflow-hidden bg-[#060d1f]`}
        >
            {/*
             * ── WRAPPER ──────────────────────────────────────────────
             * All sizes: aspect-[16/7] so the phone shows horizontally
             * Desktop (lg+): cap at 460px max-height
             * ────────────────────────────────────────────────────────
             */}
            <div className="relative w-full aspect-[16/7] max-h-[500px] lg:max-h-[650px]">

                {/* ── Background image ── */}
                <Image
                    src="/products/security/herobg.png"
                    alt="Security Hero Background"
                    fill
                    /*
                     * object-center keeps the phone perfectly centered/right
                     * on all screen sizes so it shows the full device
                     */
                    className="object-cover object-right"
                    priority
                />

                {/* ── Overlays ── */}
                {/* Left-to-transparent gradient so text is readable on all sizes */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#060d1f]/90 via-[#060d1f]/55 to-transparent" />
                {/* Bottom fade into next section */}
                <div className="absolute inset-x-0 bottom-0 h-[40px] bg-gradient-to-t from-[#060d1f] to-transparent" />



                {/* ── Text Content ── */}
                <div
                    className="
                        absolute inset-0 z-10 flex flex-col justify-center
                        pl-3 pr-0 pt-4 pb-4 max-w-[44%]
                        lg:pt-[clamp(32px,5vw,72px)] lg:pb-[clamp(24px,3vw,48px)]
                        lg:pl-[clamp(40px,5vw,80px)] lg:pr-0
                        lg:max-w-[clamp(280px,46%,620px)]
                    "
                >
                    {/* ── Heading ── */}
                    <h1 className="
                        font-[800] leading-[1.15] tracking-tight
                        mb-1.5 text-[clamp(11px,2.8vw,16px)]
                        lg:w-[682px] lg:h-[120px]
                        lg:mb-[clamp(12px,1.6vw,22px)] lg:text-[clamp(26px,2.4vw,36px)]
                    ">
                        <span className="text-white">Secure Every Move. </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#a855f7]">
                            Navigate with{" "}
                        </span>
                        <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#a855f7]">
                            Confidence.
                        </span>
                    </h1>

                    {/* ── Description ── */}
                    <p className="
                        text-white/75 leading-[1.6] font-[400]
                        mb-2 text-[clamp(7px,1.5vw,10px)] max-w-[clamp(120px,36vw,300px)]
                        lg:mb-[clamp(16px,2.2vw,32px)] lg:text-[clamp(14px,1.2vw,18px)] lg:max-w-[clamp(220px,38vw,500px)]
                    ">
                        Dilshaj Infotech is developing a powerful security-focused
                        navigation solution that combines GPS tracking, emergency
                        alerts, and live monitoring for safer journeys.
                    </p>

                    {/* ── CTA Button ── */}
                    <button
                        className="
                            flex items-center gap-1.5
                            bg-gradient-to-r from-[#60a5fa] to-[#a855f7]
                            text-white rounded-full w-fit font-[600]
                            hover:shadow-[0_0_24px_rgba(168,85,247,0.4)] transition-all duration-300
                            h-[clamp(22px,3.5vw,48px)] pl-[2px] pr-[clamp(8px,1.2vw,22px)]
                            text-[clamp(7px,1.3vw,13px)]
                            lg:h-[clamp(42px,4vw,56px)] lg:pl-[5px] lg:pr-[clamp(16px,1.8vw,26px)]
                            lg:text-[clamp(12px,1.1vw,15px)]
                        "
                    >
                        <div
                            className="
                                bg-white rounded-full flex items-center justify-center
                                shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                                w-[clamp(16px,2.8vw,36px)] h-[clamp(16px,2.8vw,36px)]
                                lg:w-[clamp(28px,2.6vw,40px)] lg:h-[clamp(28px,2.6vw,40px)]
                            "
                        >
                            <ChevronRight size={12} strokeWidth={3} className="text-black" />
                        </div>
                        <span className="tracking-wide">Coming Soon</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
