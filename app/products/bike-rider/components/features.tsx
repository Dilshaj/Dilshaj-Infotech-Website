"use client";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Features() {
    return (
        <section className="w-full bg-white pt-16 md:pt-24 pb-16 md:pb-24 font-sans relative">
            <div className="max-w-[1100px] mx-auto px-4 md:px-8">

                {/* Heading */}
                <h2 className={`${poppins.className} max-md:text-center max-md:ml-0 text-[26px] md:text-[32px] lg:text-[36px] font-bold text-[#1A1A1A] mb-12 ml-2 md:ml-6`}>
                    Powerful Features. Seamless Travel.
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 px-2 md:px-6">

                    {/* Card 1 */}
                    <div className="bg-white rounded-tr-[40px] md:rounded-tr-[60px] rounded-bl-[40px] md:rounded-bl-[60px] flex flex-col items-center justify-center p-8 h-[220px] md:h-[260px] border-[1px] border-[#0094F0]">
                        <h3 className={`${poppins.className} text-[18px] md:text-[22px] font-semibold text-[#1A1A1A] mb-4 md:mb-6`}>Instant Bike Booking</h3>
                        <img src="/products/bike-rider-images/bike-rider-images/bike.png" alt="Instant Bike Booking" className="h-[90px] md:h-[120px] object-contain" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-br from-[#0094F0] to-[#00579A] rounded-tr-[40px] md:rounded-tr-[60px] rounded-bl-[40px] md:rounded-bl-[60px] flex flex-col items-center justify-center p-8 h-[220px] md:h-[260px]">
                        <h3 className={`${poppins.className} text-[18px] md:text-[22px] font-semibold text-white mb-4 md:mb-6`}>Secure Payments</h3>
                        <img src="/products/bike-rider-images/bike-rider-images/map.png" alt="Secure Payments" className="h-[90px] md:h-[120px] object-contain" />
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gradient-to-br from-[#0094F0] to-[#00579A] rounded-tr-[40px] md:rounded-tr-[60px] rounded-bl-[40px] md:rounded-bl-[60px] flex flex-col items-center justify-center p-8 h-[220px] md:h-[260px]">
                        <h3 className={`${poppins.className} text-[18px] md:text-[22px] font-semibold text-white mb-4 md:mb-6`}>Live Tracking</h3>
                        <img src="/products/bike-rider-images/bike-rider-images/phone.png" alt="Live Tracking" className="h-[90px] md:h-[120px] object-contain" />
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-tr-[40px] md:rounded-tr-[60px] rounded-bl-[40px] md:rounded-bl-[60px] flex flex-col items-center justify-center p-8 h-[220px] md:h-[260px] border-[1px] border-[#0094F0]">
                        <h3 className={`${poppins.className} text-[18px] md:text-[22px] font-semibold text-[#1A1A1A] mb-4 md:mb-6`}>Car Ride Options</h3>
                        <img src="/products/bike-rider-images/bike-rider-images/car.png" alt="Car Ride Options" className="h-[90px] md:h-[120px] object-contain" />
                    </div>

                </div>

                {/* Banner */}
                <div className="relative md:w-full max-md:w-[calc(100%+32px)] max-md:-ml-4 max-md:rounded-none rounded-[24px] overflow-hidden flex flex-col items-center justify-center max-md:py-1 md:py-6 max-md:min-h-[55px] md:min-h-[120px] mt-6 bg-[#07192f]">

                    {/* Left Banner Shape Image */}
                    <div className="absolute left-0 top-0 bottom-0 h-full pointer-events-none flex justify-start">
                        <img src="/products/bike-rider-images/bike-rider-images/leftbike.png" className="h-full w-auto object-left opacity-90" alt="" />
                    </div>

                    {/* Right Banner Shape Image */}
                    <div className="absolute right-0 top-0 bottom-0 h-full pointer-events-none flex justify-end">
                        <img src="/products/bike-rider-images/bike-rider-images/rightcar.png" className="h-full w-auto object-right opacity-90" alt="" />
                    </div>

                    {/* Banner Content */}
                    <div className="relative z-10 flex flex-col items-center text-center px-4 max-md:mt-0 mt-2 max-md:mb-0 mb-2">
                        <h2 className={`${poppins.className} max-md:text-[10px] md:text-[28px] lg:text-[32px] font-semibold text-white tracking-[0.05em] max-md:mb-1 mb-4 md:mb-5 `}>
                            LAUNCHING SOON
                        </h2>

                        <button className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px] mx-auto">
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-gradient-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-700 ease-in-out group-hover:stroke-white"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-gradient-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                Notify Me When Live
                            </div>
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}
