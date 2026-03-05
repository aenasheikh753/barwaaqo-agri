"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/Button";

export default function IrrigationPage() {
    return (
        <main className="bg-white">
            <section className="relative h-[50vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0">
                    <Image src="/images/project-1.png" alt="Irrigation Systems" fill className="object-cover" />
                    <div className="absolute inset-0 bg-custom-primary/60" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Irrigation & Farm Resiliency</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">Reliable water management systems engineered for climate resilience.</p>
                </div>
            </section>

            <section className="py-24 bg-[#fafaf8]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Drip Systems", desc: "Precision watering that reduces consumption by up to 50%." },
                            { title: "Solar Pumping", desc: "Sustainable power solutions for remote farming locations." },
                            { title: "Irrigation Design", desc: "Customized hydraulic plans for farms of all scales." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm border border-custom-accent/30 hover:shadow-xl transition-shadow">
                                <h3 className="text-2xl font-bold text-custom-primary mb-4">{card.title}</h3>
                                <p className="text-custom-charcoal/60 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative h-[400px] rounded-[30px] overflow-hidden">
                            <Image src="/images/project-1.png" alt="System Install" fill className="object-cover" />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl font-heading font-bold text-custom-primary">Transforming Arid Landscapes</h2>
                            <p className="font-body text-custom-charcoal/70 leading-relaxed">
                                Our irrigation solutions are designed to unlock the full potential of your land. From site survey to final commissioning, we ensure every drop is used efficiently to drive productivity and farm sustainability.
                            </p>
                            <Button variant="outline" className="px-10">Request a Consultation</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
