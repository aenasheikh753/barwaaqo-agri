"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/Button";

export default function SeedInputsPage() {
    return (
        <main className="bg-white">
            <section className="relative h-[50vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0">
                    <Image src="/images/project-2.png" alt="Seeds and Inputs" fill className="object-cover" />
                    <div className="absolute inset-0 bg-custom-primary/60" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Seed & Agricultural Inputs</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">Providing the foundation for high-yield harvests across East Africa.</p>
                </div>
            </section>

            <section className="py-24 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div>
                            <span className="text-custom-olive font-bold uppercase tracking-widest text-sm mb-4 block">Our Products</span>
                            <h2 className="text-4xl font-heading font-bold text-custom-primary">High-Performance Inputs</h2>
                        </div>
                        <p className="text-lg text-custom-charcoal/70 leading-relaxed font-body">
                            Barwaaqo Agri Group understands that the quality of inputs determines the success of the harvest. We source only certified, climate-adapted seeds and nutrient-rich fertilizers from global leaders like East West Seeds and others.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Vegetable Seeds", desc: "Tomato, Onion, Watermelon, and more Varieties adapted to local soil." },
                                { title: "Specialized Fertilizers", desc: "Crop-specific blends to maximize nutrient uptake." },
                                { title: "Crop Protection", desc: "Eco-friendly pest and disease management solutions." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-custom-light-bg border border-custom-accent/30">
                                    <div className="w-12 h-12 rounded-full bg-custom-olive/10 flex items-center justify-center text-custom-olive font-bold">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-custom-primary mb-1">{item.title}</h3>
                                        <p className="text-custom-charcoal/60 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-custom-primary text-white p-12 rounded-[40px] shadow-2xl space-y-8 sticky top-32">
                        <h3 className="text-2xl font-bold">Request a Catalog</h3>
                        <p className="text-white/70">Connect with our specialists for a full list of available seeds and inputs for your region.</p>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:border-custom-sand transition-colors" />
                            <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:border-custom-sand transition-colors" />
                            <Button className="w-full py-4 bg-custom-sand text-custom-primary hover:bg-white transition-colors">Submit Request</Button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
