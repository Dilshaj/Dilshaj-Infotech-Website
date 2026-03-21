"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight, FaBars, FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import GetInTouchModal from "./GetInTouchModal";

const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Careers", href: "/career" }
];

const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Careers", href: "/career" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${hasScrolled ? "bg-white/20 backdrop-blur-md saturate-[180%] border-b border-white/30 shadow-lg py-3" : "bg-transparent border-b-transparent shadow-none py-5"}`}>
                <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
                    {/* LEFT: Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-16 h-12 transition-transform duration-300 group-hover:scale-110">
                            <Image src="/company_logo.png" alt="Dilshaj Logo" fill className="object-contain scale-250 origin-left" />
                        </div>
                    </Link>

                    {/* CENTER: Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group py-2"
                            >
                                <Link
                                    href={link.href}
                                    className={`flex items-center gap-1.5 text-[16px] font-semibold transition-colors duration-300 ${pathname === link.href
                                        ? "text-blue-600"
                                        : hasScrolled
                                            ? "text-gray-700 hover:text-blue-600"
                                            : (pathname === "/" ? "text-[#1F2933] hover:text-blue-600" : "text-white hover:text-blue-400")
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: CTA Button & Hamburger */}
                    <div className="flex items-center gap-4">
                        <button
                            suppressHydrationWarning
                            onClick={() => setIsGetInTouchOpen(true)}
                            className="hidden lg:flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                        >
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-gradient-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-gradient-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                Get in Touch
                            </div>
                        </button>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className={`lg:hidden p-2 transition-colors ${hasScrolled
                                ? "text-gray-800"
                                : (pathname === "/" ? "text-gray-800" : "text-white")
                                }`}
                            aria-label="Open Menu"
                        >
                            <FaBars className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE DRAWER */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 h-full w-[80%] max-w-[400px] bg-[#F8F9FA] z-[210] shadow-2xl flex flex-col"
                        >
                            {/* Drawer Header */}
                            <div className="p-6 flex items-center justify-between border-b border-gray-200">
                                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                    <Image src="/company_logo.png" alt="Logo" width={40} height={40} className="object-contain" />
                                </Link>
                                <button
                                    suppressHydrationWarning
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-gray-500 hover:text-black transition-colors"
                                >
                                    <FaXmark className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Drawer Links */}
                            <div className="flex-1 overflow-y-auto py-4">
                                {mobileNavLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center justify-between px-6 py-5 border-b border-gray-100 transition-colors group ${pathname === link.href ? "bg-blue-50/50" : "hover:bg-white"}`}
                                    >
                                        <span className={`text-[17px] font-semibold transition-colors ${pathname === link.href ? "text-blue-600" : "text-gray-800 group-hover:text-blue-600"}`}>{link.name}</span>
                                        <FaChevronRight className={`w-4 h-4 transition-all ${pathname === link.href ? "text-blue-600 translate-x-1" : "text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1"}`} />
                                    </Link>
                                ))}
                            </div>

                            {/* Drawer Footer CTA */}
                            <div className="p-6">
                                <button
                                    suppressHydrationWarning
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsGetInTouchOpen(true);
                                    }}
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#31B5FE] to-[#AC52F2] text-white font-bold flex items-center justify-center gap-3 shadow-lg"
                                >
                                    Get in Touch
                                    <FaChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <GetInTouchModal
                isOpen={isGetInTouchOpen}
                onClose={() => setIsGetInTouchOpen(false)}
            />
        </>
    );
}
