"use client";

import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { useLanguage } from "../../context/LanguageContext";

type Type = "caseStudy" | "article";

export function TranslatedNotFound({ type }: { type: Type }) {
    const { t } = useLanguage();
    const isCaseStudy = type === "caseStudy";
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-custom-light-bg">
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-heading font-bold text-custom-primary">
                    {isCaseStudy ? t("projects.caseStudyNotFound") : t("insights.articleNotFound")}
                </h1>
                <p className="text-custom-charcoal/60">
                    {isCaseStudy ? t("projects.caseStudyNotFoundDesc") : t("insights.articleNotFoundDesc")}
                </p>
                <Link href={isCaseStudy ? "/projects" : "/insights"}>
                    <Button variant="primary">
                        {isCaseStudy ? t("projects.backToProjects") : t("insights.backToInsights")}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
