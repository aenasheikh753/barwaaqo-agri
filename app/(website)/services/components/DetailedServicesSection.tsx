"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function DetailedServicesSection() {
    const services = [
        {
            title: "Seed & Agricultural Inputs",
            desc: "We supply high-quality, climate-resilient seeds and essential agricultural inputs sourced from international partners. Our focus is on providing varieties that maximize yield in local Somali conditions.",
            items: ["Certified Vegetable Seeds", "High-Performance Fertilizers", "Safe Crop Protection", "Specialized Farming Tools"],
            image: "/images/agri1.jpg",
            link: "/services/seeds"
        },
        {
            title: "Modern Irrigation Systems",
            desc: "Expert design and implementation of efficient water management systems. We specialize in drip and sprinkler irrigation technologies that conserve water while ensuring consistent crop growth.",
            items: ["Drip Irrigation Kits", "Solar-Powered Pumps", "Water Storage Solutions", "System Design & Install"],
            image: "/images/project-1.png",
            link: "/services/irrigation"
        },
        {
            title: "Agronomy & Advisory",
            desc: "Bridging the knowledge gap with professional agronomic services. Our team provides on-field support, soil analysis, and crop management strategies to boost farm efficiency.",
            items: ["Soil Health Analysis", "Pest & Disease Control", "Crop Rotation Planning", "Yield Optimization"],
            image: "/images/agri2.jpg",
            link: "/services/advisory"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="space-y-16 md:space-y-32">
                    {services.map((service, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <motion.div
                                className="lg:w-1/2 relative h-[260px] sm:h-[340px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Image src={service.image} alt={service.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
                            </motion.div>

                            <motion.div
                                className="lg:w-1/2 space-y-4 md:space-y-6"
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-custom-primary">{service.title}</h3>
                                <p className="text-base md:text-lg text-custom-charcoal/70 leading-relaxed font-body">{service.desc}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-custom-charcoal/80 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-custom-olive mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <Link href={service.link} className="inline-flex items-center text-custom-olive font-bold uppercase tracking-widest text-sm hover:text-custom-primary transition-colors group">
                                        Explore Details
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
