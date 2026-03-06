"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function InsightsSection() {
    return (
        <section className="py-[120px] max-w-[1200px] mx-auto px-6">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-custom-primary mb-6">
                    Agricultural Insights
                </h2>
                <div className="w-24 h-1 bg-custom-olive rounded mx-auto mb-6"></div>
                <p className="text-lg text-custom-charcoal/80 font-body max-w-2xl mx-auto">
                    Practical knowledge and updates from our agronomy teams in the field.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {[
                    {
                        title: "Best Seasons for Tomato Production in Somalia",
                        description: "Comprehensive guide to optimal planting windows, climate considerations, and variety selection for maximum yield in Somali growing conditions.",
                        slug: "tomato-production-somalia"
                    },
                    {
                        title: "Benefits of Drip Irrigation for Vegetable Farming",
                        description: "Analysis of water-saving technologies and their impact on crop productivity, with case studies from our irrigation pilot programs across East Africa.",
                        slug: "benefits-drip-irrigation"
                    },
                    {
                        title: "Soil Preparation Techniques for Smallholder Farms",
                        description: "Evidence-based methods for soil health improvement, nutrient management, and sustainable practices adapted to local farming systems.",
                        slug: "soil-preparation-techniques"
                    }
                ].map((insight, i) => (
                    <Link key={i} href={`/insights/${insight.slug}`}>
                        <motion.article
                            className="group cursor-pointer border border-custom-accent rounded-xl p-8 hover:shadow-xl hover:border-custom-olive transition-all duration-300 h-full flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <span className="text-custom-olive font-body text-sm font-semibold tracking-wider uppercase mb-3 block">
                                Agronomy Guide
                            </span>
                            <h3 className="text-2xl font-heading font-semibold text-custom-primary mb-4 group-hover:text-custom-olive transition-colors leading-tight">
                                {insight.title}
                            </h3>
                            <p className="text-custom-charcoal/70 font-body leading-relaxed mb-6 flex-grow">
                                {insight.description}
                            </p>
                            <span className="text-custom-primary font-medium hover:text-custom-olive flex items-center space-x-2 transition-colors mt-auto">
                                <span>Read Article</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </motion.article>
                    </Link>
                ))}
            </motion.div>
        </section>
    );
}
