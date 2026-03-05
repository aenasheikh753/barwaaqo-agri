"use client";

import { motion } from "framer-motion";

export function ExpertiseSection() {
    const areas = [
        {
            title: "Agronomic Excellence",
            desc: "Years of field experience in Somali soil conditions and crop cycles."
        },
        {
            title: "Global Networks",
            desc: "Direct access to top-tier seed producers and technology providers in Asia and Europe."
        },
        {
            title: "Local Infrastructure",
            desc: "Robust logistics and support systems specialized for the East African terrain."
        }
    ];

    return (
        <section className="py-24 bg-custom-primary text-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-custom-sand font-semibold tracking-wider text-sm uppercase block mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                            Unparalleled Knowledge in <span className="text-custom-sand">East African</span> Agriculture
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-10">
                            We don&apos;t just supply products; we provide solutions. Our deep understanding of local climates coupled with international standards makes us a unique partner in regional growth.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {areas.map((a, i) => (
                            <motion.div
                                key={i}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-bold text-custom-sand mb-2">{a.title}</h3>
                                <p className="text-white/60 leading-relaxed text-sm">{a.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
