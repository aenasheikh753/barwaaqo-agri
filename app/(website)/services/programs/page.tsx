"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";

export default function ProgramsPage() {
    return (
        <main className="bg-white">
            <section className="relative h-[50vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0">
                    <Image src="/images/hero_agriculture.png" alt="Farmer Programs" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 text-white drop-shadow-2xl">Farmer <span className="text-custom-sand">Capacity</span> Programs</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-body drop-shadow-lg">Building stronger agricultural communities through shared knowledge and growth.</p>
                </div>
            </section>

            <section className="py-24 max-w-5xl mx-auto px-6 font-body">
                <div className="text-center mb-20 space-y-6">
                    <h2 className="text-4xl font-heading font-bold text-custom-primary">Empowering the Future of Farming</h2>
                    <p className="text-lg text-custom-charcoal/70 max-w-3xl mx-auto">
                        Barwaaqo Agri Group believes that sustainable development is built on strong partnerships with local farmers. Our programs focus on providing access to tools, credit, and markets.
                    </p>
                </div>

                <div className="space-y-12">
                    {[
                        { title: "Outgrower Schemes", desc: "Collaborative farming models that ensure market access and quality control." },
                        { title: "Technical Training", desc: "Regular workshops on modern agronomy and irrigation maintenance." },
                        { title: "Input Access Programs", desc: "Bridging the gap to high-quality inputs for smallholder communities." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-8 items-center p-8 md:p-10 bg-white border border-gray-100 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 ease-out">
                            <div className="text-5xl font-black text-custom-sand/30">{idx + 1}</div>
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-custom-primary">{item.title}</h3>
                                <p className="text-custom-charcoal/70 leading-relaxed text-sm md:text-base">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 pt-16 border-t border-custom-accent/30 text-center">
                    <h3 className="text-2xl font-bold text-custom-primary mb-8">Ready to grow with us?</h3>
                    <Button variant="primary" className="px-12 py-4">Register for Next Workshop</Button>
                </div>

                {/* View All Services Button */}
                <div className="mt-24 pt-12 border-t border-custom-accent/20 text-center">
                    <Link href="/services">
                        <Button variant="outline" className="px-10 py-4 rounded-full border-2 hover:bg-custom-primary hover:text-white transition-all">
                            View All Services
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
