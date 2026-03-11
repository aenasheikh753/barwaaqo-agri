"use client";

import { Button } from "../../components/ui/Button";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export function ContactSection() {
    const { t } = useLanguage();
    return (
        <section className="py-16 max-w-[800px] mx-auto px-6">
            <motion.div 
                className="bg-white rounded-2xl p-10 md:p-14 shadow-2xl border border-custom-accent transform hover:-translate-y-1 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-heading font-bold text-custom-primary mb-4">
                        {t("home.contactSection.title")}
                    </h2>
                    <p className="text-custom-charcoal/80 font-body">
                        {t("home.contactSection.subtitle")} <a href="mailto:contact@barwaaqoagri.com" className="text-custom-olive font-semibold hover:underline">contact@barwaaqoagri.com</a>
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-charcoal font-body" htmlFor="name">{t("home.contactSection.name")}</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-xl border border-custom-accent bg-custom-light-bg/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-custom-olive transition-all font-body"
                                placeholder={t("home.contactSection.namePlaceholder")}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-charcoal font-body" htmlFor="email">{t("home.contactSection.email")}</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-xl border border-custom-accent bg-custom-light-bg/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-custom-olive transition-all font-body"
                                placeholder={t("home.contactSection.emailPlaceholder")}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-custom-charcoal font-body" htmlFor="message">{t("home.contactSection.message")}</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl border border-custom-accent bg-custom-light-bg/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-custom-olive transition-all font-body resize-none"
                            placeholder={t("home.contactSection.messagePlaceholder")}
                        ></textarea>
                    </div>
                    <Button variant="primary" className="w-full py-4 text-lg">
                        {t("home.contactSection.sendMessage")}
                    </Button>
                </form>
            </motion.div>
        </section>
    );
}
