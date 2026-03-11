"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";
import { useLanguage } from "../../../context/LanguageContext";

export default function ProgramsPage() {
    const { t } = useLanguage();
    return (
        <main className="bg-white">
            <section className="relative h-[50vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0">
                    <Image src="/images/hero_agriculture.png" alt="Farmer Programs" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 text-white drop-shadow-2xl">{t("services.programs.heroTitle")}</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-body drop-shadow-lg">{t("services.programs.heroSubtitle")}</p>
                </div>
            </section>

            <section className="py-16 max-w-5xl mx-auto px-6 font-body">
                <div className="text-center mb-20 space-y-6">
                    <h2 className="text-4xl font-heading font-bold text-custom-primary">{t("services.programs.sectionTitle")}</h2>
                    <p className="text-lg text-custom-charcoal/70 max-w-3xl mx-auto">
                        {t("services.programs.sectionIntro")}
                    </p>
                </div>

                <div className="space-y-12">
                    {[
                        { titleKey: "services.programs.outgrowerTitle", descKey: "services.programs.outgrowerDesc" },
                        { titleKey: "services.programs.technicalTrainingTitle", descKey: "services.programs.technicalTrainingDesc" },
                        { titleKey: "services.programs.inputAccessTitle", descKey: "services.programs.inputAccessDesc" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-8 items-center p-8 md:p-10 bg-white border border-gray-100 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 ease-out">
                            <div className="text-5xl font-black text-custom-sand">{idx + 1}</div>
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-custom-primary">{t(item.titleKey)}</h3>
                                <p className="text-custom-charcoal/70 leading-relaxed text-sm md:text-base">{t(item.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-16 border-t border-custom-accent/30 text-center">
                    <h3 className="text-2xl font-bold text-custom-primary mb-8">{t("services.programs.readyToGrow")}</h3>
                    <Link href="/contact">
                        <Button variant="primary" className="px-12 py-4">{t("services.programs.registerWorkshop")}</Button>
                    </Link>
                </div>

                <div className="pt-16 border-t border-custom-accent/20 text-center">
                    <Link href="/services">
                        <Button variant="outline" className="px-10 py-4 rounded-full border-2 hover:bg-custom-primary hover:text-white transition-all">
                            {t("common.viewAllServices")}
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
