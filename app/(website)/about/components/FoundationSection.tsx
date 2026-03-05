"use client";

import { motion } from "framer-motion";

export function FoundationSection() {
    const values = [
        {
            title: "Innovation",
            desc: "Embracing cutting-edge agricultural technologies to solve local challenges.",
            icon: "💡"
        },
        {
            title: "Integrity",
            desc: "Building trust through transparent partnerships and reliable quality inputs.",
            icon: "🤝"
        },
        {
            title: "Resilience",
            desc: "Developing systems that adapt to climate change and ensure year-round growth.",
            icon: "🌱"
        },
        {
            title: "Community",
            desc: "Empowering local farmers and contributing to regional food security.",
            icon: "🌍"
        }
    ];

    return (
        <section className="py-24 bg-custom-light-bg">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-custom-olive font-semibold tracking-wider text-sm uppercase block mb-4">Core Principles</span>
                    <h2 className="text-4xl font-heading font-bold text-custom-primary">The Pillars of Our Success</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-custom-accent/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl mb-6">{v.icon}</div>
                            <h3 className="text-xl font-bold text-custom-primary mb-4">{v.title}</h3>
                            <p className="text-custom-charcoal/70 leading-relaxed text-sm">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
