"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";

export default function SeedInputsPage() {
    return (
        <main className="bg-white">
            <section className="relative h-[65vh] flex items-center justify-center pt-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/agri1.jpg" alt="Seeds and Inputs" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-5xl md:text-8xl font-heading font-bold mb-6 !text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">Seed & <span className="text-custom-sand">Agricultural</span> Inputs</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-body drop-shadow-md">Providing the foundation for high-yield harvests across East Africa.</p>
                </div>
            </section>

            <section className="py-16 max-w-6xl mx-auto px-6">
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
                                <div key={idx} className="flex gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 ease-out">
                                    <div className="w-11 h-11 rounded-full bg-custom-olive/10 flex items-center justify-center text-custom-olive font-bold shrink-0">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-custom-primary mb-0.5">{item.title}</h3>
                                        <p className="text-custom-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-custom-primary text-white p-12 rounded-[40px] shadow-2xl space-y-8 sticky top-32">
                        <h3 className="text-2xl font-bold text-custom-sand">Request a Catalog</h3>
                        <p className="text-white/70">Connect with our specialists for a full list of available seeds and inputs for your region.</p>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:border-custom-sand transition-colors" />
                            <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:border-custom-sand transition-colors" />
                            <Button className="w-full py-4 bg-custom-sand text-custom-primary hover:bg-white transition-colors">Submit Request</Button>
                        </form>
                    </div>
                </div>

                {/* View All Services Button */}
                <div className="pt-12 border-t border-custom-accent/20 text-center">
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
