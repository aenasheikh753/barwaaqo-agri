import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../../components/ui/Button";

const caseStudies: Record<string, {
    title: string;
    category: string;
    location: string;
    impact: string;
    desc: string;
    image: string;
    tags: string[];
    fullContent?: string;
}> = {
    "baidoa-irrigation": {
        title: "Baidoa Irrigation Pilot Program",
        category: "Irrigation System Design",
        location: "Baidoa, Somalia",
        impact: "500+ Hectares irrigated",
        desc: "This project introduced modern drip irrigation technologies to smallholder vegetable farmers. We provided the technical design, equipment installation, and ongoing maintenance training to ensure year-round production despite seasonal water scarcity.",
        image: "/images/project-1.png",
        tags: ["Water Efficiency", "Sustainability", "Capacity Building"]
    },
    "regional-seed-trials": {
        title: "Regional Vegetable Seed Trials",
        category: "Agronomy & Seed Tech",
        location: "Afgooye & Jowhar Districts",
        impact: "40% Yield Increase",
        desc: "In collaboration with international seed producers, we conducted rigorous field trials to identify tomato and onion varieties best suited for local micro-climates. The successful varieties are now being distributed to thousands of farmers across the region.",
        image: "/images/agri1.jpg",
        tags: ["Seed Selection", "Food Security", "Yield Optimization"]
    },
    "farmer-to-market": {
        title: "Farmer-to-Market Integration",
        category: "Value Chain Development",
        location: "Somalia & East Africa",
        impact: "2,000+ Farmers Enrolled",
        desc: "We bridge the gap between production and market. By providing high-quality inputs on credit and offering guaranteed buy-back programs, we have stabilized incomes for thousands of farming households while ensuring a steady supply of quality produce for urban markets.",
        image: "/images/agri2.jpg",
        tags: ["Market Access", "Economic Growth", "Strategic Partnership"]
    }
};

export async function generateStaticParams() {
    return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = caseStudies[slug];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 bg-custom-light-bg">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-heading font-bold text-custom-primary">Case Study Not Found</h1>
                    <p className="text-custom-charcoal/60">The case study you are looking for does not exist.</p>
                    <Link href="/projects">
                        <Button variant="primary">Back to Projects</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-white">
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={project.image} alt={project.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-custom-primary/70" />
                </div>
                <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-white">
                    <div className="flex items-center gap-4 text-white/90 text-sm font-bold uppercase tracking-widest mb-4">
                        <span>{project.category}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-custom-sand" />
                        <span>{project.location}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 drop-shadow-lg text-custom-sand">{project.title}</h1>
                    <p className="text-xl text-white/90 max-w-2xl font-body">{project.desc}</p>
                    <div className="mt-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl">
                        <span className="text-2xl font-bold">{project.impact}</span>
                        <span className="text-white/80 text-sm uppercase tracking-wider">Impact</span>
                    </div>
                </div>
            </section>

            <section className="py-16 max-w-[1200px] mx-auto px-6">
                <div className="flex flex-wrap gap-3 mb-12">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-custom-light-bg border border-custom-accent/30 rounded-full text-sm font-semibold text-custom-charcoal/70">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-lg text-custom-charcoal/70 leading-relaxed font-body max-w-3xl mb-12">
                    {project.desc}
                </p>
                <Link href="/projects">
                    <Button variant="outline" className="rounded-full border-2 hover:bg-custom-primary hover:text-white transition-all">
                        Back to Projects
                    </Button>
                </Link>
            </section>
        </main>
    );
}
