"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export function InsightsSection() {
    const { t } = useLanguage();
    return (
        <section className="py-16 max-w-[1200px] mx-auto px-6">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-custom-primary mb-6">
                    {t("home.insightsSection.title")}
                </h2>
                <div className="w-24 h-1 bg-custom-olive rounded mx-auto mb-6"></div>
                <p className="text-lg text-custom-charcoal/80 font-body max-w-2xl mx-auto">
                    {t("home.insightsSection.subtitle")}
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {[
                    { titleKey: "home.insightsSection.tomatoTitle", descKey: "home.insightsSection.tomatoDesc", slug: "tomato-production-somalia" },
                    { titleKey: "home.insightsSection.dripTitle", descKey: "home.insightsSection.dripDesc", slug: "benefits-drip-irrigation" },
                    { titleKey: "home.insightsSection.soilTitle", descKey: "home.insightsSection.soilDesc", slug: "soil-preparation-techniques" }
                ].map((insight, i) => (
                    <Link key={i} href={`/insights/${insight.slug}`}>
                        <motion.article
                            className="group cursor-pointer bg-white border border-custom-accent/40 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-custom-olive/50 transition-all duration-300 h-full flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <span className="text-custom-olive font-body text-sm font-semibold tracking-wider uppercase mb-3 block">
                                {t("common.agronomyGuide")}
                            </span>
                            <h3 className="text-2xl font-heading font-semibold text-custom-primary mb-3 group-hover:text-custom-olive transition-colors leading-snug wrap-anywhere hyphens-auto">
                                {t(insight.titleKey)}
                            </h3>
                            <p className="text-custom-charcoal/70 font-body leading-relaxed mb-6 grow max-w-prose wrap-anywhere hyphens-auto">
                                {t(insight.descKey)}
                            </p>
                            <span className="text-custom-primary font-medium hover:text-custom-olive flex items-center space-x-2 transition-colors mt-auto">
                                <span>{t("common.readArticle")}</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </motion.article>
                    </Link>
                ))}
            </motion.div>
        </section>
    );
}
