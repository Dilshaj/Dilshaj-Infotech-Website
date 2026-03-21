"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    SiTensorflow, SiPytorch, SiOpencv,
    SiAmazonwebservices, SiGooglecloud, SiDocker,
    SiOpenai, SiAnthropic, SiMeta,
    SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss,
    SiPostgresql, SiMongodb, SiMysql, SiFirebase,
    SiVercel, SiNetlify, SiRender, SiDigitalocean
} from "react-icons/si";
import { FaMicrosoft, FaPython, FaAws, FaDocker, FaDatabase } from "react-icons/fa";
import { Cpu, Cloud, Sparkles, Layout, Database, Rocket, Zap, Brain, Hexagon } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const techStack = [
    {
        category: "AI Frameworks",
        icon: Cpu,
        items: [
            { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
            { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
            { name: "LangChain", icon: Hexagon, color: "text-[#1C3C3C]" }, // Fallback for SiLangchain
            { name: "OpenCV", icon: SiOpencv, color: "text-[#5C3EE8]" },
        ],
    },
    {
        category: "Cloud & Infrastructure",
        icon: Cloud,
        items: [
            { name: "AWS", icon: SiAmazonwebservices, color: "text-[#FF9900]" },
            { name: "Google Cloud", icon: SiGooglecloud, color: "text-[#4285F4]" },
            { name: "Microsoft Azure", icon: FaMicrosoft, color: "text-[#0078D4]" },
            { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
        ],
    },
    {
        category: "Foundation Models",
        icon: Sparkles,
        items: [
            { name: "OpenAI", icon: SiOpenai, color: "text-[#412991]" },
            { name: "Anthropic AI", icon: SiAnthropic, color: "text-[#757575]" },
            { name: "Mistral AI", icon: Zap, color: "text-[#FDB813]" },
            { name: "Llama", icon: SiMeta, color: "text-[#0668E1]" },
        ],
    },
    {
        category: "Frontend Technologies",
        icon: Layout,
        items: [
            { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-[#000000]" },
            { name: "Vue.js", icon: SiVuedotjs, color: "text-[#4FC08D]" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        ],
    },
    {
        category: "Databases",
        icon: Database,
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
            { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
            { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
            { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
        ],
    },
    {
        category: "Deployment & Hosting",
        icon: Rocket,
        items: [
            { name: "Vercel", icon: SiVercel, color: "text-[#000000]" },
            { name: "Netlify", icon: SiNetlify, color: "text-[#00C7B7]" },
            { name: "Render", icon: SiRender, color: "text-[#46E3B7]" },
            { name: "DigitalOcean", icon: SiDigitalocean, color: "text-[#0080FF]" },
        ],
    },
];

export default function TechStack() {
    const container = useRef(null);

    useGSAP(() => {
        // Header animation
        gsap.fromTo(".tech-header",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        // Left Categories animation
        gsap.fromTo(".tech-category-item",
            { x: -30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                x: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                immediateRender: false
            }
        );

        // Right Tech Icons animation
        gsap.fromTo(".tech-icon-item",
            { scale: 0.8, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                scale: 1,
                opacity: 1,
                stagger: {
                    each: 0.05,
                    grid: "auto",
                    from: "start"
                },
                duration: 0.6,
                ease: "back.out(1.7)",
                immediateRender: false
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="tech-header text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Built on a Modern, Scalable Technology Stack
                    </h2>
                    <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                        Leveraging industry-leading tools and platforms to deliver secure, high-performance digital solutions.
                    </p>
                </div>

                <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                    <div className="flex flex-col lg:flex-row min-h-[600px]">
                        {/* LEFT SIDE: Categories */}
                        <div className="lg:w-[325px] bg-gray-50/30 border-r border-gray-100 p-6 sm:p-8 flex flex-col gap-8">
                            {techStack.map((category, idx) => (
                                <div
                                    key={idx}
                                    className="tech-category-item flex items-center gap-4 bg-white border border-gray-100 px-5 py-4 rounded-2xl shadow-sm group hover:border-blue-500/30 transition-all duration-300 cursor-default h-[72px] shrink-0"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors">
                                        <category.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
                                        {category.category}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT SIDE: Tech Grid */}
                        <div className="flex-1 p-6 sm:p-8">
                            <div className="flex flex-col gap-8 h-full">
                                {techStack.map((category, idx) => (
                                    <div key={idx} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center min-h-[72px]">
                                        {category.items.map((tech, techIdx) => (
                                            <div
                                                key={techIdx}
                                                className="tech-icon-item flex flex-col items-center justify-center gap-2 group cursor-default transition-all duration-300 hover:scale-105"
                                            >
                                                <div className="w-12 h-12 flex items-center justify-center transition-all duration-500">
                                                    <tech.icon className={`w-8 h-8 md:w-10 md:h-10 ${tech.color} group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] group-hover:brightness-110 transition-all`} />
                                                </div>
                                                <span className="text-gray-600 font-medium text-[10px] md:text-[11px] text-center group-hover:text-gray-900 transition-colors uppercase tracking-wider">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
