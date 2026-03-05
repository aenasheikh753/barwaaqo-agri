"use client";

import { motion } from "framer-motion";

export function PartnershipsSection() {
    return (
        <section className="py-[100px] bg-custom-sand/10 border-y border-custom-accent/50">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-custom-primary mb-6">
                        Partnerships & Collaboration
                    </h2>
                    <p className="text-lg text-custom-charcoal/80 font-body max-w-3xl mx-auto mb-16 leading-relaxed">
                        Barwaaqo Agri Group collaborates with leading international seed producers, irrigation technology providers, agricultural research institutions, and development partners to deliver cutting-edge solutions for sustainable agriculture across East Africa. Our structured partnerships ensure access to the latest innovations and global best practices.
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {[
                        "Global Seed Companies",
                        "Irrigation Specialists",
                        "Agronomy Institutes",
                        "Development Partners"
                    ].map((partner, i) => (
                        <div key={i} className="h-16 w-32 flex items-center justify-center bg-transparent">
                            <div className="text-2xl font-heading font-bold text-custom-primary/40">{partner}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
