"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";

export function DetailedServicesSection() {
    const { t } = useLanguage();
    const services = [
        {
            titleKey: "services.detailed.seedTitle",
            descKey: "services.detailed.seedDesc",
            itemKeys: ["services.detailed.seedItem1", "services.detailed.seedItem2", "services.detailed.seedItem3", "services.detailed.seedItem4"],
            image: "/images/agri1.jpg",
            link: "/services/seeds"
        },
        {
            titleKey: "services.detailed.irrigationTitle",
            descKey: "services.detailed.irrigationDesc",
            itemKeys: ["services.detailed.irrigationItem1", "services.detailed.irrigationItem2", "services.detailed.irrigationItem3", "services.detailed.irrigationItem4"],
            image: "/images/project-1.png",
            link: "/services/irrigation"
        },
        {
            titleKey: "services.detailed.advisoryTitle",
            descKey: "services.detailed.advisoryDesc",
            itemKeys: ["services.detailed.advisoryItem1", "services.detailed.advisoryItem2", "services.detailed.advisoryItem3", "services.detailed.advisoryItem4"],
            image: "/images/agri2.jpg",
            link: "/services/advisory"
        }
    ];

    return (
        <section className="py-16 bg-white overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <div className="space-y-12 sm:space-y-16 md:space-y-28 lg:space-y-32">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-10 md:gap-16 xl:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <motion.div
                                className="lg:w-1/2 relative h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Image src={service.image} alt={t(service.titleKey)} fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
                            </motion.div>

                            <motion.div
                                className="lg:w-1/2 space-y-4 md:space-y-6 w-full overflow-hidden"
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-custom-primary leading-snug max-w-[22ch] break-words">
                                    {t(service.titleKey)}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-custom-charcoal/70 leading-relaxed font-body max-w-prose break-words">
                                    {t(service.descKey)}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                                    {service.itemKeys.map((key, i) => (
                                        <li key={i} className="flex items-center text-custom-charcoal/80 text-sm break-words">
                                            <span className="w-1.5 h-1.5 rounded-full bg-custom-olive mr-3" />
                                            {t(key)}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-2 sm:pt-4">
                                    <Link href={service.link} className="inline-flex items-center text-custom-olive font-bold uppercase tracking-widest text-sm hover:text-custom-primary transition-colors group">
                                        {t("common.exploreDetails")}
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
