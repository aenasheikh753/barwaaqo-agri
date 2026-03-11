"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";

export function DetailedProjectsSection() {
    const { t } = useLanguage();
    const projects = [
        {
            slug: "baidoa-irrigation",
            baseKey: "caseStudies.baidoaIrrigation",
            image: "/images/project-1.png",
        },
        {
            slug: "regional-seed-trials",
            baseKey: "caseStudies.regionalSeedTrials",
            image: "/images/agri1.jpg",
        },
        {
            slug: "farmer-to-market",
            baseKey: "caseStudies.farmerToMarket",
            image: "/images/agri2.jpg",
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="space-y-16 md:space-y-20">
                    {projects.map((project, index) => {
                        const base = project.baseKey;
                        const tags = [t(`${base}.tag1`), t(`${base}.tag2`), t(`${base}.tag3`)].filter(Boolean);
                        return (
                        <div key={index} className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Project Image */}
                            <motion.div
                                className="lg:w-1/2 relative h-[300px] w-full rounded-[40px] overflow-hidden shadow-2xl group"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Image src={project.image} alt={t(`${base}.title`)} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-custom-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                                        <p className="text-xs font-bold text-custom-olive uppercase tracking-widest mb-1">{t("projects.impactLabel")}</p>
                                        <p className="text-xl font-bold text-custom-primary">{t(`${base}.impact`)}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project Content */}
                            <motion.div
                                className="lg:w-1/2 space-y-8"
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-custom-olive text-sm font-bold uppercase tracking-widest">
                                        <span>{t(`${base}.category`)}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-custom-sand" />
                                        <span>{t(`${base}.location`)}</span>
                                    </div>
                                    <h3 className="text-4xl font-heading font-bold text-custom-primary leading-tight">{t(`${base}.title`)}</h3>
                                </div>

                                <p className="text-lg text-custom-charcoal/70 leading-relaxed font-body">
                                    {t(`${base}.desc`)}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-custom-light-bg border border-custom-accent/30 rounded-full text-xs font-semibold text-custom-charcoal/60">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Link href={`/projects/case-study/${project.slug}`} className="inline-flex items-center group text-custom-primary font-bold uppercase tracking-widest text-sm">
                                        <span className="border-b-2 border-custom-sand pb-1 group-hover:border-custom-olive transition-colors">{t("projects.viewCaseStudy")}</span>
                                        <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    );})}
                </div>
            </div>
        </section>
    );
}
