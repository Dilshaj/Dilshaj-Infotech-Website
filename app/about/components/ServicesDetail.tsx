"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Layout,
    Smartphone,
    Palette,
    RefreshCcw,
    Code2,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";

const services = [
    {
        id: 1,
        title: "Web Application Development",
        description: "Build secure, scalable web platforms that drive results.",
        icon: Layout,
        tag: "#WebDevelopment",
        cardTitle: "Build powerful digital systems that scale, perform, and deliver measurable impact.",
        bullets: [
            "Modern, scalable architecture",
            "Custom-built solutions",
            "Optimized for speed & security",
        ],
        features: [
            "Custom Web Platforms",
            "Mobile Application Solutions",
            "E-Commerce Systems",
            "Performance & Maintenance",
        ],
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Create high-performance Android & iOS applications.",
        icon: Smartphone,
        tag: "#MobileDevelopment",
        cardTitle: "Create seamless mobile experiences that engage, retain, and drive business growth.",
        bullets: [
            "Native and cross-platform apps",
            "High-performance Android and iOS solutions",
            "Engineered for engagement, reliability, and speed",
        ],
        features: [
            "iOS App Development",
            "Android App Solutions",
            "Cross-Platform Systems",
            "App Store Optimization",
        ],
    },
    {
        id: 3,
        title: "UI/UX Design & Strategy",
        description: "Design intuitive experiences that users love.",
        icon: Palette,
        tag: "#UIUXDesign",
        cardTitle: "Craft intuitive digital experiences that engage users, convert, and drive loyalty.",
        bullets: [
            "User-centric design approach",
            "Intuitive interfaces for your customers",
            "Optimized for flow, usability, and conversions",
        ],
        features: [
            "User Experience Research",
            "Wireframing & Prototyping",
            "Brand Identity Design",
            "Usability & Testing",
        ],
    },
    {
        id: 4,
        title: "Software Integration & Support",
        description: "Seamlessly connect systems and optimize workflows.",
        icon: RefreshCcw,
        tag: "#SystemIntegration",
        cardTitle: "Connect fragmented digital systems to streamline operations, enhance efficiency, and scale.",
        bullets: [
            "Seamless API Integrations",
            "Unified ecosystems for your workflow",
            "Optimized for data, sync, and reliability",
        ],
        features: [
            "Cloud Architecture Setup",
            "Custom API Integration",
            "Legacy System Upgrades",
            "Monitoring & Support",
        ],
    },
    {
        id: 5,
        title: "Custom Software Solutions",
        description: "Develop tailored systems built around your business needs.",
        icon: Code2,
        tag: "#CustomSoftware",
        cardTitle: "Develop tailored digital solutions that solve complex challenges and accelerate growth.",
        bullets: [
            "Bespoke enterprise architecture",
            "Purpose-built software for your operations",
            "Optimized for agility, scale, and longevity",
        ],
        features: [
            "Enterprise ERP Systems",
            "Business Process Automation",
            "SaaS Product Development",
            "Security & Compliance",
        ],
    },
];

