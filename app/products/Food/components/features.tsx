"use client";

import { Poppins } from 'next/font/google';
import f1Icon from '../images/f1.png';
import f2Icon from '../images/f2.png';
import f3Icon from '../images/f3.png';
import f4Icon from '../images/f4.png';
import f5Icon from '../images/f5.png';
import f6Icon from '../images/f6.png';
import { useRef } from 'react';
import { ParticleCard, GlobalSpotlight, useMobileDetection } from './magic-bento-utils';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const featuresData = [
    {
        title: "Real-Time Order Tracking",
        desc: "Track your order live from kitchen preparation to doorstep delivery with accurate status updates and estimated arrival times for a stress-free experience.",
        icon: (
            <img src={f1Icon.src} alt="Tracking" className="w-[39px] h-auto object-contain" />
        )
    },
    {
        title: "Multiple Payment Options",
        desc: "Pay securely using cards, digital wallets, UPI, or cash on delivery with fast processing and encrypted transactions for complete peace of mind.",
        icon: (
            <img src={f2Icon.src} alt="Payment" className="w-[39px] h-auto object-contain" />
        )
    },
    {
        title: "Restaurant Partner Dashboard",
        desc: "Restaurants can easily manage menus, update pricing, monitor incoming orders, and track performance through a simple and intuitive admin panel.",
        icon: (
            <img src={f3Icon.src} alt="Dashboard" className="w-[39px] h-auto object-contain" />
        )
    },
    {
        title: "Exclusive Offers & Discounts",
        desc: "Access personalized deals, seasonal promotions, and special discounts designed to enhance customer engagement and boost order frequency.",
        icon: (
            <img src={f4Icon.src} alt="Offers" className="w-[39px] h-auto object-contain" />
        )
    },
    {
        title: "Smart Delivery Allocation",
        desc: "Our intelligent system assigns delivery partners efficiently to ensure faster pickups, optimized routes, and timely deliveries.",
        icon: (
            <img src={f5Icon.src} alt="Delivery Allocation" className="w-[39px] h-auto object-contain" />
        )
    },
    {
        title: "Ratings & Reviews For Improve",
        desc: "Customers can rate meals, share feedback, and discover highly recommended restaurants based on real user experiences.",
        icon: (
            <img src={f6Icon.src} alt="Reviews" className="w-[39px] h-auto object-contain" />
        )
    }
];

export default function Features() {
    const gridRef = useRef<HTMLDivElement>(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = isMobile;

    return (
        <section className="w-full bg-[#131215] relative py-20 px-4 md:px-8 font-sans overflow-hidden">
            <style>
                {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: 38, 83, 179;
            --border-color: rgba(255,255,255,0.05);
            --background-dark: #1a1a1a;
            --white: hsl(0, 0%, 100%);
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(var(--glow-color), calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(var(--glow-color), calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.3s ease;
            z-index: 10;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(38, 83, 179, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
        `}
            </style>

            {/* Top Left Features Badge */}
            <div className="absolute top-10 left-0 z-20" style={{ filter: 'drop-shadow(3px 4px 5px rgba(0,0,0,0.5))' }}>
                <div
                    className="bg-gradient-to-r from-[#0057A8] to-[#0089F5] text-white py-2.5 pl-6 pr-12 flex items-center gap-2"
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%)', width: '190px' }}
                >
                    <div className="flex -space-x-1 opacity-90 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                    <span className={`${poppins.className} text-[18px] font-bold tracking-wide mt-0.5 ml-1 pr-3`}>Features</span>
                </div>
            </div>

            <div className="max-w-[1250px] mx-auto mt-16 md:mt-20">
                {/* Heading */}
                <div className="text-center mb-16 px-2 md:px-0">
                    <h2 className={`${poppins.className} max-md:text-[22px] text-[30px] md:text-[40px] font-bold text-white leading-[1.3] max-md:leading-[1.4] tracking-normal`}>
                        <span className="md:hidden">
                            Everything You Need for a<br />
                            Better Food Delivery<br />
                            Experience
                        </span>
                        <span className="hidden md:block">
                            Everything You Need for a Better Food<br />
                            Delivery Experience
                        </span>
                    </h2>
                </div>

                {/* Grid */}
                <GlobalSpotlight
                    gridRef={gridRef}
                    disableAnimations={shouldDisableAnimations}
                    enabled={true}
                    spotlightRadius={300}
                    glowColor="38, 83, 179"
                />
                <div ref={gridRef} className="bento-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {featuresData.map((feature, idx) => (
                        <ParticleCard
                            key={idx}
                            disableAnimations={shouldDisableAnimations}
                            particleCount={12}
                            glowColor="38, 83, 179"
                            enableTilt={false}
                            clickEffect={true}
                            enableMagnetism={false}
                            className={`card min-h-[200px] card--border-glow p-10 rounded-[20px] bg-[var(--background-dark)] transition-all duration-300 group hover:shadow-[0_8px_25px_rgba(38,83,179,0.15)]`}
                            style={{
                                backgroundColor: 'var(--background-dark)',
                                borderColor: idx === 4 ? '#2653B3' : 'var(--border-color)',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                '--glow-x': '50%',
                                '--glow-y': '50%',
                                '--glow-intensity': '0',
                                '--glow-radius': '200px'
                            }}
                        >
                            <div className="w-10 h-10 bg-[#262626] rounded-md flex items-center justify-center text-[#d1d1d1] mb-8 border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
                                {feature.icon}
                            </div>
                            <h3 className={`${poppins.className} text-white font-semibold text-[19px] leading-[1.4] mb-4 pr-4 tracking-wide relative z-20`}>
                                {feature.title}
                            </h3>
                            <p className="text-[#a1a1a1] text-[14.5px] leading-[1.7] relative z-20">
                                {feature.desc}
                            </p>
                        </ParticleCard>
                    ))}
                </div>
            </div>

        </section>
    );
}
