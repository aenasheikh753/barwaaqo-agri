"use client";

import { Button } from "../../components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
    return (
        <section className="py-[120px] max-w-[1200px] mx-auto px-6 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

                {/* Image Side — height auto-matches content column */}
                <motion.div
                    className="relative flex"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative w-full h-[260px] sm:h-[320px] lg:h-auto lg:min-h-[400px] rounded-2xl overflow-hidden shadow-2xl z-10">
                        <Image
                            src="/images/about-img.avif"
                            alt="Organized commercial crop rows representing Barwaaqo Agri Group's scale and professionalism"
                            fill
                            unoptimized
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-custom-primary/30 to-transparent" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-custom-sand/20 rounded-2xl -z-0 blur-2xl animate-float" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-custom-olive/10 rounded-full -z-0 animate-float-delayed" />

                    {/* Floating Seed Icon */}
                    <div className="absolute top-10 -right-12 w-20 h-20 text-custom-sand/20 animate-float-delayed pointer-events-none hidden md:block">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C7 2 4 7 4 12C4 17 7 22 12 22C17 22 20 17 20 12C20 7 17 22 12 22M12 20C8.7 20 6 17.3 6 14C6 10.7 8.7 8 12 8C15.3 8 18 10.7 18 14C18 17.3 15.3 20 12 20M12 10C10.3 10 9 11.3 9 13C9 14.7 10.3 16 12 16C13.7 16 15 14.7 15 13C15 11.3 13.7 10 12 10Z" />
                        </svg>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    className="flex flex-col space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-4">
                        <span className="text-custom-olive font-semibold tracking-wider text-sm uppercase">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-custom-primary leading-tight">
                            About Barwaaqo Agri Group
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg text-custom-charcoal/80 font-body leading-relaxed">
                            Barwaaqo Agri Group is an agricultural development company supporting modern farming systems across Somalia and East Africa.
                        </p>
                        <p className="text-lg text-custom-charcoal/80 font-body leading-relaxed">
                            Our work focuses on improving crop productivity, strengthening farmer support programs, and introducing reliable agricultural inputs and irrigation solutions adapted to local conditions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-2">
                            <h4 className="text-3xl font-bold text-custom-primary">10+</h4>
                            <p className="text-sm text-custom-charcoal/60 uppercase tracking-wide">Years Experience</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-3xl font-bold text-custom-primary">500+</h4>
                            <p className="text-sm text-custom-charcoal/60 uppercase tracking-wide">Farmers Supported</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <Link href="/about">
                            <Button variant="outline" className="px-10 py-4 hover:bg-custom-primary hover:text-white transition-all">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}