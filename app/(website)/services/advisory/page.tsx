"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/Button";

export default function AdvisoryPage() {
    return (
        <main className="bg-white">
            <section className="relative h-[50vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0">
                    <Image src="/images/about_agriculture.png" alt="Farm Advisory" fill className="object-cover" />
                    <div className="absolute inset-0 bg-custom-primary/60" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Farm Advisory & Agronomy</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">Bridging international expertise with local terrain and knowledge.</p>
                </div>
            </section>

            <section className="py-24 max-w-6xl mx-auto px-6 font-body text-custom-charcoal/70">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-heading font-bold text-custom-primary leading-tight">Expert Guidance for <span className="text-custom-olive">Profitable Farming</span></h2>
                        <p className="text-lg leading-relaxed">
                            Our team of professional agronomists provides hands-on support to help you achieve the best possible results from your farming operations. We translate complex data into actionable field strategies.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 text-custom-primary">
                            <div className="space-y-2">
                                <div className="text-2xl font-bold">Soil Analysis</div>
                                <p className="text-sm">Detailed testing to determine nutrient requirements.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-2xl font-bold">Crop Planning</div>
                                <p className="text-sm">Strategic calendars for year-round production.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                        <Image src="/images/about_agriculture.png" alt="Agronomy Expert" fill className="object-cover" />
                    </div>
                </div>

                <div className="bg-custom-light-bg rounded-[40px] p-16 text-center space-y-8 border border-custom-accent/30">
                    <h3 className="text-3xl font-heading font-bold text-custom-primary">Partner with Our Experts</h3>
                    <p className="max-w-2xl mx-auto">Scale your production and minimize losses with data-driven advisory services tailored to your specific micro-climate.</p>
                    <Button variant="primary" className="px-12 py-4">Book a Field Visit</Button>
                </div>
            </section>
        </main>
    );
}
