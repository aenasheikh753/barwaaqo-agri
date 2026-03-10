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
            <p className="mb-6">Tomato production in Somalia is a vital part of the agricultural economy, but success depends heavily on timing. Understanding the local climate and seasonal shifts is the first step toward a high-yield harvest. With proper seasonal planning, Somali farmers can achieve yields of 25-40 tons per hectare, making tomatoes one of the most profitable vegetable crops in the region.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Optimal Planting Windows</h3>
            <p className="mb-6">In most regions of Somalia, the best time to plant tomatoes is during the transition between the Gu (April-June) and Dayr (October-December) rainy seasons. This strategic timing allows the plants to establish strong root systems while soil moisture is abundant, but ensures fruit development occurs during drier, cooler periods which significantly reduces disease pressure and improves fruit quality.</p>
            
            <div className="bg-custom-light-bg/50 p-6 rounded-xl my-8 border border-custom-accent/30">
                <h4 className="text-lg font-bold text-custom-primary mb-3">Seasonal Planting Schedule</h4>
                <ul className="space-y-2 text-custom-charcoal/70">
                    <li><strong>Gu Season Planting:</strong> Late March - Early April for harvest in June-July</li>
                    <li><strong>Dayr Season Planting:</strong> Late September - Early October for harvest in December-January</li>
                    <li><strong>Dry Season:</strong> Supplemental irrigation required for year-round production</li>
                </ul>
            </div>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Climate Considerations</h3>
            <p className="mb-6">Tomatoes are sensitive to extreme heat and high humidity. Temperatures above 35°C can cause blossom drop and poor fruit set, while excessive moisture promotes fungal diseases like early blight and powdery mildew. Providing light shade (30-40% shade cloth) during peak summer months or using windbreaks can help maintain a more favorable microclimate for the plants, especially in exposed areas.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Variety Selection</h3>
            <p className="mb-6">Choosing heat-tolerant and disease-resistant varieties is crucial for success in Somali conditions. Barwaaqo Agri Group recommends cultivars that have been specifically trialed for East African soil and pest profiles, including:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-white p-4 rounded-lg border border-custom-accent/20">
                    <h5 className="font-bold text-custom-primary mb-2">Heat-Tolerant Varieties</h5>
                    <ul className="text-sm text-custom-charcoal/70 space-y-1">
                        <li>• Roma VF (processing tomatoes)</li>
                        <li>• Celebrity (determinate)</li>
                        <li>• Heatmaster (indeterminate)</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-custom-accent/20">
                    <h5 className="font-bold text-custom-primary mb-2">Disease-Resistant Varieties</h5>
                    <ul className="text-sm text-custom-charcoal/70 space-y-1">
                        <li>• Plum Regal (resists wilt)</li>
                        <li>• Iron Lady (resists blight)</li>
                        <li>• Defiant (resists multiple diseases)</li>
                    </ul>
                </div>
            </div>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Soil Preparation & Fertilization</h3>
            <p className="mb-6">Tomatoes thrive in well-drained, loamy soils with a pH between 6.0 and 6.8. Before planting, incorporate 5-10 tons per hectare of well-rotted manure or compost. A balanced fertilizer program should include:</p>
            <ul className="list-disc list-inside text-custom-charcoal/70 mb-6 space-y-2">
                <li>• Basal application: 100 kg N, 80 kg P₂O₅, 80 kg K₂O per hectare</li>
                <li>• Top dressing: 50 kg N per hectare at flowering stage</li>
                <li>• Foliar feeding: Micronutrients (Zn, Fe, Mn) during fruit set</li>
            </ul>
            
            <div className="bg-custom-olive/10 p-6 rounded-xl my-8 border border-custom-olive/30">
                <h4 className="text-lg font-bold text-custom-primary mb-3">Barwaaqo Agri Group's Tomato Program</h4>
                <p className="text-custom-charcoal/70">We provide comprehensive support for tomato farmers including certified seeds, soil testing services, irrigation system design, and ongoing agronomic consultation. Our proven protocols have helped farmers achieve consistent yields of 30+ tons per hectare across various Somali growing regions.</p>
            </div>
        `
    },
    "benefits-drip-irrigation": {
        title: "Benefits of Drip Irrigation for Vegetable Farming",
        category: "Irrigation Tech",
        date: "March 10, 2026",
        image: "/images/project-1.png",
        content: `
            <p className="mb-6">Water is the most precious resource in East African agriculture. Drip irrigation represents a revolution in how we manage this resource, offering significant benefits over traditional flood or sprinkler methods. For Somali farmers facing climate variability and water scarcity, drip systems provide a sustainable path to increased productivity and food security.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Water Efficiency & Conservation</h3>
            <p className="mb-6">Drip systems deliver water directly to the root zone, reducing evaporation and runoff by up to 50-60%. This precision irrigation allows farmers to expand their cultivated area even with limited water supplies. In Somalia's arid regions, this efficiency translates to more reliable harvests during dry seasons and reduced dependency on unpredictable rainfall patterns.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Enhanced Crop Quality & Yield</h3>
            <p className="mb-6">Consistent moisture levels prevent the stress that leads to fruit cracking and blossom end rot, resulting in more uniform and marketable produce. Drip irrigation enables precise nutrient delivery through fertigation, ensuring optimal plant nutrition throughout the growing cycle. Farmers report yield increases of 20-40% when transitioning from traditional irrigation methods.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Weed Suppression & Labor Savings</h3>
            <p className="mb-6">Because water is only applied where it's needed, the spaces between rows remain dry, which significantly inhibits the growth of weeds and reduces the labor required for weeding. This targeted approach also minimizes soil erosion and preserves beneficial soil microorganisms in the root zone.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Climate Resilience</h3>
            <p className="mb-6">Drip irrigation systems are particularly valuable during Somalia's extended dry periods. By maintaining consistent soil moisture, crops can continue growing even when rainfall is scarce. Combined with solar-powered pumping solutions, drip systems provide energy-efficient water management that's independent of grid electricity.</p>
            
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Economic Benefits</h3>
            <p className="mb-6">While the initial investment in drip infrastructure requires capital, the long-term savings in water, labor, and fertilizer costs typically result in payback periods of 2-3 seasons. Higher yields and improved crop quality command better market prices, making drip irrigation a sound investment for commercial vegetable producers.</p>
            
            <div className="bg-custom-light-bg/50 p-6 rounded-xl my-8 border border-custom-accent/30">
                <h4 className="text-lg font-bold text-custom-primary mb-3">Barwaaqo Agri Group's Approach</h4>
                <p className="text-custom-charcoal/70">We design customized drip irrigation systems that consider local soil conditions, crop requirements, and water source availability. Our solutions include solar-powered pumps for remote locations and training programs to ensure farmers can maintain and optimize their systems for maximum benefit.</p>
            </div>
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
