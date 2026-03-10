"use client";

import { Button } from "../../components/ui/Button";
import { ProjectCard } from "../../components/ui/ProjectCard";
import { motion } from "framer-motion";

export function ProjectsSection() {
    const projects = [
        {
            title: "Baidoa Irrigation Pilot",
            category: "Irrigation",
            image: "/images/project-1.png",
            description: "A comprehensive irrigation initiative improving water efficiency for 500 hectares, demonstrating scalable solutions for Somali agriculture.",
            href: "/services/irrigation"
        },
        {
            title: "Vegetable Seed Trials",
            category: "Seed Tech",
            image: "/images/agri1.jpg",
            description: "Evaluating high-yielding variety seedlings adapted to local soil, resulting in significant yield improvements for community farmers.",
            href: "/services/seeds"
        },
        {
            title: "Farmer Advisory Program",
            category: "Advisory",
            image: "/images/agri2.jpg",
            description: "Agronomic training and crop planning support for smallholder farmers, enhancing productivity through shared expertise.",
            href: "/services/advisory"
        }
    ];

    return (
        <section className="py-16 bg-custom-primary relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-custom-olive/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-custom-sand/5 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl">
                        <span className="text-custom-sand/60 font-semibold tracking-wider text-sm uppercase block mb-4">Our Gallery</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                            Selected Projects
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
