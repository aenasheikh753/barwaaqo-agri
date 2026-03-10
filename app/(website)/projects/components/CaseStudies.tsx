"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CaseStudies() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-custom-olive font-bold uppercase tracking-widest text-sm mb-4 block">Case Study</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-custom-primary leading-tight mb-8">
                            Transforming the <br /><span className="text-custom-olive">Afgooye</span> Corridor
                        </h2>
                        <p className="text-lg text-custom-charcoal/70 leading-relaxed mb-10 font-body">
                            By introducing specialized seed varieties and structured agronomic support, we helped a cooperative of 50 farmers triple their yield of high-quality onions, opening up new export opportunities to regional markets.
                        </p>
                        <div className="grid grid-cols-2 gap-10 border-t border-custom-accent/30 pt-10">
                            <div>
                                <p className="text-3xl font-bold text-custom-primary">300%</p>
                                <p className="text-sm text-custom-charcoal/50 uppercase tracking-widest font-bold">Yield Increase</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-custom-primary">50+</p>
                                <p className="text-sm text-custom-charcoal/50 uppercase tracking-widest font-bold">Farming Households</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-[300px] rounded-[50px] overflow-hidden shadow-2xl skew-y-3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image src="/images/hero_agriculture.png" alt="Afgooye Case Study" fill className="object-cover" />
                        <div className="absolute inset-0 bg-custom-primary/20" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
