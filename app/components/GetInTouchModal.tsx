"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GetInTouchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GetInTouchModal({ isOpen, onClose }: GetInTouchModalProps) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">

                    {/* Backdrop overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ type: "spring", damping: 28, stiffness: 350 }}
                        className="relative w-full max-w-[1050px] bg-white rounded-[28px] overflow-hidden shadow-2xl flex flex-col md:flex-row md:h-[700px]"
                    >
                        {/* Close Button */}
                        <button
                            suppressHydrationWarning
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-[#1aa4ff] text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* LEFT SIDE: Image — no curve, just fills full height */}
                        <div className="relative w-full md:w-1/2 h-[260px] md:h-full shrink-0">
                            <Image
                                src="/Home/modal_meeting.png"
                                alt="Business Meeting"
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </div>

                        {/* RIGHT SIDE: Form */}
                        <div className="flex-1 bg-[#f3f4f6] p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                            <div className="mb-8 md:mb-10">
                                <h2 className="text-[22px] md:text-[30px] leading-tight text-gray-700 font-normal">
                                    Let&apos;s Build Digital Success For
                                </h2>
                                <h3 className="text-[28px] md:text-[38px] font-bold text-black leading-tight mt-1">
                                    Your Business !!
                                </h3>
                            </div>

                            <form className="space-y-6 md:space-y-7">
                                {/* Name */}
                                <input
                                    suppressHydrationWarning
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-transparent border-b-2 border-gray-300 pb-2 focus:border-[#3799FA] outline-none transition-colors text-base md:text-lg placeholder:text-gray-500"
                                />

                                {/* Email */}
                                <input
                                    suppressHydrationWarning
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border-b-2 border-gray-300 pb-2 focus:border-[#3799FA] outline-none transition-colors text-base md:text-lg placeholder:text-gray-500"
                                />

                                {/* Phone with flag */}
                                <div className="flex items-center gap-3 border-b-2 border-gray-300 pb-2 focus-within:border-[#3799FA] transition-colors">
                                    <div className="flex items-center gap-1.5 shrink-0">
                                        <Image
                                            src="https://flagcdn.com/in.svg"
                                            alt="India"
                                            width={24}
                                            height={16}
                                            className="rounded-sm"
                                        />
                                        <span className="text-gray-400 text-xs">▼</span>
                                    </div>
                                    <input
                                        suppressHydrationWarning
                                        type="tel"
                                        placeholder="Phone"
                                        className="flex-1 bg-transparent outline-none text-base md:text-lg placeholder:text-gray-500"
                                    />
                                </div>

                                {/* Business Details */}
                                <textarea
                                    suppressHydrationWarning
                                    placeholder="Tell Us About Your Business"
                                    rows={1}
                                    className="w-full bg-transparent border-b-2 border-gray-300 pb-2 focus:border-[#3799FA] outline-none transition-colors text-base md:text-lg placeholder:text-gray-500 resize-none overflow-hidden"
                                    onInput={(e) => {
                                        const t = e.target as HTMLTextAreaElement;
                                        t.style.height = "auto";
                                        t.style.height = `${t.scrollHeight}px`;
                                    }}
                                />

                                {/* Submit */}
                                <div className="pt-1 flex justify-center md:justify-start">
                                    <button
                                        suppressHydrationWarning
                                        type="submit"
                                        className="px-10 py-3 rounded-xl bg-gradient-to-r from-[#3799FA] to-[#9961FB] text-white font-bold text-lg md:text-xl shadow-lg hover:brightness-110 active:scale-95 transition-all"
                                    >
                                        Submit
                                    </button>
                                </div>

                                {/* Checkboxes */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                                    <label className="flex items-center gap-2.5 cursor-pointer">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" className="peer appearance-none w-[18px] h-[18px] border-2 border-[#3799FA] rounded checked:bg-[#3799FA] cursor-pointer transition-all" />
                                            <svg className="absolute w-[18px] h-[18px] p-[3px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 11"></polyline></svg>
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-700 uppercase tracking-tight">I Agree To Receive SMS</span>
                                    </label>

                                    <label className="flex items-center gap-2.5 cursor-pointer">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" className="peer appearance-none w-[18px] h-[18px] border-2 border-[#3799FA] rounded checked:bg-[#3799FA] cursor-pointer transition-all" />
                                            <svg className="absolute w-[18px] h-[18px] p-[3px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 11"></polyline></svg>
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-700 uppercase tracking-tight">Connect On WhatsApp</span>
                                    </label>
                                </div>
                            </form>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
