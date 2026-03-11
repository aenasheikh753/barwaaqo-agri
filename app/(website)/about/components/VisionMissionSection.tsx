"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";

const FALLBACK_IMAGE = "/images/agri2.jpg";

export function VisionMissionSection() {
    const [imgSrc, setImgSrc] = useState("/images/about_agriculture_professional.png");
    const { t } = useLanguage();
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-custom-olive font-semibold tracking-wider text-sm uppercase block mb-4">{t("about.visionMission.label")}</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-custom-primary mb-8 leading-tight">
                            {t("about.visionMission.title")}
                        </h2>

                        <p className="text-lg text-custom-charcoal/80 mb-10 leading-relaxed font-body">
                            {t("about.visionMission.intro")}
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-custom-sand/20 rounded-2xl flex items-center justify-center text-custom-primary">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth="2"><path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M12 11.5a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5zM12 21a9 9 0 0 1-8-5.12" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-custom-primary mb-2">{t("about.visionMission.ourVision")}</h3>
                                    <p className="text-custom-charcoal/60 leading-relaxed text-base">
                                        {t("about.visionMission.visionText")}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-custom-olive/10 rounded-2xl flex items-center justify-center text-custom-olive">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth="2"><path d="M3 6l9 6l9-6M3 18l9-6l9 6M12 12V3" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-custom-primary mb-2">{t("about.visionMission.ourMission")}</h3>
                                    <p className="text-custom-charcoal/60 leading-relaxed text-base">
                                        {t("about.visionMission.missionText")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative w-full aspect-[4/3] min-h-[280px] sm:aspect-[3/2] sm:min-h-0 md:aspect-auto md:h-96 lg:h-[400px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(11,61,46,0.25)]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={imgSrc}
                            alt="Scaling Agriculture in East Africa"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            onError={() => setImgSrc(FALLBACK_IMAGE)}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-custom-primary/50 to-transparent" />

                        {/* Impact Stats Overlay */}
                        <div className="absolute bottom-10 left-10 right-10 grid grid-cols-2 gap-6 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                            <div>
                                <div className="text-white text-3xl font-bold font-heading mb-1">98%</div>
                                <div className="text-white/70 text-xs uppercase tracking-widest font-bold">{t("about.visionMission.clientSuccessRate")}</div>
                            </div>
                            <div>
                                <div className="text-white text-3xl font-bold font-heading mb-1">100k+</div>
                                <div className="text-white/70 text-xs uppercase tracking-widest font-bold">{t("about.visionMission.hectaresSupported")}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


