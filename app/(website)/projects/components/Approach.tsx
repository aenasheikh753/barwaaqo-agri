"use client";

import { motion } from "framer-motion";

export function Approach() {
    const steps = [
        {
            title: "Assessment",
            desc: "On-ground research and soil analysis to understand specific regional needs."
        },
        {
            title: "Innovation",
            desc: "Customizing international seed varieties and irrigation designs for Somali soil."
        },
        {
            title: "Scaling",
            desc: "Partnering with thousands of farmers to implement solutions at scale."
        }
    ];

    return (
        <section className="py-24 bg-custom-light-bg">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <span className="text-custom-olive font-bold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
                <h2 className="text-4xl font-heading font-bold text-custom-primary mb-16">The Barwaaqo Approach</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-12 rounded-3xl shadow-sm border border-custom-accent/30"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 rounded-full bg-custom-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-xl">
                                {i + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-custom-primary mb-4">{step.title}</h3>
                            <p className="text-custom-charcoal/70 leading-relaxed font-body">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
