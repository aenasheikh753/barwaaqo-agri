"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

export function ExpertiseSection() {
    const { t } = useLanguage();
    const areas = [
        { titleKey: "about.expertise.globalSupply", descKey: "about.expertise.globalSupplyDesc" },
        { titleKey: "about.expertise.technicalAdvisory", descKey: "about.expertise.technicalAdvisoryDesc" },
        { titleKey: "about.expertise.irrigationSystems", descKey: "about.expertise.irrigationSystemsDesc" }
    ];

    return (
        <section className="py-16 bg-custom-primary text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-custom-sand font-semibold tracking-wider text-sm uppercase block mb-4">{t("about.expertise.label")}</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight text-white italic">
                            {t("about.expertise.title")}
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-10 font-body">
                            {t("about.expertise.intro")}
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {areas.map((a, i) => (
                            <motion.div
                                key={i}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300 ease-out group"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between items-start mb-2.5">
                                    <h3 className="text-lg font-bold text-custom-sand group-hover:text-white transition-colors">{t(a.titleKey)}</h3>
                                    <div className="w-7 h-7 rounded-full border border-custom-sand/30 flex items-center justify-center text-custom-sand text-xs font-bold">0{i + 1}</div>
                                </div>
                                <p className="text-white/60 leading-relaxed text-sm font-body">{t(a.descKey)}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

