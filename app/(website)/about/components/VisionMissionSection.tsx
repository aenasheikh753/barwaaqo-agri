"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function VisionMissionSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-custom-olive font-semibold tracking-wider text-sm uppercase block mb-4">Our Purpose</span>
                        <h2 className="text-4xl font-heading font-bold text-custom-primary mb-8 leading-tight">
                            Cultivating a Sustainable Future for Somalia
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-custom-sand/20 rounded-xl flex items-center justify-center text-custom-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-custom-primary mb-2">Our Vision</h3>
                                    <p className="text-custom-charcoal/70 leading-relaxed">
                                        To be the leading catalyst for agricultural transformation in East Africa, ensuring food security and prosperity through modern farming systems and strategic global partnerships.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-custom-olive/10 rounded-xl flex items-center justify-center text-custom-olive">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-custom-primary mb-2">Our Mission</h3>
                                    <p className="text-custom-charcoal/70 leading-relaxed">
                                        Providing high-quality agricultural inputs, expert advisory, and resilient irrigation solutions that empower farmers and drive sustainable economic growth across the region.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/about_agriculture.png"
                            alt="Agricultural Excellence"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-custom-primary/40 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
