"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/Button";

export default function ProgramsPage() {
    return (
        <main className="bg-white">
            <section className="relative h-[50vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0">
                    <Image src="/images/hero_agriculture.png" alt="Farmer Programs" fill className="object-cover" />
                    <div className="absolute inset-0 bg-custom-primary/60" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Farmer Capacity Programs</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">Building stronger agricultural communities through shared knowledge and growth.</p>
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
                        <div key={idx} className="flex flex-col md:flex-row gap-10 items-center p-12 border border-custom-accent/30 rounded-[40px] hover:bg-custom-light-bg/50 transition-colors">
                            <div className="text-5xl font-black text-custom-sand/40">{idx + 1}</div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-custom-primary">{item.title}</h3>
                                <p className="text-custom-charcoal/70 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 pt-16 border-t border-custom-accent/30 text-center">
                    <h3 className="text-2xl font-bold text-custom-primary mb-8">Ready to grow with us?</h3>
                    <Button variant="primary" className="px-12 py-4">Register for Next Workshop</Button>
                </div>
            </section>
        </main>
    );
}
