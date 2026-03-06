"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/Button";

interface Article {
    title: string;
    category: string;
    date: string;
    image: string;
    content: string;
}

export function ArticleClient({ article }: { article: Article }) {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block bg-custom-sand/90 backdrop-blur-md text-custom-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
                            {article.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white drop-shadow-xl mb-6">
                            {article.title}
                        </h1>
                        <p className="text-white/80 font-body uppercase tracking-widest text-sm font-bold">
                            Published: {article.date}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-24 max-w-4xl mx-auto px-6">
                <motion.div
                    className="prose prose-lg max-w-none text-custom-charcoal/80 font-body leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-20 pt-12 border-t border-custom-accent/30 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-custom-primary flex items-center justify-center text-white font-bold text-xl">B</div>
                        <div>
                            <p className="font-bold text-custom-primary">Barwaaqo Agronomy Team</p>
                            <p className="text-sm text-custom-charcoal/50">Field Specialists</p>
                        </div>
                    </div>

                    <Link href="/insights">
                        <Button variant="outline" className="px-10">
                            Back to Insights
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
