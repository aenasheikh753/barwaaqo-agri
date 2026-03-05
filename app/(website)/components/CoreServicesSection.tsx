"use client";

import { ServiceCard } from "../../components/ui/ServiceCard";
import { motion } from "framer-motion";

export function CoreServicesSection() {
    const services = [
        {
            title: "Seed & Agricultural Inputs",
            description: "Supplying high-quality seeds and agricultural inputs sourced from reputable international producers for maximum yield.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        },
        {
            title: "Farm Advisory & Agronomy",
            description: "Expert guidance from professional agronomists to improve crop health, soil quality, and overall farm performance.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        },
        {
            title: "Irrigation & Infrastructure",
            description: "Custom design and installation of modern drip and sprinkler systems to ensure water efficiency and resilience.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.641.32a.5.5 0 01-.436.012l-1.127-.564a2 2 0 01-1.01-2.128l.203-1.015A1 1 0 008 10.74l-.2.1"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        },
        {
            title: "Farmer Capacity Building",
            description: "Empowering smallholders and commercial farmers through training programs and access to modern farming tools.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        }
    ];

    return (
        <section className="py-[120px] bg-[#fdfdfb] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0B3D2E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-custom-olive font-semibold tracking-wider text-sm uppercase block mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-custom-primary">
                            Comprehensive Agricultural <span className="text-custom-olive decoration-custom-sand underline-offset-8">Solutions</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        className="text-lg text-custom-charcoal/70 font-body max-w-sm"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Bridging international expertise with local terrain to deliver sustainable growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
