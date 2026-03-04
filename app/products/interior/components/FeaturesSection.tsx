"use client";


export default function FeaturesSection() {
    return (
        <section className="relative w-full bg-black pt-20 pb-16 md:pb-32 overflow-hidden shrink-0">

            {/* Perspective Grid Background */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] md:h-[450px] z-0 overflow-hidden pointer-events-none opacity-40">
                <div
                    className="w-[200%] h-[200%] absolute left-[-50%] top-0"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        transform: "perspective(500px) rotateX(70deg)",
                        transformOrigin: "top center"
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-16">
                <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="font-bold text-[13px] md:text-[15px] uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#20B5F9] to-[#A851ED] mb-3">
                        What Makes It Special
                    </span>
                    <h2 className="text-white font-bold text-[28px] md:text-[45px] leading-[1.2]">
                        Innovative Tools for Modern Architecture
                    </h2>
                </div>
                <div className="w-full md:w-[45%] flex items-center md:mt-8">
                    <p className="text-[#a1a1a1] text-[14px] md:text-[17px] leading-[1.7] text-center md:text-left max-w-[500px] mx-auto md:mx-0">
                        Advanced digital solutions designed to streamline planning, enhance visualization, and transform architectural concepts into reality with precision and efficiency.
                    </p>
                </div>
            </div>

            {/* Cards Container */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-[#222222]/90 backdrop-blur-sm rounded-[16px] p-8 flex flex-col gap-8 relative overflow-hidden group border border-white/5 shadow-2xl transition-all">
                    <div className="flex justify-between items-start w-full">
                        <div className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#5a8bf5] to-[#8b5cf6] flex items-center justify-center shrink-0 shadow-lg">
                            {/* Map Pin SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <span className="text-white font-bold text-[24px]">01</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-[20px] md:text-[22px] mb-3 leading-[1.3]">Smart Design<br />Workspace</h3>
                        <p className="text-[#a1a1a1] text-[14px] leading-[1.6]">
                            Create, edit, and manage architectural layouts with precision tools.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#222222]/90 backdrop-blur-sm rounded-[16px] p-8 flex flex-col gap-8 relative overflow-hidden group border border-white/5 shadow-2xl transition-all">
                    <div className="flex justify-between items-start w-full">
                        <div className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#20B5F9] to-[#8b5cf6] flex items-center justify-center shrink-0 shadow-lg">
                            {/* Compass/3D SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                            </svg>
                        </div>
                        <span className="text-white font-bold text-[24px]">02</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-[20px] md:text-[22px] mb-3 leading-[1.3]">3D Visualization &<br />Rendering</h3>
                        <p className="text-[#a1a1a1] text-[14px] leading-[1.6]">
                            High-quality real-time 3D previews for better project clarity.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#222222]/90 backdrop-blur-sm rounded-[16px] p-8 flex flex-col gap-8 relative overflow-hidden group border border-white/5 shadow-2xl transition-all">
                    <div className="flex justify-between items-start w-full">
                        <div className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#20B5F9] to-[#8b5cf6] flex items-center justify-center shrink-0 shadow-lg">
                            {/* Dashboard SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <rect x="7" y="7" width="10" height="10" rx="1" ry="1"></rect>
                                <path d="M12 11v2"></path>
                                <path d="M11 12h2"></path>
                            </svg>
                        </div>
                        <span className="text-white font-bold text-[24px]">03</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-[20px] md:text-[22px] mb-3 leading-[1.3]">Project Tracking<br />Dashboard</h3>
                        <p className="text-[#a1a1a1] text-[14px] leading-[1.6]">
                            Monitor progress, budgets, and deadlines in one centralized system.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
