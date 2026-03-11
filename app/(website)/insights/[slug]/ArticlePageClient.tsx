"use client";

import { useLanguage } from "../../../context/LanguageContext";
import { ArticleClient } from "./ArticleClient";
import { TranslatedNotFound } from "../../components/TranslatedNotFound";

const ARTICLE_MAP: Record<string, { key: string; image: string }> = {
    "tomato-production-somalia": { key: "articles.tomatoProductionSomalia", image: "/images/agri1.jpg" },
    "benefits-drip-irrigation": { key: "articles.benefitsDripIrrigation", image: "/images/project-1.png" },
    "soil-preparation-techniques": { key: "articles.soilPreparationTechniques", image: "/images/agri2.jpg" }
};

export function ArticlePageClient({ slug }: { slug: string }) {
    const { t } = useLanguage();
    const entry = ARTICLE_MAP[slug];

    if (!entry) return <TranslatedNotFound type="article" />;

    const base = entry.key;
    return (
        <ArticleClient
            article={{
                title: t(`${base}.title`),
                category: t(`${base}.category`),
                date: t(`${base}.date`),
                image: entry.image,
                content: t(`${base}.content`)
            }}
        />
    );
}

