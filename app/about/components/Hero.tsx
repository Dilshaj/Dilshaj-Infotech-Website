"use client";

import Image from "next/image";
import { FaReact, FaNodeJs, FaAws, FaFlutter, FaChevronRight } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

import { useState } from "react";

export default function Hero() {
    const [isActionActive, setIsActionActive] = useState(false);
    return (
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/about/about-bg.png"
                    alt="About Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40 z-0" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1200px] px-6 text-center flex flex-col items-center gap-6 md:gap-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-semibold text-white leading-tight max-w-5xl">
                    Transform Your Business With <br className="hidden sm:block" />
                    Next-Generation Digital Solutions
                </h1>

                <p className="text-base md:text-xl text-gray-300 max-w-5xl leading-relaxed">
                    We are a modern technology company helping startups and enterprises streamline operations, <br className="hidden md:block" />
                    enhance user experiences, and accelerate growth with secure, scalable, and performance-driven digital solutions.
                </p>

                {/* Action Button */}
                <div className="flex justify-center w-full mt-4">
                    <button
                        suppressHydrationWarning
                        onClick={() => setIsActionActive(!isActionActive)}
                        className={`flex items-center relative h-12 transition-all duration-700 group cursor-pointer ${isActionActive ? 'w-[210px]' : 'w-[190px]'}`}
                    >
                        {/* ICON CIRCLE */}
                        <div
                            className={`absolute w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 z-20 transition-all duration-700 ${isActionActive ? 'right-0' : 'left-0'}`}
                        >
                            <FaChevronRight
                                className={`w-4 h-4 transition-colors duration-700 ${isActionActive ? 'text-black' : 'text-[#3799FA]'}`}
                            />
                        </div>

                        {/* MAIN BUTTON BODY */}
                        <div
                            className={`h-full w-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 overflow-hidden ${isActionActive ? 'pl-8 pr-14' : 'pl-14 pr-8'}`}
                            style={{
                                background: 'linear-gradient(to right, #3799FA, #9961FB)',
                                borderRadius: isActionActive ? '34px 34px 34px 0px' : '34px 34px 0px 34px'
                            }}
                        >
                            <span className="whitespace-nowrap transition-all duration-700">Connect With Us</span>
                        </div>
                    </button>
                </div>

                {/* Technologies Row */}
                <div className="mt-12 md:mt-16 w-full flex flex-wrap items-center justify-center gap-6 md:gap-16 opacity-80 shrink-0 px-4">
                    <div className="flex items-center gap-3 group cursor-pointer w-full md:w-auto justify-center mb-4 md:mb-0">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className="text-white font-medium text-sm flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center overflow-hidden shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" className="w-2.5 h-2.5"><path d="M5 13l4 4L19 7" /></svg>
                                </span>
                                Technologies We Work With
                            </span>
                            <span className="text-white text-xs ml-0 md:ml-7 opacity-70">Across Different Platforms</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 transition-transform cursor-pointer">
                        <FaReact className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold">React</span>
                    </div>

                    <div className="flex items-center gap-3 transition-transform cursor-pointer">
                        <FaNodeJs className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold">Node.js</span>
                    </div>

                    <div className="flex items-center gap-3 transition-transform cursor-pointer">
                        <FaAws className="w-7 h-7 md:w-9 md:h-9 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold uppercase tracking-widest">AWS</span>
                    </div>

                    <div className="flex items-center gap-3 transition-transform cursor-pointer">
                        <SiMongodb className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold">MongoDB</span>
                    </div>

                    <div className="flex items-center gap-3 transition-transform cursor-pointer">
                        <FaFlutter className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold">Flutter</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
