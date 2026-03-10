"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";

export function KnowledgeHubSection() {
    return (
        <section className="relative py-16 bg-gradient-to-b from-custom-light-bg to-white overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-custom-olive/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-custom-sand/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-custom-primary">
                        Knowledge Hub
                    </h2>
                    <p className="text-lg text-custom-charcoal/80 leading-relaxed">
                        Dive into research, case studies, and data‑driven insights that empower modern farming across East Africa.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 text-custom-charcoal/70 !mb-8">
                        <li className="flex items-start space-x-2">
                            <span className="text-custom-olive font-bold">•</span>
                            <span>Latest agronomy research</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-custom-olive font-bold">•</span>
                            <span>Field case studies</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-custom-olive font-bold">•</span>
                            <span>Data analytics tools</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-custom-olive font-bold">•</span>
                            <span>Expert webinars & workshops</span>
                        </li>
                    </ul>
                    <div className="pt-4">
                        <Link href="/contact">
                            <Button variant="primary" className="px-10 rounded-full">Request Research Data</Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative lg:h-80 h-64 rounded-2xl overflow-hidden shadow-xl"
                >
                    <Image
                        src="/images/agri1.jpg"
                        alt="East African agricultural research field representing Barwaaqo Knowledge Hub"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
