"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";

export function InsightsHeroSection() {
    const { t } = useLanguage();
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/agri2.jpg"
                    alt="Agricultural production and expertise in East Africa"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-custom-primary/80" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-custom-sand font-semibold tracking-[0.2em] text-sm uppercase block mb-6 px-4 py-1.5 border border-custom-sand/30 rounded-full w-fit mx-auto backdrop-blur-sm bg-custom-sand/5">
                        {t("insights.hero.badge")}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-8 leading-[1.1] tracking-tight">
                        {t("insights.hero.titlePrefix")}<span className="text-custom-sand">{t("insights.hero.titleHighlight")}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-100/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-light">
                        {t("insights.hero.subtitle")}
                    </p>
                </motion.div>
            </div>

            {/* Bottom Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}
