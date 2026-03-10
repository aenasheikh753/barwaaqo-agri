"use client";

import { motion } from "framer-motion";

export function ProcessSection() {
    const steps = [
        {
            num: "01",
            title: "Consultation",
            desc: "We analyze your farm conditions, soil quality, and specific agricultural needs."
        },
        {
            num: "02",
            title: "Solution Design",
            desc: "Custom planning for irrigation, seed selection, and agronomic management."
        },
        {
            num: "03",
            title: "Implementation",
            desc: "Supply of inputs and professional installation of systems on-site."
        },
        {
            num: "04",
            title: "Optimization",
            desc: "Ongoing field advisory and monitoring to ensure maximum harvest performance."
        }
    ];

    return (
        <section className="py-16 bg-custom-primary text-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-custom-sand font-semibold tracking-wider text-sm uppercase block mb-4">Our Methodology</span>
                    <h2 className="text-4xl text-custom-accent font-heading font-bold mb-6">How We Work</h2>
                    <div className="w-24 h-1 bg-custom-olive mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-6xl font-black text-white/10 absolute -top-10 -left-4 z-0">{step.num}</div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 text-custom-sand">{step.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-white/20" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
