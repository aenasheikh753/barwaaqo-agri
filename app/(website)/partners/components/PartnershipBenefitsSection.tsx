"use client";

import { motion } from "framer-motion";

export function PartnershipBenefitsSection() {
    const benefits = [
        {
            title: "Market Access",
            desc: "Direct entry into the rapidly growing East African agricultural market.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
        },
        {
            title: "Local Expertise",
            desc: "Deep understanding of regional soil, climate, and regulatory landscapes.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        },
        {
            title: "Infrastructure",
            desc: "Established distribution networks and strategic logistics capability.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-11h.01M10 14h2m4 0h.01M10 18h2m4 0h.01"></path></svg>
        },
        {
            title: "Sustainable Impact",
            desc: "Join high-impact projects that transform lives and ensure food security.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
        }
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-custom-olive font-bold uppercase tracking-widest text-sm mb-4 block">Why Partner With Us?</span>
                    <h2 className="text-4xl font-heading font-bold text-custom-primary">The Strategic Advantage</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out transform hover:-translate-y-2 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-custom-light-bg text-custom-primary flex items-center justify-center mb-4 shadow-sm group-hover:bg-custom-primary group-hover:text-white transition-colors duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-bold text-custom-primary mb-1.5">{benefit.title}</h3>
                            <p className="text-custom-charcoal/70 leading-relaxed text-sm">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
