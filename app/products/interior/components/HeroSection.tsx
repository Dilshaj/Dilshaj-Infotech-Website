"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import backgroundImage from "../images/hero-bg.png";

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={ref} className="relative w-full min-h-screen flex flex-col md:block bg-black shrink-0 overflow-hidden">

            {/* --- Mobile View Top Content --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:hidden z-10 w-full relative bg-gradient-to-b from-black to-[#050505]"
            >
                <h1
                    className="text-white text-center font-bold"
                    style={{
                        fontSize: "25px",
                        lineHeight: "100%",
                        letterSpacing: "-1.5%",
                        color: "#FFFFFF"
                    }}
                >
                    Design Smarter. Build<br />Better.
                </h1>
                <p
                    className="text-center mt-6 w-full max-w-[400px]"
                    style={{
                        fontSize: "20px",
                        lineHeight: "38px",
                        letterSpacing: "0px",
                        color: "#F1F5F9BD"
                    }}
                >
                    Dilshaj Infotech is developing an intelligent Architecture & Design
                    Platform that streamlines planning, visualization, collaboration, and
                    project management in one unified ecosystem.
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

            {/* --- Mobile Image (Bottom) & Desktop Background --- */}
            <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-screen shrink-0 md:absolute md:inset-0 md:z-0 overflow-hidden">
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none"></div>
                <motion.div style={{ y, willChange: "transform" }} className="absolute inset-0 w-full h-[120%]">
                    <Image
                        src={backgroundImage}
                        alt="Architecture Background"
                        fill
                        className="object-cover object-bottom md:object-center"
                        priority
                    />
                </motion.div>
            </div>

            {/* --- Desktop View Bottom Content --- */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="hidden md:flex absolute bottom-0 left-0 right-0 z-20 w-full px-12 lg:px-24 pb-16 justify-between items-end"
            >
                <div className="max-w-[700px] xl:max-w-[850px]">
                    <h1
                        className="text-white font-bold"
                        style={{
                            fontSize: "40px",
                            lineHeight: "100%",
                            letterSpacing: "-1.5%",
                            color: "#FFFFFF"
                        }}
                    >
                        Design Smarter. Build Better.
                    </h1>
                    <p
                        className="mt-5"
                        style={{
                            fontSize: "25px",
                            lineHeight: "38px",
                            letterSpacing: "0px",
                            color: "#F1F5F9BD"
                        }}
                    >
                        Dilshaj Infotech is developing an intelligent Architecture & Design
                        Platform that streamlines planning, visualization, collaboration,
                        and project management in one unified ecosystem.
                    </p>
                </div>

                <button className="flex items-center group relative h-12 w-fit cursor-pointer shrink-0 mb-4 ml-8">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5"><polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                        Coming Soon
                    </div>
                </button>
            </motion.div>
        </section>
    );
}
