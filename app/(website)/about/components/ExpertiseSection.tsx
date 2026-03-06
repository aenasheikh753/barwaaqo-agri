"use client";

import { motion } from "framer-motion";

export function ExpertiseSection() {
    const areas = [
        {
            title: "Global Supply Chain",
            desc: "Direct partnerships with leading seed breeders and input manufacturers in Europe and Asia, ensuring Somali farmers get first-class technology."
        },
        {
            title: "Technical Advisory",
            desc: "A team of senior agronomists providing soil-specific crop planning and pest management strategies tailored for the diverse Somali landscape."
        },
        {
            title: "Irrigation Systems",
            desc: "Engineering scalable water management solutions that turn arid land into productive, year-round vegetable and commodity crop fields."
        }
    ];

    return (
        <section className="py-24 bg-custom-primary text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-custom-sand font-semibold tracking-wider text-sm uppercase block mb-4">Our Competitive Edge</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight text-white italic">
                            Bringing <span className="text-custom-sand not-italic">World-Class</span> Standards to Somali Soil
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-10 font-body">
                            Barwaaqo Agri Group bridge the gap between global agricultural advancements and local field execution. Our expertise allows us to scale operations quickly while maintaining high-quality productivity across our projects.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {areas.map((a, i) => (
                            <motion.div
                                key={i}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-custom-sand group-hover:text-white transition-colors">{a.title}</h3>
                                    <div className="w-8 h-8 rounded-full border border-custom-sand/30 flex items-center justify-center text-custom-sand text-xs font-bold">0{i + 1}</div>
                                </div>
                                <p className="text-white/60 leading-relaxed text-sm font-body">{a.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

