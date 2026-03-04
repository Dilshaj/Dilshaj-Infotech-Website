"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaLocationDot, FaChevronRight } from "react-icons/fa6";
import CountryCodeSelector from "./CountryCodeSelector";
import { countries, Country } from "../data/countries";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries.find(c => c.code === "IN") || countries[0]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }

        setStatus("loading");

        const { firstName, lastName, phoneNumber, email, message } = formData;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phoneNumber,
                    email,
                    message,
                    selectedCountry
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    email: "",
                    message: ""
                });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                const data = await response.json();
                alert(data.error || "Failed to send message. Please try again.");
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("An error occurred. Please try again later.");
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="w-full bg-black pt-12 md:pt-22 pb-16 md:pb-24 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Grid Floor Background */}
            <div
                className="absolute inset-x-0 bottom-0 h-full pointer-events-none -z-10 opacity-60"
                style={{
                    backgroundImage: "url('/Home/bg_jobs.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            <div className="w-full px-6 md:px-12 lg:pl-[105px] lg:pr-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* LEFT SIDE CONTENT */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Ribbon Badge */}
                        <div className="mb-10 w-full flex justify-center lg:justify-start">
                            <div
                                className="relative flex items-center gap-2 lg:gap-4 pl-4 pr-10 lg:px-10 py-2.5 lg:py-3 w-fit ml-[-24px] md:ml-[-48px] lg:ml-[-105px]"
                                style={{
                                    background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                                    clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="relative w-7 h-7 lg:w-12 lg:h-12 flex items-center justify-center">
                                        <Image src="/Home/arrow.png" alt="Arrow" fill className="object-contain" />
                                    </div>
                                    <span className="text-white font-bold text-[20px] tracking-wider pr-4">Contact us</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[50px] font-semibold text-white leading-[1.3] lg:leading-[1.1] mb-8 md:mb-12 max-w-2xl px-2 lg:px-0">
                            We help transform your ideas into{" "}
                            <span className="bg-gradient-to-r from-[#3799FA] to-[#9961FB] bg-clip-text text-transparent">
                                successful digital solutions.
                            </span>
                        </h2>

                        {/* Contact Info */}
                        <div className="space-y-8 w-full max-w-md">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#3799FA]/20 group-hover:border-[#3799FA]/30">
                                    <FaPhone className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white/80 text-[18px] font-medium tracking-tight">089772 72783</span>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#3799FA]/20 group-hover:border-[#3799FA]/30">
                                    <FaEnvelope className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white/80 text-[18px] font-medium tracking-tight">dilshajinfotech.it@gmail.com</span>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#3799FA]/20 group-hover:border-[#3799FA]/30 mt-1">
                                    <FaLocationDot className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white/80 text-[18px] font-medium tracking-tight leading-relaxed text-left">
                                    225-2A, Narsipatnam,<br />
                                    Rolugunta, Visakhapatnam,<br />
                                    Andhra Pradesh 531114
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE – GLASS FORM */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3799FA]/20 to-[#9961FB]/20 blur-[100px] -z-10" />

                        <div className="bg-white/[0.08] backdrop-blur-2xl border border-white/20 rounded-[24px] md:rounded-[40px] p-6 md:p-10 shadow-2xl relative overflow-hidden">
                            <h3 className="text-white text-[18px] md:text-[22px] font-medium mb-8 md:mb-10 leading-relaxed text-center lg:text-left">
                                Partner With Experts Who Leverage AI & Tech To Transform Ideas Into Market-Leading Solutions.
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <input
                                            suppressHydrationWarning
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                            className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            suppressHydrationWarning
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                            className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4">
                                    <CountryCodeSelector
                                        selectedCountry={selectedCountry}
                                        onSelect={setSelectedCountry}
                                    />
                                    <input
                                        suppressHydrationWarning
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all"
                                    />
                                </div>

                                <input
                                    suppressHydrationWarning
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email ID"
                                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all"
                                    required
                                />

                                <textarea
                                    suppressHydrationWarning
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all resize-none"
                                    required
                                />

                                <button
                                    suppressHydrationWarning
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="flex items-center group relative h-16 w-full cursor-pointer overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(55,153,250,0.3)]"
                                >
                                    {/* LEFT ICON CIRCLE */}
                                    <div className="absolute left-2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-105">
                                        <FaChevronRight className="w-4 h-4 text-[#3799FA]" />
                                    </div>

                                    {/* MAIN BUTTON BODY */}
                                    <div
                                        className="pl-16 pr-8 h-full w-full flex items-center justify-center text-white font-bold text-[18px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all bg-gradient-to-r from-[#3799FA] to-[#9961FB]"
                                        style={{ borderRadius: '34px 34px 0px 34px' }}
                                    >
                                        {status === "loading" ? "Sending..." : "Lets Connect"}
                                    </div>
                                </button>

                                {status === "success" && (
                                    <p className="text-green-400 text-center mt-4 bg-green-400/10 py-3 rounded-xl border border-green-400/20">
                                        Message sent successfully! We'll get back to you soon.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
