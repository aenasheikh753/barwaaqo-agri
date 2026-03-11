"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";

export default function IrrigationPage() {
    return (
        <main className="bg-white">
            <section className="relative h-[50vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0">
                    <Image src="/images/project-1.png" alt="Irrigation Systems" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 text-white drop-shadow-2xl">Irrigation & <span className="text-custom-sand">Farm Resiliency</span></h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-body drop-shadow-lg">Reliable water management systems engineered for climate resilience.</p>
                </div>
            </section>

            <section className="py-16 bg-[#fafaf8]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Drip Systems", desc: "Precision watering that reduces consumption by up to 50%." },
                            { title: "Solar Pumping", desc: "Sustainable power solutions for remote farming locations." },
                            { title: "Irrigation Design", desc: "Customized hydraulic plans for farms of all scales." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 ease-out">
                                <h3 className="text-xl font-bold text-custom-primary mb-2">{card.title}</h3>
                                <p className="text-custom-charcoal/60 leading-relaxed text-sm">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative flex justify-center items-center rounded-[30px] overflow-hidden h-72">
                            <Image src="/images/project-1.png" alt="System Install" fill className="object-cover" />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl font-heading font-bold text-custom-primary">Transforming Arid Landscapes</h2>
                            <p className="font-body text-custom-charcoal/70 leading-relaxed">
                            Our irrigation solutions are designed to unlock the full potential of your land. From site survey to final commissioning, we ensure every drop is used efficiently to drive productivity and farm sustainability.
                            </p>
                            <Link href="/contact">
                                <Button variant="outline" className="px-10">Request a Consultation</Button>
                            </Link>
                        </div>
                        </div>
                    {/* View All Services Button */}
                    <div className="mt-16 pt-12 border-t border-custom-accent/20 text-center">
                        <Link href="/services">
                            <Button variant="outline" className="px-10 py-4 rounded-full border-2 hover:bg-custom-primary hover:text-white transition-all">
                                View All Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
