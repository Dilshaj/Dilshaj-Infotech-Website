"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    // Move the image slightly down as user scrolls down
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <div ref={ref} className="relative w-full overflow-hidden">

            {/* ====== MOBILE VIEW ====== */}
            {/* Mobile Image (Top) - Hidden on desktop */}
            <div className="relative w-full h-[45vh] md:hidden shrink-0">
                <Image
                    src="/products-images/urban-clap.png"
                    alt="Home Services App"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient to fade into black at the bottom for smooth transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
                {/* A stronger black gradient right at the bottom edge */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Mobile Content (Bottom) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex flex-col items-center justify-start px-4 pt-0 md:hidden z-20 w-full relative bg-black text-center pb-12 -mt-4"
            >
                <h1
                    className="font-bold text-white whitespace-pre-wrap"
                    style={{
                        fontSize: "32px",
                        lineHeight: "120%",
                        letterSpacing: "-1.5%",
                        color: "#FFFFFF"
                    }}
                >
                    All Your Home Services.<br />One Smart App.
                </h1>
                <p
                    className="mt-6"
                    style={{
                        fontSize: "18px",
                        lineHeight: "28px",
                        letterSpacing: "0px",
                        color: "#F1F5F9BD",
                        maxWidth: "400px"
                    }}
                >
                    Dilshaj Infotech is building a next-generation on-demand service platform that connects customers with verified service professionals in just a few taps.
                </p>

                <button className="mt-10 flex items-center group relative h-12 w-fit cursor-pointer">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5"><polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                        Coming Soon
                    </div>
                </button>
            </motion.div>


            {/* ====== DESKTOP VIEW ====== */}
            <div className="hidden md:flex relative w-full items-center bg-black overflow-hidden z-0 h-[80vh] min-h-[600px]">
                {/* Image placed with Parallax Effect */}
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 w-full h-[120%]"
                >
                    <Image
                        src="/products-images/urban-clap.png"
                        alt="Home Services App Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </motion.div>

                {/* Dark gradient on the left to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10 pointer-events-none"></div>

                {/* Desktop Content (Left side absolute overlay, vertically centered) */}
                <div className="absolute inset-0 w-full pl-10 md:pl-16 lg:pl-20 xl:pl-[8%] flex items-center z-20">
                    {/* Further constrained max width so the text stays strictly on the left side and doesn't overlap the phone image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-[280px] lg:max-w-[340px] xl:max-w-[400px] 2xl:max-w-[460px] flex flex-col items-start text-left"
                    >
                        <h1
                            className="font-bold text-white whitespace-pre-wrap"
                            style={{
                                fontSize: "clamp(32px, 3.5vw, 44px)",
                                lineHeight: "110%",
                                letterSpacing: "-1.5%",
                                color: "#FFFFFF"
                            }}
                        >
                            All Your Home<br />Services. One<br />Smart App.
                        </h1>
                        <p
                            className="mt-6 md:mt-8"
                            style={{
                                fontSize: "clamp(18px, 1.8vw, 25px)",
                                lineHeight: "150%",
                                letterSpacing: "0px",
                                color: "#F1F5F9BD",
                            }}
                        >
                            Dilshaj Infotech is building a next-generation on-demand service platform that connects customers with verified service professionals in just a few taps.
                        </p>

                        <button className="mt-12 flex items-center group relative h-12 w-fit cursor-pointer">
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5"><polyline points="9 18 15 12 9 6" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                                Coming Soon
                            </div>
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
