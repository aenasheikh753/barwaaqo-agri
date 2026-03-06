import React from "react";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";
import { ArticleClient } from "./ArticleClient";

const articles = {
    "tomato-production-somalia": {
        title: "Best Seasons for Tomato Production in Somalia",
        category: "Agronomy Guide",
        date: "March 15, 2026",
        image: "/images/agri1.jpg",
        content: `
            <p className="mb-6">Tomato production in Somalia is a vital part of the agricultural economy, but success depends heavily on timing. Understanding the local climate and seasonal shifts is the first step toward a high-yield harvest.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Optimal Planting Windows</h3>
            <p className="mb-6">In most regions of Somalia, the best time to plant tomatoes is during the transition between the Gu and Dayr rainy seasons. This allows the plants to establish roots while soil moisture is high, but ensures fruit development happens during drier, cooler periods which reduces disease pressure.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Climate Considerations</h3>
            <p className="mb-6">Tomatoes are sensitive to extreme heat. Temperatures above 35°C can cause blossom drop and poor fruit set. Providing light shade or using windbreaks can help maintain a more favorable microclimate for the plants.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Variety Selection</h3>
            <p className="mb-6">Choosing heat-tolerant and disease-resistant varieties is crucial. Barwaaqo Agri Group recommends cultivars that have been specifically trialed for East African soil and pest profiles.</p>
        `
    },
    "benefits-drip-irrigation": {
        title: "Benefits of Drip Irrigation for Vegetable Farming",
        category: "Irrigation Tech",
        date: "March 10, 2026",
        image: "/images/project-1.png",
        content: `
            <p className="mb-6">Water is the most precious resource in East African agriculture. Drip irrigation represents a revolution in how we manage this resource, offering significant benefits over traditional flood or sprinkler methods.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Water Efficiency</h3>
            <p className="mb-6">Drip systems deliver water directly to the root zone, reducing evaporation and runoff by up to 50-60%. This efficiency allows farmers to expand their cultivated area even with limited water supplies.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Reduced Weed Growth</h3>
            <p className="mb-6">Because water is only applied where it's needed, the spaces between rows remain dry, which significantly inhibits the growth of weeds and reduces the labor required for weeding.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Higher Crop Quality</h3>
            <p className="mb-6">Consistent moisture levels prevent the stress that leads to fruit cracking and blossom end rot, resulting in more uniform and marketable produce.</p>
        `
    },
    "soil-preparation-techniques": {
        title: "Soil Preparation Techniques for Smallholder Farms",
        category: "Sustainability",
        date: "March 05, 2026",
        image: "/images/agri2.jpg",
        content: `
            <p className="mb-6">A healthy harvest begins beneath the surface. For smallholder farmers, implementing effective soil preparation techniques is the most cost-effective way to improve long-term productivity.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Soil Testing</h3>
            <p className="mb-6">Before any seeds are planted, understanding the pH and nutrient levels of the soil is essential. Simple soil tests can guide the precise application of fertilizers and amendments, saving money and protecting the environment.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Organic Matter Addition</h3>
            <p className="mb-6">Incorporating compost or well-rotted manure improves soil structure, increases water-holding capacity, and provides a slow-release source of nutrients for the crops.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Minimum Tillage</h3>
            <p className="mb-6">Reducing the frequency and intensity of plowing helps preserve soil microbial life and prevents erosion, especially in regions prone to heavy rain or wind.</p>
        `
    }
};

export async function generateStaticParams() {
    return Object.keys(articles).map((slug) => ({
        slug: slug,
    }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const article = articles[slug as keyof typeof articles];

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 bg-custom-light-bg">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-heading font-bold text-custom-primary">Article Not Found</h1>
                    <p className="text-custom-charcoal/60">The article you are looking for does not exist or has been moved.</p>
                    <Link href="/insights">
                        <Button variant="primary">Back to Insights</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return <ArticleClient article={article} />;
}
