"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectsHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_agriculture.png"
                    alt="Agricultural Projects"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-custom-primary/60" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-custom-sand font-semibold tracking-wider text-sm uppercase block mb-4">Our Portolio</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 leading-tight tracking-tight">
                        Transforming Landscapes through <span className="text-custom-sand">Strategic Projects</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-100/90 leading-relaxed max-w-3xl drop-shadow-md font-normal">
                        From pilot irrigation systems to cross-regional seed trials, witness our commitment to building resilient agricultural systems in East Africa.
                    </p>
                </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}
