"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";

export default function AdvisoryPage() {
    return (
        <main className="bg-white">
            <section className="relative h-[65vh] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/agri2.jpg" alt="Farm Advisory" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-5xl md:text-8xl font-heading font-bold mb-6 !text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">Farm Advisory & <span className="text-custom-sand">Agronomy</span></h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-body drop-shadow-md">Bridging international expertise with local terrain and knowledge.</p>
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
