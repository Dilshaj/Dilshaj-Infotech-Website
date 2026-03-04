"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../images/hero-bg.png";

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={ref} className="relative w-full min-h-screen flex flex-col lg:flex-row bg-black shrink-0 lg:items-center overflow-hidden">

            {/* ====== CONTENT ====== */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:pl-20 xl:pl-32 2xl:pl-40 lg:pr-6 pt-28 md:pt-24 lg:pt-0 z-10 pb-0 lg:pb-0 h-full max-w-[800px] mx-auto lg:mx-0"
            >


                {/* #upcoming Pill */}
                <div
                    className="inline-flex items-center justify-center px-4 py-1.5 rounded-full self-start mb-6 md:mb-8 border border-transparent"
                    style={{
                        background: "linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #20B5F9 0%, #A851ED 100%) border-box",
                    }}
                >
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #20B5F9 0%, #A851ED 100%)",
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0%"
                        }}
                    >
                        #upcoming
                    </span>
                </div>

                {/* Main Headline */}
                <h1
                    className="text-white"
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: "clamp(32px, 4vw, 48px)",
                        lineHeight: "116%",
                        letterSpacing: "-1.5%"
                    }}
                >
                    India&apos;s Next-<br />
                    Generation{" "}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #20B5F9 0%, #A851ED 100%)" }}
                    >
                        Digital<br />
                        News Channel
                    </span>
                </h1>

                {/* Subtitle */}
                <h2
                    className="text-white mt-6 md:mt-8"
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: "24px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#FFFFFF"
                    }}
                >
                    Real-Time. Reliable.<br className="md:hidden" /> Responsible.
                </h2>

                {/* Paragraph */}
                <p
                    className="mt-4 md:mt-6 max-w-[600px]"
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "clamp(16px, 1.8vw, 20px)",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        color: "#FFFFFFA6"
                    }}
                >
                    We are building a powerful digital news platform designed to deliver accurate, fast, and unbiased news directly to your mobile device. Our upcoming app will redefine how modern audiences consume news — anytime, anywhere.
                </p>

                {/* CTA Button */}
                <button className="mt-8 md:mt-10 mb-4 md:mb-0 flex items-center group relative h-12 w-fit cursor-pointer self-start">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5"><polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                        Notify Me at Launch
                    </div>
                </button>
            </motion.div>

            {/* ====== IMAGE ====== */}
            <motion.div
                style={{ y, willChange: "transform" }}
                className="w-full lg:absolute lg:right-24 xl:right-48 lg:top-0 lg:h-screen lg:w-[50%] flex items-center justify-center lg:justify-end relative px-4 md:px-0 order-last mt-8 md:mt-8 lg:mt-0 z-0 pointer-events-none scale-[0.85] md:scale-90 lg:scale-[0.85] transform origin-top lg:origin-right"
            >
                <div className="relative w-full h-[45vh] min-h-[350px] md:min-h-[500px] lg:min-h-0 lg:h-[80%] lg:w-full lg:mt-[10vh]">
                    <Image
                        src={heroImage}
                        alt="Digital News Channel App"
                        fill
                        className="object-contain object-top lg:object-right"
                        priority
                    />
                </div>
            </motion.div>

            {/* Optional gradient to blend right edge if needed */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none w-1/2 z-0"></div>

            {/* ====== STICKY FLOAT BUTTONS (Desktop Only) ====== */}
            <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col z-50">
                {/* Phone Component */}
                <a href="#" className="w-[45px] h-[45px] bg-[#009bf5] flex items-center justify-center hover:opacity-90 transition-opacity group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </a>
                {/* WhatsApp Component */}
                <a href="#" className="w-[45px] h-[45px] bg-[#89e159] flex items-center justify-center hover:opacity-90 transition-opacity group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                        <path d="M3 21l1.65-5.73A8.5 8.5 0 1 1 21 11.5a8.48 8.48 0 0 1-8 8.48A8.4 8.4 0 0 1 8.73 19.3L3 21z"></path>
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                    </svg>
                </a>
            </div>

        </section>
    );
}
