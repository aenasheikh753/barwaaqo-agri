"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

export function Approach() {
    const { t } = useLanguage();
    const steps = [
        {
            title: t("projects.approach.step1Title"),
            desc: t("projects.approach.step1Desc")
        },
        {
            title: t("projects.approach.step2Title"),
            desc: t("projects.approach.step2Desc")
        },
        {
            title: t("projects.approach.step3Title"),
            desc: t("projects.approach.step3Desc")
        }
    ];

    return (
        <section className="py-16 bg-custom-light-bg">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <span className="text-custom-olive font-bold uppercase tracking-widest text-sm mb-4 block">{t("projects.approach.label")}</span>
                <h2 className="text-4xl font-heading font-bold text-custom-primary mb-16">{t("projects.approach.title")}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-12 rounded-3xl shadow-sm border border-custom-accent/30"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 rounded-full bg-custom-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-xl">
                                {i + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-custom-primary mb-4">{step.title}</h3>
                            <p className="text-custom-charcoal/70 leading-relaxed font-body">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
