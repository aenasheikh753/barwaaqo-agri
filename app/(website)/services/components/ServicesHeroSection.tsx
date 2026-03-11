"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";

export function ServicesHeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative h-[55vh] md:h-[60vh] min-h-[360px] md:min-h-[450px] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/agri2.jpg"
          alt="High-quality agricultural fields and production"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-custom-primary/40" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-custom-sand font-semibold tracking-wider text-xs sm:text-sm uppercase block mb-3 sm:mb-4">{t("services.hero.label")}</span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-3 sm:mb-6 leading-snug tracking-tight max-w-[20ch] break-words">
            {t("services.hero.title")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-100/90 leading-relaxed max-w-md sm:max-w-2xl drop-shadow-md font-normal">
            {t("services.hero.subtitle")}
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
