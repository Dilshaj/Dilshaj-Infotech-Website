"use client";

import { Poppins } from 'next/font/google';
import foodImg1 from '../images/food1.png';

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
});

export default function About() {
    return (
        <section className="w-full bg-white relative py-20 lg:py-28 px-4 md:px-8 font-sans overflow-hidden">
            <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-8 xl:gap-10">

                {/* Left side Image */}
                <div className="w-full lg:w-[45%] max-md:order-2 max-md:mt-6">
                    <div className="rounded-[24px] overflow-hidden shadow-2xl relative w-full aspect-[4/3] lg:aspect-[4/3.5] bg-gray-100">
                        <img
                            src={foodImg1.src}
                            alt="Cooking Food"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right side Content */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center max-md:items-center max-md:text-center max-md:order-1">
                    <div className="mb-4">
                        <span className="bg-gradient-to-r from-[#4DA5FF] to-[#9458F6] text-transparent bg-clip-text font-bold text-[13px] md:text-[14px] tracking-wide uppercase">
                            ABOUT THE UPCOMING APP
                        </span>
                    </div>

                    <h2 className={`${poppins.className} max-md:text-[26px] text-[32px] md:text-[44px] lg:text-[48px] font-bold text-black leading-[1.2] md:leading-[1.15] mb-6`}>
                        <span className="md:hidden">
                            A Platform Built for<br />
                            Speed<br />
                            and Growth
                        </span>
                        <span className="hidden md:block">
                            A Platform Built for Speed<br />
                            and Growth
                        </span>
                    </h2>

                    <p className="text-[#555555] max-md:text-[14px] text-[15px] md:text-[16px] leading-[1.7] mb-8 max-w-[650px]">
                        From restaurant onboarding and smart order management to secure payments and real-time delivery tracking, our food delivery platform provides everything businesses need to launch, operate, and scale successfully.
                        <br /><br />
                        Designed with scalable architecture and a mobile-first approach, it ensures smooth performance across all devices while delivering a fast, reliable, and user-friendly experience for customers, restaurants, and delivery partners.
                    </p>

                    <div>
                        <button className="flex items-center group relative h-12 w-fit cursor-pointer">
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#3799FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                                Stay Tuned
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
