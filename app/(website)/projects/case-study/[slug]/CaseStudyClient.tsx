"use client";

import Image from "next/image";
import { useLanguage } from "../../../../context/LanguageContext";
import { BackToLink } from "../../../components/BackToLink";
import { TranslatedNotFound } from "../../../components/TranslatedNotFound";

const CASE_STUDY_MAP: Record<string, { key: string; image: string }> = {
    "baidoa-irrigation": { key: "caseStudies.baidoaIrrigation", image: "/images/project-1.png" },
    "regional-seed-trials": { key: "caseStudies.regionalSeedTrials", image: "/images/agri1.jpg" },
    "farmer-to-market": { key: "caseStudies.farmerToMarket", image: "/images/agri2.jpg" }
};

export function CaseStudyClient({ slug }: { slug: string }) {
    const { t } = useLanguage();
    const entry = CASE_STUDY_MAP[slug];

    if (!entry) return <TranslatedNotFound type="caseStudy" />;

    const base = entry.key;
    const tags = [t(`${base}.tag1`), t(`${base}.tag2`), t(`${base}.tag3`)].filter(Boolean);

    return (
        <main className="bg-white">
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={entry.image} alt={t(`${base}.title`)} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-custom-primary/70" />
                </div>
                <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-white">
                    <div className="flex items-center gap-4 text-white/90 text-sm font-bold uppercase tracking-widest mb-4">
                        <span>{t(`${base}.category`)}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-custom-sand" />
                        <span>{t(`${base}.location`)}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 drop-shadow-lg text-custom-sand">{t(`${base}.title`)}</h1>
                    <p className="text-xl text-white/90 max-w-2xl font-body">{t(`${base}.desc`)}</p>
                    <div className="mt-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl">
                        <span className="text-2xl font-bold">{t(`${base}.impact`)}</span>
                        <span className="text-white/80 text-sm uppercase tracking-wider">{t("projects.impactLabel")}</span>
                    </div>
                </div>
            </section>

            <section className="py-16 max-w-[1200px] mx-auto px-6">
                <div className="flex flex-wrap gap-3 mb-12">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-custom-light-bg border border-custom-accent/30 rounded-full text-sm font-semibold text-custom-charcoal/70">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-lg text-custom-charcoal/70 leading-relaxed font-body max-w-3xl mb-12">
                    {t(`${base}.desc`)}
                </p>
                <BackToLink href="/projects" labelKey="projects.backToProjects" />
            </section>
        </main>
    );
}

