import React from "react";
import { ArticlePageClient } from "./ArticlePageClient";
import type { Metadata } from "next";

const slugs = [
    "tomato-production-somalia",
    "benefits-drip-irrigation",
    "soil-preparation-techniques"
];

export async function generateStaticParams() {
    return slugs.map((slug) => ({ slug }));
}

const SEO_BY_SLUG: Record<string, { title: string; description: string; image?: string }> = {
    "tomato-production-somalia": {
        title: "Tomato Production in Somalia",
        description: "Practical guidance on improving tomato yields in Somalia using better inputs, irrigation, and agronomy.",
        image: "/images/agri1.jpg"
    },
    "benefits-drip-irrigation": {
        title: "Benefits of Drip Irrigation",
        description: "Why drip irrigation improves water efficiency and crop performance for smallholder farmers.",
        image: "/images/project-1.png"
    },
    "soil-preparation-techniques": {
        title: "Soil Preparation Techniques",
        description: "Foundational soil preparation steps for healthier crops and better harvests.",
        image: "/images/hero_agriculture.png"
    }
};

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const siteUrl = "https://barwaaqoagri.com";
    const { slug } = await params;

    const seo = SEO_BY_SLUG[slug] ?? {
        title: "Insight",
        description: "Agricultural insights and practical guidance from Barwaaqo Agri Group.",
        image: "/images/hero_agriculture.png"
    };

    const title = `${seo.title} | Insights | Barwaaqo Agri Group`;
    const url = `${siteUrl}/insights/${slug}`;
    const imageUrl = seo.image?.startsWith("http") ? seo.image : `${siteUrl}${seo.image ?? ""}`;

    return {
        title,
        description: seo.description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description: seo.description,
            url,
            type: "article",
            images: imageUrl ? [{ url: imageUrl }] : undefined,
            siteName: "Barwaaqo Agri Group"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: seo.description,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export default async function ArticlePage({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return <ArticlePageClient slug={slug} />;
}
