import React from "react";
import { CaseStudyClient } from "./CaseStudyClient";

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
    return <CaseStudyClient slug={slug} />;
}
