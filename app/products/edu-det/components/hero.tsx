"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const stats = [
    { value: "10,000+", label: "Learners" },
    { value: "500+", label: "Courses" },
    { value: "1,200+", label: "Job Opportunities" },
];

export default function Hero() {
    return (
        <section
            className={`${poppins.className} relative w-full min-h-screen bg-[#000000] overflow-hidden flex flex-col`}
        >

            {/* ── Giant EDUPROVA background text ── */}
            <div
                className="relative w-full select-none pointer-events-none z-0 flex items-center justify-center h-[120px] sm:h-[160px] md:h-[220px] lg:h-[300px] mt-[85px] lg:mt-[110px]"
            >
                <h1
                    style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontSize: "clamp(45px, 14vw, 250px)",
                        fontWeight: 900,
                        lineHeight: 1,
                        letterSpacing: "0.02em",
                        width: "100%",
                        textAlign: "center",
                        paddingTop: "0",
                        backgroundImage: "linear-gradient(to bottom, #20B5F9 15%, #A851ED 50%, #000000 95%)",
                        margin: 0,
                    }}
                    className="uppercase"
                >
                    EDUPROVA
                </h1>

                {/* Light Black fade at bottom of EDUPROVA text */}
                <div
                    className="absolute bottom-[-20px] lg:bottom-[-40px] left-0 right-0 h-[100px] lg:h-[200px] z-[2]"
                    style={{
                        background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 75%, #000000 100%)",
                    }}
                />
            </div>

            {/* ── Device Mockups Image ── */}
            <div
                className="relative w-full flex items-center justify-center z-10 mt-[-45px] sm:mt-[-80px] md:mt-[-120px] lg:mt-[-170px]"
            >
                <div
                    className="relative w-full max-w-[1156px] mx-auto aspect-[1.96]"
                >
                    <Image
                        src="/products/edu-det/eduimage.png"
                        alt="EduProva Platform - Tablet and Laptop Mockup"
                        fill
                        className="object-contain object-center"
                        priority
                    />

                    {/* Mask to cleanly hide the dirty reflection/artifact at the bottom right of the baked PNG */}
                    <div
                        className="hidden lg:block"
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "120px",
                            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 50%, #000000 100%)",
                            zIndex: 10,
                            pointerEvents: "none",
                        }}
                    />
                </div>
            </div>

            {/* ── Bottom content: text left + stats right ── */}
            <div
                className="relative z-10 w-full lg:w-[1156px] max-w-full mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between px-10 sm:px-12 lg:px-0 lg:pr-5 pb-[60px] pt-4 lg:pt-0 lg:mt-5 mt-[25px] sm:mt-[0px] gap-6 lg:gap-10"
            >
                {/* Left: Heading + description + button */}
                <div className="flex-none w-full max-w-[582px] ml-0 lg:ml-[-250px] flex flex-col items-start lg:items-start text-left lg:text-left">
                    {/* Main Heading */}
                    <h2
                        style={{
                            color: "#ffffff",
                            fontSize: "clamp(32px, 4vw, 52px)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.5px",
                            marginBottom: "8px",
                            width: "582px",
                            maxWidth: "100%",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                        }}
                    >
                        <span style={{ fontWeight: 400 }}>AI-Powered <br /> E-Learning Platform</span>
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-[#e2e8f0] font-medium text-[13px] sm:text-[16px] xl:text-[20px] mb-[8px] opacity-100"
                    >
                        Learn. Build. Get Hired.
                    </p>

                    {/* Description */}
                    <p
                        className="text-[#888888] lg:text-[#b0b0b0]"
                        style={{
                            fontSize: "clamp(11.5px, 1.2vw, 15px)",
                            lineHeight: 1.6,
                            fontWeight: 400,
                            maxWidth: "440px",
                            marginBottom: "20px",
                        }}
                    >
                        EduProva is an intelligent career acceleration platform combining AI
                        tools, professional networking, freelancing, startup collaboration, and
                        skill-based learning — all in one ecosystem.
                    </p>

                </div>

                {/* Right: Stats with green checkmarks */}
                <div
                    className="flex flex-col gap-5 flex-shrink-0 items-start lg:items-start mt-4 lg:mt-0"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                            {/* Green checkmark circle */}
                            <div style={{ flexShrink: 0 }}>
                                <CheckCircle2
                                    size={28}
                                    strokeWidth={2.5}
                                    color="#22c55e"
                                    fill="transparent"
                                />
                            </div>
                            {/* Stat text */}
                            <p
                                style={{
                                    color: "#ffffff",
                                    fontSize: "clamp(16px, 1.4vw, 22px)",
                                    fontWeight: 600,
                                    lineHeight: 1.2,
                                    margin: 0,
                                }}
                            >
                                {stat.value}{" "}
                                <span
                                    style={{
                                        fontWeight: 400,
                                        fontSize: "clamp(14px, 1.2vw, 19px)",
                                        color: "#d0d0d0",
                                    }}
                                >
                                    {stat.label}
                                </span>
                            </p>
                        </div>
                    ))}

                    {/* Get Start Button */}
                    <div className="mt-4 lg:mt-3">
                        <button className="flex items-center group relative h-12 w-fit cursor-pointer">
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5"><polyline points="9 18 15 12 9 6" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                                Get Start
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
