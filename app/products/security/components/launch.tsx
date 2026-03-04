"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, MapPin } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

/* ── Paper Airplane ──────────────────────────────── */
function PaperAirplane({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 22L51 2L38 42L23 27L17 35L15 25L1 22Z"
                fill="#bfdbfe"
                stroke="#60a5fa"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path d="M15 25L51 2" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

/* ── Flight Path SVG ─────────────────────────────── */
function FlightPath({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Enters from left → left spiral */}
            <path
                d="M0 55 C25 55, 50 75, 72 62 C90 52, 92 70, 105 60 C118 50, 106 36, 93 44 C80 52, 85 66, 100 64"
                stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" fill="none"
            />
            {/* Sweep across centre */}
            <path
                d="M100 64 C200 58, 380 62, 500 60 C620 58, 780 60, 900 56"
                stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" fill="none"
            />
            {/* Right spiral → exits right */}
            <path
                d="M900 56 C918 50, 940 36, 952 48 C964 60, 956 76, 942 74 C928 72, 924 58, 940 54 C954 50, 970 60, 980 53 C990 46, 998 52, 1000 50"
                stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" fill="none"
            />
        </svg>
    );
}

/* ── Component ───────────────────────────────────── */
export default function Launch() {
    return (
        <section
            className={`
                ${poppins.className}
                w-full
                bg-gradient-to-b from-white via-slate-50 to-sky-100/80
                px-2 sm:px-3 lg:px-4
                pt-6 sm:pt-8 lg:pt-10
                pb-8 sm:pb-10 lg:pb-14
            `}
        >
            {/* ── Centred card ── */}
            <div className="w-full max-w-[1400px] mx-auto">

                {/* World map card */}
                <div className="
                    relative w-full overflow-hidden
                    bg-white rounded-xl
                    border border-gray-200
                    shadow-sm
                    h-[130px] sm:h-[160px] lg:h-[190px]
                ">
                    {/* Background image */}
                    <Image
                        src="/products/security/launch.png"
                        alt="World Map"
                        fill
                        className="object-cover object-center"
                        priority
                    />

                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />

                    {/* Red location pins */}
                    <div className="absolute z-10" style={{ top: "25%", left: "15%" }}>
                        <MapPin size={16} fill="#ef4444" className="text-red-500 drop-shadow" strokeWidth={1.5} />
                    </div>
                    <div className="absolute z-10" style={{ top: "20%", left: "40%" }}>
                        <MapPin size={20} fill="#ef4444" className="text-red-500 drop-shadow" strokeWidth={1.5} />
                    </div>
                    <div className="absolute z-10" style={{ top: "22%", left: "64%" }}>
                        <MapPin size={16} fill="#ef4444" className="text-red-500 drop-shadow" strokeWidth={1.5} />
                    </div>

                    {/* Flight path */}
                    <FlightPath className="absolute inset-0 w-full h-full opacity-90" />

                    {/* Left paper airplane */}
                    <div className="absolute z-10 -rotate-6" style={{ top: "44%", left: "22%" }}>
                        <PaperAirplane className="w-9 h-8 sm:w-11 sm:h-10" />
                    </div>

                    {/* Right paper airplane */}
                    <div className="absolute z-10 rotate-3" style={{ top: "40%", left: "64%" }}>
                        <PaperAirplane className="w-9 h-8 sm:w-11 sm:h-10" />
                    </div>
                </div>

                {/* ── Separator ── */}
                <div className="w-full h-px bg-gray-200 mt-0" />

                {/* ── Button below card ── */}
                <div className="flex justify-center pt-6 sm:pt-8">
                    <button
                        className="
                            flex items-center gap-2
                            bg-gradient-to-r from-[#60a5fa] to-[#a855f7]
                            text-white rounded-full font-[600]
                            hover:shadow-[0_0_24px_rgba(168,85,247,0.45)]
                            transition-all duration-300
                            h-[clamp(38px,4vw,52px)]
                            pl-[4px] pr-[clamp(16px,2vw,26px)]
                            text-[clamp(12px,1.2vw,15px)]
                        "
                    >
                        <div className="
                            bg-white rounded-full flex items-center justify-center
                            shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                            w-[clamp(28px,3vw,40px)] h-[clamp(28px,3vw,40px)]
                        ">
                            <ChevronRight size={13} strokeWidth={3} className="text-[#7c3aed]" />
                        </div>
                        <span className="tracking-wide whitespace-nowrap">Notify Me When Live</span>
                    </button>
                </div>

            </div>
        </section>
    );
}
