"use client";

import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { useLanguage } from "../../context/LanguageContext";

export function BackToLink({ href, labelKey }: { href: string; labelKey: string }) {
    const { t } = useLanguage();
    return (
        <Link href={href}>
            <Button variant="outline" className="rounded-full border-2 hover:bg-custom-primary hover:text-white transition-all">
                {t(labelKey)}
            </Button>
        </Link>
    );
}
