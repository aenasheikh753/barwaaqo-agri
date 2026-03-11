"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../../../components/ui/Button";
import { useLanguage } from "../../../context/LanguageContext";
import { LanguageSwitcher } from "../LanguageSwitcher";

const navLinkKeys: Record<string, string> = {
    "Home": "nav.home",
    "About": "nav.about",
    "Services": "nav.services",
    "Seed & Inputs": "nav.seedInputs",
    "Farm Advisory": "nav.farmAdvisory",
    "Irrigation": "nav.irrigation",
    "Farmer Programs": "nav.farmerPrograms",
    "Projects": "nav.projects",
    "Insights": "nav.insights",
    "Partners": "nav.partners",
    "Contact": "nav.contact",
};

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const { t, locale } = useLanguage();
    const isSomali = locale === "so";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            try {
                window.scrollTo({ top: 0 });
            } catch {
                window.scrollTo(0, 0);
            }
        } else {
            document.body.style.overflow = originalOverflow || "";
        }
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
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
        <nav className={`fixed w-full z-[2000] transition-all duration-500 ease-in-out ${isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
            }`}>
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="relative h-10 w-18 md:h-12 lg:h-14 group transition-all duration-300 overflow-hidden">
                    <Image
                        src="/images/barwaaqo-logo.jpg"
                        alt="Barwaaqo Agri Group Logo"
                        fill
                        className={`object-contain object-left transition-all duration-500 ${!isScrolled && "brightness-110"}`}
                        priority
                    />
                </Link>

                {/* Desktop Nav - Hidden on lg, shown on xl */}
                <div
                    className={`hidden xl:flex items-center ${isSomali ? "space-x-4 2xl:space-x-6" : "space-x-8 2xl:space-x-12"}`}
                >
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
                                        <span className="inline-flex items-center">
                                            <span>{navLinkKeys[link.name] ? t(navLinkKeys[link.name]) : link.name}</span>
                                            <svg className={`ml-1 w-3.5 h-3.5 transition-transform ${isScrolled ? "text-custom-charcoal" : "text-white"} group-hover/nav:rotate-180`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.29a.75.75 0 0 1-.02-1.08z" clipRule="evenodd" />
                                            </svg>
                                        </span>
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
                                        {navLinkKeys[link.name] ? t(navLinkKeys[link.name]) : link.name}
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
                                                    {navLinkKeys[sublink.name] ? t(navLinkKeys[sublink.name]) : sublink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <LanguageSwitcher variant="header" isScrolled={isScrolled} />
                    <Link href="/partners">
                        <Button
                            variant={isScrolled ? "primary" : "secondary"}
                            className={`rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-widest shadow-xl transform transition-all active:scale-95 ${!isScrolled && "bg-white text-custom-primary hover:bg-custom-sand"
                                }`}
                        >
                            {t("nav.partnerWithUs")}
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
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <div className="relative w-6 h-5">
                        <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-2 rotate-45" : "top-0"}`} />
                        <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 top-2 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-2 -rotate-45" : "top-4"}`} />
                    </div>
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <div id="mobile-menu" className={`xl:hidden fixed inset-0 z-[2100] bg-white transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
                }`}>
                <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between pl-0 pr-6 md:pl-0 md:pr-12 pt-6 md:pt-12 pb-6">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative h-9 w-36 md:h-10 overflow-hidden">
                            <Image src="/images/barwaaqo-logo.jpg" alt="Logo" fill className="object-contain rounded-2xl" />
                        </Link>
                        <button className="p-3 text-custom-primary bg-custom-light-bg rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar px-6 md:px-12">
                        <div className="space-y-6 pb-12">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.dropdown && link.dropdown.some(sub => pathname === sub.href));

                                return (
                                    <div key={link.name} className="flex flex-col space-y-3">
                                        {link.dropdown ? (
                                            (() => {
                                                const expanded = openMobileDropdown === link.name;
                                                return (
                                                    <>
                                                        <button
                                                            type="button"
                                                            onClick={() => setOpenMobileDropdown(expanded ? null : link.name)}
                                                            aria-expanded={expanded}
                                                            className={`flex items-center justify-between text-left w-full px-0 text-2xl font-bold transition-colors ${expanded ? "text-custom-olive" : "text-custom-primary hover:text-custom-olive"}`}
                                                        >
                                                            <span>{navLinkKeys[link.name] ? t(navLinkKeys[link.name]) : link.name}</span>
                                                            <svg className={`ml-2 w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.29a.75.75 0 0 1-.02-1.08z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                        <div className={`grid grid-cols-1 gap-4 pl-4 border-l-2 border-custom-sand/30 transition-all duration-300 overflow-hidden ${expanded ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0 pointer-events-none"}`}>
                                                            {link.dropdown.map((sublink) => (
                                                                <Link
                                                                    key={sublink.name}
                                                                    href={sublink.href}
                                                                    className={`text-xl font-bold transition-colors ${pathname === sublink.href ? "text-custom-olive" : "text-custom-charcoal hover:text-custom-olive"}`}
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {navLinkKeys[sublink.name] ? t(navLinkKeys[sublink.name]) : sublink.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </>
                                                );
                                            })()
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className={`text-2xl font-bold transition-colors ${isActive ? "text-custom-olive" : "text-custom-primary hover:text-custom-olive"}`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {navLinkKeys[link.name] ? t(navLinkKeys[link.name]) : link.name}
                                            </Link>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="pt-8 border-t border-custom-accent/10 px-6 md:px-12 pb-6 flex flex-col gap-4">
                        <div className="xl:hidden">
                            <LanguageSwitcher variant="footer" />
                        </div>
                        <Link href="/partners" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="w-full text-lg py-5 rounded-2xl shadow-xl shadow-custom-primary/10">{t("nav.partnerWithUs")}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
