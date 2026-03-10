"use client";

import { motion } from "framer-motion";

export function PartnershipsSection() {
    return (
        <section className="py-16 bg-custom-sand/10 border-y border-custom-accent/50 relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-custom-olive/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-custom-sand/10 rounded-full blur-3xl animate-pulse delay-700" />

            <div className="absolute top-10 left-10 w-12 h-12 text-custom-olive/10 animate-float pointer-events-none">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
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
                        Barwaaqo Agri Group collaborates with seed producers, agronomy specialists, agricultural suppliers, and development partners supporting sustainable agriculture across East Africa.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {[
                        { name: "Seed Pro", icon: "🌱" },
                        { name: "Aqua Systems", icon: "💧" },
                        { name: "Agro Tech", icon: "🔬" },
                        { name: "East Africa Dev", icon: "🌍" }
                    ].map((partner, i) => (
                        <div key={i} className="group flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm border border-custom-accent/30 rounded-2xl hover:bg-white hover:shadow-xl hover:border-custom-olive/30 transition-all duration-300">
                            <div className="text-4xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                                {partner.icon}
                            </div>
                            <div className="text-sm font-heading font-bold text-custom-primary/40 group-hover:text-custom-primary transition-colors uppercase tracking-widest text-center">
                                {partner.name}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
