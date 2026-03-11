"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

export function FoundationSection() {
    const { t } = useLanguage();
    const values = [
        { titleKey: "about.foundation.techLeadership", descKey: "about.foundation.techLeadershipDesc", icon: "🧬" },
        { titleKey: "about.foundation.operationalIntegrity", descKey: "about.foundation.operationalIntegrityDesc", icon: "🛡️" },
        { titleKey: "about.foundation.adaptiveResilience", descKey: "about.foundation.adaptiveResilienceDesc", icon: "🏗️" },
        { titleKey: "about.foundation.inclusiveGrowth", descKey: "about.foundation.inclusiveGrowthDesc", icon: "📈" }
    ];

    return (
        <section className="py-16 bg-custom-light-bg relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-custom-primary) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <span className="text-custom-olive font-semibold tracking-wider text-sm uppercase block mb-4">{t("about.foundation.label")}</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-custom-primary mb-6">{t("about.foundation.title")}</h2>
                    <p className="text-custom-charcoal/60 text-lg leading-relaxed font-body">
                        {t("about.foundation.intro")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-10 rounded-[2rem] border border-custom-accent/30 hover:border-custom-olive/30 hover:shadow-[0_20px_50px_-12px_rgba(11,61,46,0.1)] transition-all duration-500 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-custom-light-bg flex items-center justify-center text-3xl mb-8 group-hover:bg-custom-olive group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                {v.icon}
                            </div>
                            <h3 className="text-xl font-bold text-custom-primary mb-4 group-hover:text-custom-olive transition-colors">{t(v.titleKey)}</h3>
                            <p className="text-custom-charcoal/60 leading-relaxed text-sm font-body">{t(v.descKey)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

