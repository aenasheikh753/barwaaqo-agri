"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../../../components/ui/Button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        {
            name: "Services",
            href: "/services",
            dropdown: [
                { name: "Seed & Inputs", href: "/services/seeds" },
                { name: "Farm Advisory", href: "/services/advisory" },
                { name: "Irrigation", href: "/services/irrigation" },
                { name: "Farmer Programs", href: "/services/programs" },
            ]
        },
        { name: "Projects", href: "/projects" },
        { name: "Insights", href: "/insights" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
            }`}>
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="relative h-10 w-28 md:h-12 md:w-44 lg:h-14 lg:w-48 group transition-all duration-300">
                    <Image
                        src="/images/barwaaqo-logo.jpg"
                        alt="Barwaaqo Agri Group Logo"
                        fill
                        className={`object-contain object-left transition-all duration-500 ${!isScrolled && "brightness-110"}`}
                        priority
                    />
                </Link>

                {/* Desktop Nav - Hidden on lg, shown on xl */}
                <div className="hidden xl:flex items-center space-x-8 2xl:space-x-12">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.dropdown && link.dropdown.some(sub => pathname === sub.href));

                        return (
                            <div key={link.name} className="relative group/nav">
                                {link.dropdown ? (
                                    <div
                                        className={`text-[13px] 2xl:text-sm font-bold tracking-wider transition-all duration-300 relative py-2 cursor-pointer uppercase ${isActive
                                                ? (isScrolled ? "text-custom-olive" : "text-custom-sand underline-offset-8")
                                                : (isScrolled ? "text-custom-charcoal hover:text-custom-olive" : "text-white hover:text-custom-sand drop-shadow-md")
                                            }`}
                                    >
                                        {link.name}
                                        <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover/nav:w-full"} ${isScrolled ? "bg-custom-olive" : "bg-custom-sand"
                                            }`} />
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`text-[13px] 2xl:text-sm font-bold tracking-wider transition-all duration-300 relative py-2 uppercase ${isActive
                                                ? (isScrolled ? "text-custom-olive" : "text-custom-sand underline-offset-8")
                                                : (isScrolled ? "text-custom-charcoal hover:text-custom-olive" : "text-white hover:text-custom-sand drop-shadow-md")
                                            }`}
                                    >
                                        {link.name}
                                        <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover/nav:w-full"} ${isScrolled ? "bg-custom-olive" : "bg-custom-sand"
                                            }`} />
                                    </Link>
                                )}

                                {/* Dropdown */}
                                {link.dropdown && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top scale-95 group-hover/nav:scale-100 border border-custom-accent/20 overflow-hidden">
                                        <div className="py-2">
                                            {link.dropdown.map((sublink) => (
                                                <Link
                                                    key={sublink.name}
                                                    href={sublink.href}
                                                    className={`block px-6 py-3 text-sm font-semibold transition-all flex items-center group/sub ${pathname === sublink.href ? "bg-custom-sand/20 text-custom-primary" : "text-custom-charcoal hover:bg-custom-sand/10 hover:text-custom-primary"
                                                        }`}
                                                >
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-custom-sand mr-3 transition-opacity ${pathname === sublink.href ? "opacity-100" : "opacity-0 group-hover/sub:opacity-100"}`} />
                                                    {sublink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <Link href="/partners">
                        <Button
                            variant={isScrolled ? "primary" : "secondary"}
                            className={`rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-widest shadow-xl transform transition-all active:scale-95 ${!isScrolled && "bg-white text-custom-primary hover:bg-custom-sand"
                                }`}
                        >
                            Partner With Us
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`xl:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-lg ${isScrolled
                        ? "bg-custom-primary text-white hover:bg-custom-olive"
                        : "bg-white/20 text-white backdrop-blur-lg hover:bg-white/30 border border-white/30"
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="relative w-6 h-5">
                        <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-2 rotate-45" : "top-0"}`} />
                        <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 top-2 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-2 -rotate-45" : "top-4"}`} />
                    </div>
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <div className={`xl:hidden fixed inset-0 z-[100] bg-white transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
                }`}>
                <div className="h-full flex flex-col p-6 md:p-12">
                    <div className="flex items-center justify-between mb-12">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative h-10 w-40">
                            <Image src="/images/barwaaqo-logo.jpg" alt="Logo" fill className="object-contain" />
                        </Link>
                        <button className="p-3 text-custom-primary bg-custom-light-bg rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="space-y-6 pb-12">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.dropdown && link.dropdown.some(sub => pathname === sub.href));

                                return (
                                    <div key={link.name} className="flex flex-col space-y-3">
                                        {link.dropdown ? (
                                            <>
                                                <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isActive ? "text-custom-olive" : "text-custom-primary/40"}`}>
                                                    {link.name}
                                                </span>
                                                <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-custom-sand/30">
                                                    {link.dropdown.map((sublink) => (
                                                        <Link
                                                            key={sublink.name}
                                                            href={sublink.href}
                                                            className={`text-xl font-bold transition-colors ${pathname === sublink.href ? "text-custom-olive" : "text-custom-charcoal hover:text-custom-olive"}`}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {sublink.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className={`text-2xl font-bold transition-colors ${isActive ? "text-custom-olive" : "text-custom-primary hover:text-custom-olive"}`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="pt-8 border-t border-custom-accent/10">
                        <Link href="/partners" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="w-full text-lg py-5 rounded-2xl shadow-xl shadow-custom-primary/10">Partner With Us</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
