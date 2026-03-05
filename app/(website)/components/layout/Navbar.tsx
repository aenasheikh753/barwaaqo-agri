"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/Button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] py-3"
            : "bg-transparent py-6"
            }`}>
            <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="relative h-14 w-56 group">
                    <Image
                        src="/images/barwaaqo-logo.jpg"
                        alt="Barwaaqo Agri Group Logo"
                        fill
                        className={`object-contain transition-all duration-500 ${!isScrolled && "brightness-110"}`}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group/nav">
                            <Link
                                href={link.href}
                                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-2 ${isScrolled
                                    ? "text-custom-charcoal hover:text-custom-olive"
                                    : "text-white hover:text-custom-sand drop-shadow-md"
                                    }`}
                            >
                                {link.name}
                                {/* Animated underline */}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/nav:w-full ${isScrolled ? "bg-custom-olive" : "bg-custom-sand"
                                    }`} />
                            </Link>

                            {/* Dropdown */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 mt-4 w-60 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top scale-95 group-hover/nav:scale-100 border border-custom-accent/20 overflow-hidden">
                                    <div className="py-3">
                                        {link.dropdown.map((sublink) => (
                                            <Link
                                                key={sublink.name}
                                                href={sublink.href}
                                                className="block px-6 py-3 text-sm text-custom-charcoal hover:bg-custom-sand/10 hover:text-custom-primary transition-all flex items-center group/sub"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-custom-sand mr-3 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                                {sublink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <Button
                        variant={isScrolled ? "primary" : "secondary"}
                        className={`rounded-full px-8 py-3.5 shadow-lg transform transition-transform active:scale-95 ${!isScrolled && "bg-white text-custom-primary hover:bg-custom-sand"
                            }`}
                    >
                        Partner With Us
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden p-3 rounded-xl transition-colors ${isScrolled ? "bg-custom-light-bg text-custom-primary" : "bg-white/10 text-white backdrop-blur-md"
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
                    </svg>
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] bg-white p-8 flex flex-col items-center justify-center space-y-8 text-center animate-in fade-in slide-in-from-top duration-300">
                    <button className="absolute top-8 right-8 text-custom-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-2xl font-bold text-custom-primary hover:text-custom-olive" onClick={() => setIsMobileMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full text-lg py-5 rounded-2xl">Partner With Us</Button>
                </div>
            )}
        </nav>
    );
}
