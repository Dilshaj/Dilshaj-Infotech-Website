"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
    return (
        <section className="w-full bg-white pb-16 md:pb-24 px-6 md:px-12 xl:px-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[1240px] mx-auto rounded-[24px] md:rounded-[32px] overflow-hidden px-8 py-12 md:px-16 md:py-20 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8 md:gap-12 lg:gap-0"
                style={{
                    // Creates the deep blue to black gradient backdrop similar to the image
                    background: "linear-gradient(90deg, #3A5DF2 0%, #17113A 60%, #120C21 100%)",
                    willChange: "transform, opacity"
                }}
            >
                {/* Text Side */}
                <div className="w-full lg:w-2/3">
                    <h2
                        className="text-white font-semibold"
                        style={{
                            fontSize: "clamp(26px, 4vw, 42px)",
                            lineHeight: "130%",
                        }}
                    >
                        Build the Future of<br className="hidden md:block" /> Journalism with Us for a<br className="hidden md:block" /> Better News Experience.
                    </h2>
                </div>

                {/* Button Side */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                    <button className="flex items-center group relative h-12 w-fit cursor-pointer">
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5"><polyline points="9 18 15 12 9 6" /></svg>
                        </div>
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                            Get Updates
                        </div>
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