export default function ServicesDetail() {
    const [activeId, setActiveId] = useState(1);
    const active = services.find((s) => s.id === activeId)!;

    return (
        <section className="bg-[#f3f4f6] py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">

            {/* Heading Area */}
            <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-gray-900 leading-tight">
                    Full-Stack Digital Development <br className="md:hidden" /> Services to Drive Innovation
                </h2>
                <p className="text-gray-600 text-base md:text-[16px] mt-6 max-w-5xl mx-auto px-4">
                    Our technology solutions are engineered to deliver measurable impact — faster performance,{" "}
                    <br className="hidden md:block" />
                    smarter workflows, and scalable systems built for modern businesses.
                </p>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[1440px] mx-auto lg:ml-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">

                    {/* LEFT: Service List */}
                    <div className="space-y-4 px-2 sm:px-0">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                onClick={() => setActiveId(service.id)}
                                className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${activeId === service.id
                                    ? "bg-black text-white shadow-2xl"
                                    : "bg-white text-gray-900 border border-gray-100 hover:shadow-md"
                                    }`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activeId === service.id ? "bg-white/10" : "bg-gray-100"
                                        }`}
                                >
                                    <service.icon
                                        className={`w-5 h-5 ${activeId === service.id ? "text-white" : "text-gray-700"
                                            }`}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{service.title}</h3>
                                    <p
                                        className={`text-sm mt-2 ${activeId === service.id ? "text-gray-400" : "text-gray-500"
                                            }`}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Detail Card (updates based on active service) */}
                    <div className="flex flex-col">

                        {/* Gradient Dark Card */}
                        <div className="relative overflow-hidden rounded-[27px] bg-[#1a1c2e] p-8 sm:p-12 text-white shadow-2xl w-[923px] max-w-[1923px] min-h-[418px] md:h-auto lg:h-[418px] flex flex-col justify-between">

                            {/* Top Section */}
                            <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12 relative z-10">

                                {/* Left: Tag + Title */}
                                <div className="max-w-xl text-left">
                                    <span className="inline-block bg-transparent px-5 py-1.5 rounded-full text-sm border border-white/20 mb-8 sm:mb-10">
                                        {active.tag}
                                    </span>
                                    <h3 className="text-3xl sm:text-4xl font-semibold leading-[1.2]">
                                        {active.cardTitle}
                                    </h3>
                                </div>

                                {/* Right: Bullet Points */}
                                <div className="space-y-6 lg:mt-16 w-full md:w-auto">
                                    {active.bullets.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-sm text-gray-200">
                                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-[#1a1c2e]" />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="relative z-10 mt-12 md:mt-0 mb-2">
                                <button suppressHydrationWarning className="group flex items-center gap-4 sm:gap-6 bg-gradient-to-r from-[#5a67fb] to-[#9b6efd] pl-2 pr-6 sm:pr-8 py-2 rounded-full font-semibold hover:scale-105 transition shadow-2xl w-full sm:w-auto">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
                                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <span className="text-base sm:text-lg text-center flex-1">Start Your Project</span>
                                </button>
                            </div>

                            {/* Mesh Overlays */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(90,103,251,0.15)_0%,_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(155,110,253,0.15)_0%,_transparent_50%)] pointer-events-none opacity-50" />
                            <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] pointer-events-none" />
                        </div>

                        {/* BOTTOM: 4 Feature Cards */}
                        <div className="mt-12 w-full">
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-10">
                                {active.features.map((feature, i) => (
                                    <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-5 shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </div>
                                        <h4 className="text-gray-900 font-bold text-lg leading-tight">
                                            {feature}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* AI Growth Banner */}
            <div className="mt-20 md:mt-24 w-full flex justify-center">
                <div className="relative overflow-hidden rounded-[27px] bg-[#1a1c2e] px-8 sm:px-10 lg:px-14 py-12 lg:py-0 text-white shadow-2xl w-full max-w-[1379px] h-auto lg:h-[249px] flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Innovation background image */}
                    <div className="absolute inset-0 pointer-events-none">
                        <Image
                            src="/about/innovation.png"
                            alt="AI Innovation"
                            fill
                            className="object-cover opacity-40"
                        />
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-2xl relative z-10 leading-tight text-center lg:text-left">
                        Turn Your Business Into an AI-Powered <br className="hidden sm:block lg:hidden" /> Growth Engine
                    </h3>
                    <div className="relative z-10 w-full lg:w-auto">
                        <button suppressHydrationWarning className="group flex items-center gap-6 bg-gradient-to-r from-[#5a67fb] to-[#9b6efd] pl-2 pr-8 py-2 rounded-full font-semibold hover:scale-105 transition shadow-2xl w-full sm:w-auto justify-center sm:justify-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <span className="text-lg whitespace-nowrap">Unlock AI Potential</span>
                        </button>
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(90,103,251,0.15)_0%,_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(155,110,253,0.15)_0%,_transparent_50%)] pointer-events-none opacity-50" />
                    <div className="absolute inset-0 bg-[#1a1c2e]/60 pointer-events-none" />
                </div>
            </div>

        </section>
    );
}