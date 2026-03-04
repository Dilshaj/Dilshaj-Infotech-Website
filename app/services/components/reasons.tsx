"use client";
import React, { useRef, useEffect } from "react";
import { Poppins } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const cardsData = [
    {
        bg: "#3e9ffd",
        title: "Innovation",
        num: "01",
        numColor: "text-white/20",
        list: ["Cutting-edge technology", "Creative problem solving", "Future-ready solutions", "Continuous innovation"],
        backText: "We focus on building modern, future-ready solutions that help businesses stay ahead in a rapidly evolving digital world."
    },
    {
        bg: "#382f4c",
        title: "Career Ecosystem",
        num: "02",
        numColor: "text-white/10",
        list: ["Industry-focused courses", "Hands-on projects", "Internship opportunities", "Career guidance"],
        backText: "We don't just build products—we build careers by providing real-world training, internships, and placement support."
    },
    {
        bg: "#16508d",
        title: "Vision",
        num: "03",
        numColor: "text-white/15",
        list: ["Strong company vision", "Rural development focus", "Ethical practices", "Long-term impact"],
        backText: "Driven by a mission to empower talent and develop communities, we aim to create impactful solutions with long-term value."
    }
];

export default function Reasons() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Animate header items (badge, title, description) fading and sliding up
            gsap.from(".gsap-header-item", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", // Starts when top of section hits 80% viewport height
                }
            });

            // Animate the 3 cards popping in with stagger
            gsap.from(".gsap-card-item", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".gsap-card-item", /* use first card as trigger */
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert(); // cleanup
    }, []);

    return (
        <section ref={sectionRef} className={`${poppins.className} w-full py-24 bg-white relative overflow-hidden`}>
            {/* Soft background light/glow effects similar to the image */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#e6f0f9]/80 to-transparent blur-[80px] rounded-full pointer-events-none -mt-32 -mr-32"></div>

            <div className="w-full px-[5%] xl:px-[8%] mx-auto relative z-10">
                {/* Header Section exactly centered as in Image 2 */}
                <div className="mb-14 flex flex-col items-center text-center max-w-3xl mx-auto">
                    <span className="gsap-header-item inline-block bg-[#1f1b2d] text-white text-[14.5px] font-medium px-5 py-2 rounded-md mb-6 tracking-wide shadow-sm">
                        Reasons
                    </span>
                    <h2 className="gsap-header-item text-[#13111a] text-3xl md:text-[40px] font-semibold mb-4 tracking-wide">
                        Top Reasons to Choose Us
                    </h2>
                    <p className="gsap-header-item text-[#3b3a43] text-[17px] md:text-[18px] font-medium max-w-xl">
                        Empowering Businesses with Smart Technology and Strong Values
                    </p>
                </div>

                {/* Grid Section - Render FlipCards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]">
                    {cardsData.map((data, index) => (
                        <div key={index} className="gsap-card-item h-full">
                            <FlipCard data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// FlipCard Component powered by GSAP for super smooth 3D Animation
function FlipCard({ data }: { data: any }) {
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = React.useState(false);

    useEffect(() => {
        // Initialize the back face to be flipped around 180 degrees initially
        gsap.set(backRef.current, { rotationY: -180 });
    }, []);

    const flipToBack = () => {
        if (!isFlipped) {
            setIsFlipped(true);
            gsap.killTweensOf([frontRef.current, backRef.current]);
            gsap.to(frontRef.current, { rotationY: 180, duration: 0.8, ease: "power3.inOut" });
            gsap.to(backRef.current, { rotationY: 0, duration: 0.8, ease: "power3.inOut" });
        }
    };

    const toggleFlip = () => {
        if (isFlipped) {
            setIsFlipped(false);
            gsap.killTweensOf([frontRef.current, backRef.current]);
            gsap.to(frontRef.current, { rotationY: 0, duration: 0.8, ease: "power3.inOut" });
            gsap.to(backRef.current, { rotationY: -180, duration: 0.8, ease: "power3.inOut" });
        } else {
            flipToBack();
        }
    };

    // Shared rounded corners class
    const shapeClasses = "rounded-tl-[10px] rounded-br-[10px] rounded-tr-[55px] rounded-bl-[55px]";

    return (
        <div
            className="relative w-full h-full min-h-[380px] cursor-pointer"
            style={{ perspective: "1500px" }}
            onMouseEnter={flipToBack}
            onClick={toggleFlip}
        >
            {/* FRONT FACE (Features List) */}
            <div
                ref={frontRef}
                className={`absolute inset-0 w-full h-full p-8 lg:p-10 overflow-hidden text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col ${shapeClasses}`}
                style={{ backgroundColor: data.bg, backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
            >
                <CardPattern />
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                        <h3 className="text-[25px] font-semibold pt-1 tracking-wide line-clamp-1">{data.title}</h3>
                        <span className={`text-[58px] font-semibold ${data.numColor} leading-none mr-2 shrink-0`}>{data.num}</span>
                    </div>
                    <ul className="space-y-4">
                        {data.list.map((item: string, i: number) => (
                            <ListItem key={i} text={item} />
                        ))}
                    </ul>
                </div>
            </div>

            {/* BACK FACE (Paragraph Text) */}
            <div
                ref={backRef}
                className={`absolute inset-0 w-full h-full p-8 lg:p-10 overflow-hidden text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex justify-center text-center ${shapeClasses}`}
                style={{ backgroundColor: data.bg, backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
            >
                <CardPattern />
                <div className="relative z-10 flex flex-col items-center justify-center p-2 mb-4">
                    <h3 className="text-[28px] font-semibold mb-6">{data.title}</h3>
                    <p className="text-[16px] lg:text-[17.5px] font-normal leading-[1.8] text-[#f3f3f5] tracking-wide">
                        {data.backText}
                    </p>
                </div>
            </div>
        </div>
    );
}

// Custom ListItem Component with exact arrow match
const ListItem = ({ text }: { text: string }) => (
    <li className="flex items-start">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-3.5 mt-1 flex-shrink-0 text-white opacity-90"
        >
            <path d="M5 18S5 12 12 12h7" />
            <path d="m15 8 4 4-4 4" />
        </svg>
        <span className="text-[15.5px] font-normal leading-relaxed text-[#f3f3f5]">{text}</span>
    </li>
);

// Pattern overlay (a blend of radial dots and light masks mimicking the image)
const CardPattern = () => (
    <>
        <div
            className="absolute -inset-[50%] opacity-[0.08] pointer-events-none"
            style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '28px 28px',
                transform: 'rotate(-15deg)',
                maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
            }}
        ></div>
        {/* Secondary circular dot pattern for corner flourishes */}
        <div
            className="absolute -bottom-10 -left-10 w-[200px] h-[200px] opacity-[0.12] pointer-events-none rounded-full"
            style={{
                backgroundImage: 'radial-gradient(circle, white 2.5px, transparent 2.5px)',
                backgroundSize: '24px 24px',
            }}
        ></div>
        <div
            className="absolute top-0 right-10 w-[150px] h-[150px] opacity-[0.06] pointer-events-none"
            style={{
                backgroundImage: 'radial-gradient(circle, white 3px, transparent 3px)',
                backgroundSize: '30px 30px',
            }}
        ></div>
    </>
);
