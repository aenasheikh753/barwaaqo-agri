"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";
import { useLanguage } from "../../../context/LanguageContext";

export default function AdvisoryPage() {
    const { t } = useLanguage();
    return (
        <main className="bg-white">
            <section className="relative h-[65vh] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/agri2.jpg" alt="Farm Advisory" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-5xl md:text-8xl font-heading font-bold mb-6 !text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">{t("services.advisory.heroTitle")}</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-body drop-shadow-md">{t("services.advisory.heroSubtitle")}</p>
                </div>
            </section>

            <section className="py-16 max-w-6xl mx-auto px-6 font-body text-custom-charcoal/70">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-heading font-bold text-custom-primary leading-tight">
                            {t("services.advisory.sectionTitle")}
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            {t("services.advisory.sectionIntro")}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 text-custom-primary">
                            <div className="space-y-2 border-l-2 border-custom-accent/20 pl-4">
                                <div className="text-xl font-bold">{t("services.advisory.soilAnalysis")}</div>
                                <p className="text-sm opacity-80">{t("services.advisory.soilAnalysisDesc")}</p>
                            </div>
                            <div className="space-y-2 border-l-2 border-custom-accent/20 pl-4">
                                <div className="text-xl font-bold">{t("services.advisory.cropPlanning")}</div>
                                <p className="text-sm opacity-80">{t("services.advisory.cropPlanningDesc")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image - Height Adjusted & Centered */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[400px] aspect-square lg:aspect-[5/6] max-h-[200px] rounded-[30px] overflow-hidden shadow-xl">
                            <Image
                                src="/images/agronomy-img.jpg"
                                alt="Agronomy Expert"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-custom-light-bg rounded-[40px] p-16 text-center space-y-8 border border-custom-accent/30">
                    <h3 className="text-3xl font-heading font-bold text-custom-primary">{t("services.advisory.partnerTitle")}</h3>
                    <p className="max-w-2xl mx-auto">{t("services.advisory.partnerDesc")}</p>
                    <Link href="/contact">
                        <Button variant="primary" className="px-12 py-4">{t("services.advisory.bookFieldVisit")}</Button>
                    </Link>
                </div>
                <div className="pt-12 border-t border-custom-accent/20 text-center">
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
