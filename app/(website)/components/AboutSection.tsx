"use client";

import { Button } from "../../components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
    return (
        <section className="py-[120px] max-w-[1200px] mx-auto px-6 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
                        <Image
                            src="/images/about_agriculture.png"
                            alt="Modern Agriculture in East Africa"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-custom-primary/30 to-transparent" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-custom-sand/20 rounded-2xl -z-0 blur-2xl" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-custom-olive/10 rounded-full -z-0" />
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
                        <span className="text-custom-olive font-semibold tracking-wider text-sm uppercase">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-custom-primary leading-tight">
                            Pioneering Sustainable Agriculture in <span className="text-custom-olive">Somalia</span> & Beyond
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg text-custom-charcoal/80 font-body leading-relaxed">
                            Barwaaqo Agri Group is a leading agricultural development company specializing in modern farming solutions that bridge traditional practices with cutting-edge technology.
                        </p>
                        <p className="text-lg text-custom-charcoal/80 font-body leading-relaxed">
                            We operate as a structured organization capable of partnering with international seed producers, irrigation specialists, and agricultural suppliers. Our expertise spans seed distribution, agronomic advisory, and farmer capacity building.
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
                        <Button variant="outline" className="px-10 py-4 hover:bg-custom-primary hover:text-white transition-all transform hover:-translate-y-1">
                            Discover Our Mission
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
