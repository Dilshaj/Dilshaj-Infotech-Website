"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import feature1 from "../images/feature-1.png";
import feature2 from "../images/feature-2.png";
import feature3 from "../images/feature-3.png";

// Reusable optimized top-level variants to prevent timeline re-renders
const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: customDelay }
    })
};

const slideLeft: any = {
    hidden: { opacity: 0, x: -80 },
    visible: (customDelay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: customDelay }
    })
};

const slideRight: any = {
    hidden: { opacity: 0, x: 80 },
    visible: (customDelay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: customDelay }
    })
};

export default function SpecialSection() {
    return (
        <section className="w-full bg-[#FFFFFF] pt-6 lg:pt-10 pb-10 lg:pb-16 flex flex-col items-center shrink-0">
            <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col items-center">

                {/* Header */}
                <motion.h3
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="font-semibold text-transparent bg-clip-text text-center uppercase"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #20B5F9 0%, #A851ED 100%)",
                        fontSize: "24px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        willChange: "transform, opacity"
                    }}
                >
                    WHAT MAKES IT SPECIAL
                </motion.h3>

                {/* Description */}
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={0.1}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-[#000000] font-normal text-center mt-6 max-w-[950px]"
                    style={{
                        fontSize: "clamp(16px, 3vw, 24px)",
                        lineHeight: "140%", // Visually adjusted from strict 100% for multi-line readability on smaller width
                        letterSpacing: "0%",
                        willChange: "transform, opacity"
                    }}
                >
                    Advanced digital solutions designed to streamline planning, enhance visualization,
                    and transform architectural concepts into reality with precision and efficiency.
                </motion.p>

                {/* Features Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 p-2">
                    {/* Feature 1 (From left) */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        custom={0.1}
                        viewport={{ once: true, margin: "-50px" }}
                        style={{ willChange: "transform, opacity" }}
                        className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-lg group"
                    >
                        <Image src={feature1} alt="Verified Professionals" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </motion.div>

                    {/* Feature 2 (From right) */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        custom={0.2}
                        viewport={{ once: true, margin: "-50px" }}
                        style={{ willChange: "transform, opacity" }}
                        className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-lg group"
                    >
                        <Image src={feature2} alt="Secure Payments" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </motion.div>

                    {/* Feature 3 (From left) */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        custom={0.3}
                        viewport={{ once: true, margin: "-50px" }}
                        style={{ willChange: "transform, opacity" }}
                        className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-lg group"
                    >
                        <Image src={feature3} alt="Ratings & Reviews" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
