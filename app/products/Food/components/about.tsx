"use client";

import { Poppins } from 'next/font/google';
const foodImg1 = '/products/food-images/food.png';

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
});

export default function About() {
    return (
        <section className="w-full bg-white relative py-20 lg:py-28 px-4 md:px-8 font-sans overflow-hidden">
            <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-8 xl:gap-14">

                {/* Left side Image */}
                <div className="w-full lg:w-[45%] max-md:order-2 max-md:mt-6">
                    <div className="rounded-[24px] overflow-hidden shadow-2xl relative w-full aspect-[4/3] lg:aspect-[4/3.5] bg-gray-100">
                        <img
                            src={foodImg1}
                            alt="Cooking Food"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right side Content */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center max-md:items-start max-md:text-left max-md:order-1">
                    <div className="mb-4">
                        <span className="bg-gradient-to-r from-[#4DA5FF] to-[#9458F6] text-transparent bg-clip-text font-bold text-[13px] md:text-[14px] tracking-wide uppercase">
                            ABOUT THE UPCOMING APP
                        </span>
                    </div>

                    <h2 className={`${poppins.className} max-md:text-[34px] text-[32px] md:text-[44px] lg:text-[48px] font-bold text-black leading-[1.2] md:leading-[1.1] mb-6`}>
                        <span className="md:hidden">
                            A Platform Built for<br />
                            Speed and Growth
                        </span>
                        <span className="hidden md:block">
                            A Platform Built for Speed<br />
                            and Growth
                        </span>
                    </h2>

                    <p className="text-[#555555] max-md:text-[14.5px] text-[15px] md:text-[16px] leading-[1.7] mb-8 max-w-[650px]">
                        From restaurant onboarding and smart order management to secure payments and real-time delivery tracking, our food delivery platform provides everything businesses need to launch, operate, and scale successfully.
                        <br /><br />
                        Designed with scalable architecture and a mobile-first approach, it ensures smooth performance across all devices while delivering a fast, reliable, and user-friendly experience for customers, restaurants, and delivery partners.
                    </p>

                    <div>
                        <button className="bg-black text-white px-10 py-3.5 rounded-[12px] font-bold text-[15px] hover:bg-[#111] transition-all shadow-xl">
                            Stay Tuned
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
