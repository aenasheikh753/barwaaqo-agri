import React from "react";
import { ArticlePageClient } from "./ArticlePageClient";

const slugs = [
    "tomato-production-somalia",
    "benefits-drip-irrigation",
    "soil-preparation-techniques"
];

export async function generateStaticParams() {
    return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return <ArticlePageClient slug={slug} />;
}
