"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export function TrustStripSection() {
  const { t } = useLanguage();
  const items = [
    "🌱 " + t("home.trustStrip.seedInputs"),
    "🌾 " + t("home.trustStrip.farmAdvisory"),
    "💧 " + t("home.trustStrip.irrigation"),
    "👨‍🌾 " + t("home.trustStrip.farmerPrograms"),
  ];

  return (
    <section className="border-t bg-custom-sand border-custom-accent/20 overflow-hidden">
      <div className="text-center pt-16 px-4">
        <span className="inline-block bg-custom-accent/10 text-custom-primary px-4 py-1 rounded-full text-base font-bold uppercase tracking-widest">
          {t("home.trustStrip.badge")}
        </span>
        <h2 className="text-custom-primary text-4xl md:text-5xl font-heading font-bold leading-tight">
          {t("home.trustStrip.title")}
        </h2>
        <p className="text-custom-olive text-xs  md:text-sm uppercase tracking-widest mt-2">
          {t("home.trustStrip.subtitle")}
        </p>
      </div>
      <div className="whitespace-nowrap animate-scroll flex gap-6 pt-10 pb-16 sm:pb-16 items-center">
        {items.concat(items).map((item, i) => (
          <Link
            key={i}
            href="/services"
            className="text-custom-primary font-semibold uppercase tracking-wider text-[12px] md:text-sm border border-custom-olive px-4 py-2 rounded-full hover:bg-custom-accent/10 hover:border-custom-accent transition-all duration-300"
          >
            {item}
          </Link>
        ))}
      </div>
    </section>
  );
}