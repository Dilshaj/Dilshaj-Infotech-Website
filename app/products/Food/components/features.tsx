"use client";
import React, { useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import { FaClock, FaCreditCard, FaStore, FaTag, FaMotorcycle, FaStar } from 'react-icons/fa6';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const featuresData = [
    {
        title: "Real-Time Order Tracking",
        desc: "Track your order live from kitchen preparation to doorstep delivery with accurate status updates and estimated arrival times for a stress-free experience.",
        icon: <FaClock className="w-5 h-5 text-white" />
    },
    {
        title: "Multiple Payment Options",
        desc: "Pay securely using cards, digital wallets, UPI, or cash on delivery with fast processing and encrypted transactions for complete peace of mind.",
        icon: <FaCreditCard className="w-5 h-5 text-white" />
    },
    {
        title: "Restaurant Partner Dashboard",
        desc: "Restaurants can easily manage menus, update pricing, monitor incoming orders, and track performance through a simple and intuitive admin panel.",
        icon: <FaStore className="w-5 h-5 text-white" />
    },
    {
        title: "Exclusive Offers & Discounts",
        desc: "Access personalized deals, seasonal promotions, and special discounts designed to enhance customer engagement and boost order frequency.",
        icon: <FaTag className="w-5 h-5 text-white" />
    },
    {
        title: "Smart Delivery Allocation",
        desc: "Our intelligent system assigns delivery partners efficiently to ensure faster pickups, optimized routes, and timely deliveries.",
        icon: <FaMotorcycle className="w-5 h-5 text-white" />
    },
    {
        title: "Ratings & Reviews For Improve",
        desc: "Customers can rate meals, share feedback, and discover highly recommended restaurants based on real user experiences.",
        icon: <FaStar className="w-5 h-5 text-white" />
    }
];

export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".features-header", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".features-header",
                    start: "top 85%",
                }
            });

            gsap.from(".feature-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".feature-card",
                    start: "top 90%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#0A0A0A] relative py-20 px-4 md:px-8 font-sans overflow-hidden">
            
            {/* Top Left Features Badge - EXACT MATCH TO SCREENSHOT */}
            <div className="absolute top-10 left-0 z-20" style={{ filter: 'drop-shadow(3px 4px 5px rgba(0,0,0,0.5))' }}>
                <div
                    className="bg-[#0092F0] text-white py-3 pl-8 pr-12 flex items-center gap-2"
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%)', width: '210px' }}
                >
                    <span className="text-white opacity-80 font-bold tracking-[-3px] text-[20px] mr-2">&gt;&gt;</span>
                    <span className={`${poppins.className} text-[20px] font-bold tracking-wide mt-0.5`}>Features</span>
                </div>
            </div>

            <div className="max-w-[1250px] mx-auto mt-20 md:mt-24">
                {/* Heading */}
                <div className="text-center mb-16 px-2 md:px-0 flex flex-col items-center features-header">
                    <h2 className={`${poppins.className} text-[32px] md:text-[42px] font-bold text-white leading-[1.25] max-w-[800px]`}>
                        Everything You Need for a Better Food Delivery Experience
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-12">
                    {featuresData.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className="bg-[#151515] p-8 md:p-10 rounded-[20px] border border-white/5 hover:border-[#3799FA]/30 transition-all duration-300 flex flex-col feature-card"
                        >
                            <div className="w-10 h-10 bg-[#262626] rounded-[8px] flex items-center justify-center mb-8 border border-white/10">
                                {feature.icon}
                            </div>
                            <h3 className={`${poppins.className} text-white font-bold text-[20px] md:text-[22px] mb-4 leading-tight`}>
                                {feature.title}
                            </h3>
                            <p className="text-[#888888] text-[15px] md:text-[15.5px] leading-[1.6]">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
