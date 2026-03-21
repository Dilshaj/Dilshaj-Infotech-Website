"use client";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Hero() {
    return (
        <section
            className="relative w-full min-h-screen max-md:min-h-[140px] max-md:h-[140px] flex items-center bg-[#06102B] max-md:bg-[length:100%_100%] max-md:bg-center md:bg-cover md:bg-center bg-no-repeat overflow-hidden font-sans"
            style={{ backgroundImage: "url('/products-images/B&C.png')" }}
        >
            {/* Subtle overlay */}
            <div className="absolute inset-0 max-md:bg-gradient-to-r max-md:from-[#06102B]/90 max-md:via-[#06102B]/40 max-md:to-transparent md:bg-gradient-to-r md:from-[#06102B]/80 md:via-transparent md:to-transparent z-0"></div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-2 sm:px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between">

                {/* Left Side Content */}
                <div className="w-full md:w-[60%] lg:w-[50%] h-[calc(100vh-80px)] max-md:h-full max-md:pt-0 max-md:-mt-4 max-md:pb-1 md:h-auto pt-24 pb-8 md:pt-12 md:pb-16 lg:py-0 md:mb-12 lg:mb-24 flex flex-col max-md:justify-start md:justify-center">
                    <div>
                        <h1 className={`${poppins.className} text-[9px] sm:text-[11px] md:text-[36px] lg:text-[42px] xl:text-[46px] font-semibold text-white leading-[1.2] md:leading-[1.1] tracking-normal mb-[2px] md:mb-7`}>
                            A next-generation <span className="text-[#A26DFF]">Bike &amp; Car booking</span><br className="block md:hidden" /> <span className="text-[#3A8EFE]">platform</span> designed to make urban travel<br className="block md:hidden" /> faster, safer, and more affordable.
                        </h1>

                        <p className="text-[#B3BCE5] text-[6px] sm:text-[7px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-medium mb-[4px] md:mb-10 max-w-[95%] md:max-w-[480px] lg:max-w-[550px] leading-[1.6]">
                            Dilshaj Infotech is building a smart mobility<br className="block md:hidden" /> solution that connects riders with trusted<br className="block md:hidden" /> drivers through a seamless and user-<br className="block md:hidden" />friendly app experience.
                        </p>
                    </div>

                    <div className="mt-auto md:mt-0 max-md:mt-1">
                        <button className="flex items-center group relative h-12 w-fit cursor-pointer mt-auto md:mt-8 lg:mt-16">
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#3799FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB] rounded-[34px_34px_0px_34px]">
                                Coming Soon
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Side Spacer */}
                <div className="hidden md:block w-full md:w-[40%] lg:w-[50%] h-[200px] md:h-[500px] pointer-events-none">
                </div>

            </div>
        </section>
    );
}
