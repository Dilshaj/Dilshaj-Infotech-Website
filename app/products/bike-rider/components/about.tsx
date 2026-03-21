"use client";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function About() {
    return (
        <section className="w-full bg-white relative font-sans overflow-hidden py-16 md:py-24">

            {/* Top Ribbon - About */}
            <div
                className="absolute max-md:left-0 md:right-0 top-6 md:top-12 z-10 max-md:w-[115px] w-[180px] md:w-[240px]"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}
            >
                {/* Outer wrapper for the bright cyan border effect */}
                <div
                    className="w-full md:p-[2px] md:pr-0 max-md:bg-transparent bg-[#00B4FF] md:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,25px_50%)]"
                >
                    {/* Inner content with darker gradient */}
                    <div
                        className="w-full text-white max-md:py-1.5 md:py-4 max-md:pl-3 max-md:pr-5 md:pl-10 md:pr-12 max-md:text-[13px] text-[18px] md:text-[22px] font-bold flex items-center justify-start md:justify-end gap-1 md:gap-2 max-md:[clip-path:polygon(0_0,100%_0,calc(100%-12px)_50%,100%_100%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,24px_50%)]"
                        style={{
                            background: 'linear-gradient(to right, #005A99, #0094F0)'
                        }}
                    >
                        {/* Hollow double arrow icon for desktop */}
                        <div className="hidden md:flex gap-[2px] text-[18px] md:text-[20px] mr-1 mt-[2px]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-[-8px]"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                        {/* Hollow double arrow icon for mobile */}
                        <div className="flex md:hidden gap-[1px] mt-[1px]">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-[-6px]"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                        <span className="mb-[-2px] max-md:mb-[0px] max-md:-ml-0.5">About</span>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 mt-8 md:mt-0 flex flex-col items-center">

                <div className="flex flex-col md:flex-row items-center w-full gap-12 lg:gap-20">

                    {/* Left Column (Image) */}
                    <div className="w-full md:w-1/2 flex justify-center max-md:-mt-4 md:mt-0 relative z-10">
                        <div className="relative w-full aspect-[16/11] rounded-tr-[40px] md:rounded-tr-[60px] overflow-hidden shadow-none bg-[#f1f1f1]">
                            <img
                                src="/pro-det/bikecar.png"
                                alt="Bike and Car App"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/800x550/e0e0e0/333333?text=Add+bikecar.png+here"
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="w-full md:w-1/2 flex flex-col max-md:pt-0 max-md:-mt-8 md:pt-4">
                        <h2 className={`${poppins.className} max-md:text-center max-md:whitespace-nowrap text-[22px] sm:text-[24px] md:text-[38px] lg:text-[42px] font-bold text-[#1A1A1A] mb-4 md:mb-6 leading-tight`}>
                            Bike & Car Rider App
                        </h2>

                        <p className="text-[#3A3A3A] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.8] mb-12 w-full lg:w-[95%] font-medium">
                            The Bike & Car Rider App is an upcoming mobility platform that enables users to book bike rides and car rides instantly through a secure and intuitive interface. Built with advanced technology and real-time tracking, the app ensures quick pickups, transparent pricing, and safe journeys.
                        </p>

                        {/* Stats Row */}
                        <div className="flex items-center gap-12 md:gap-20 mb-12">
                            <div className="flex flex-col">
                                <span className={`${poppins.className} text-[32px] md:text-[56px] max-md:font-medium md:font-semibold text-[#111111] leading-none mb-3`}>
                                    50%
                                </span>
                                <span className="text-[#333] max-md:whitespace-nowrap max-md:text-[11px] text-[15px] md:text-[16px] font-medium">
                                    Faster Ride Matching
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className={`${poppins.className} text-[32px] md:text-[56px] max-md:font-medium md:font-semibold text-[#111111] leading-none mb-3`}>
                                    GPS
                                </span>
                                <span className="text-[#333] max-md:whitespace-nowrap max-md:text-[11px] text-[15px] md:text-[16px] font-medium">
                                    Real-Time GPS Tracking
                                </span>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-2 flex max-md:justify-center w-full md:justify-start">
                            <button className="flex items-center group relative h-12 w-fit cursor-pointer">
                                <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#3799FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </div>
                                <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                                    Get Early Access
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Ribbon - Key Features */}
            {/* Positioned on the left side, slightly overlapping the next section visually, or just at the bottom of this section */}
            <div
                className="absolute left-0 max-md:bottom-0 md:bottom-0 z-10 max-md:w-[130px] w-[220px] md:w-[280px]"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}
            >
                <div
                    className="w-full text-white max-md:py-1.5 md:py-4 max-md:pl-3 md:pl-12 max-md:pr-5 md:pr-10 max-md:text-[13px] text-[18px] md:text-[22px] font-bold flex items-center max-md:gap-1 gap-2 max-md:[clip-path:polygon(0_0,100%_0,calc(100%-12px)_50%,100%_100%,0_100%)] md:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%)]"
                    style={{
                        background: 'linear-gradient(to right, #006DB1, #0094F0)'
                    }}
                >
                    {/* Hollow double arrow for mobile */}
                    <div className="flex md:hidden gap-[1px] mt-[1px] shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-[-6px]"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                    {/* Default arrow for desktop */}
                    <span className="hidden md:inline text-xl md:text-2xl mt-[-2px]">»</span>
                    <span className="max-md:mt-[1px] max-md:whitespace-nowrap">Key Features</span>
                </div>
            </div>

        </section>
    );
}
