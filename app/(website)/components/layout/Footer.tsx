"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";
import { LanguageSwitcher } from "../LanguageSwitcher";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-custom-primary text-custom-light-bg py-12 md:py-20 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                {/* Column 1: Brand */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                    <Link href="/" className="relative h-12 w-48">
                        <Image
                            src="/images/barwaaqo-logo.jpg"
                            alt="Barwaaqo Agri Group Logo"
                            fill
                            className="object-contain object-center md:object-left"
                        />
                    </Link>
                    <p className="text-custom-sand font-heading text-xl font-bold tracking-wide">
                        Barwaaqo Agri Group
                    </p>
                    <p className="text-custom-light-bg/60 text-sm leading-relaxed max-w-xs">
                        {t("footer.tagline")}
                    </p>
                    <div className="w-full max-w-xs pt-4">
                        <LanguageSwitcher variant="footer" />
                    </div>
                </div>

                {/* Column 2: Services */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="font-heading font-semibold text-lg mb-8 text-custom-sand uppercase tracking-widest border-b border-custom-sand/20 pb-2">{t("footer.services")}</h4>
                    <ul className="space-y-4 font-body text-custom-light-bg/80">
                        <li><Link href="/services/seeds" className="hover:text-custom-sand transition-colors">{t("footer.agriculturalInputs")}</Link></li>
                        <li><Link href="/services/advisory" className="hover:text-custom-sand transition-colors">{t("footer.farmAdvisory")}</Link></li>
                        <li><Link href="/services/irrigation" className="hover:text-custom-sand transition-colors">{t("footer.irrigationDevelopment")}</Link></li>
                        <li><Link href="/services/programs" className="hover:text-custom-sand transition-colors">{t("footer.farmerPrograms")}</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="font-heading font-semibold text-lg mb-8 text-custom-sand uppercase tracking-widest border-b border-custom-sand/20 pb-2">{t("footer.contact")}</h4>
                    <div className="space-y-6 font-body text-custom-light-bg/80">
                        <div className="flex flex-col space-y-1">
                            <span className="text-custom-sand/50 text-xs uppercase tracking-widest">{t("footer.location")}</span>
                            <span className="text-lg">{t("footer.mogadishu")}</span>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span className="text-custom-sand/50 text-xs uppercase tracking-widest">{t("footer.email")}</span>
                            <a href="mailto:contact@barwaaqoagri.com" className="text-lg hover:text-custom-sand transition-colors break-all">
                                contact@barwaaqoagri.com
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center md:text-left">
                <p className="text-xs font-body text-custom-light-bg/30">&copy; {new Date().getFullYear()} Barwaaqo Agri Group. {t("footer.allRightsReserved")}</p>
            </div>
        </footer>
    );
}
