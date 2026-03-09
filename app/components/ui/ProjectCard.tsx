import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
    href?: string;
}

export function ProjectCard({ title, description, image, category, href = "/projects" }: ProjectCardProps) {
    return (
        <Link href={href} className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-custom-accent/30 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer h-full">
            <div className="h-64 relative overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-custom-primary/70 via-custom-primary/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur-md text-custom-primary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                        {category}
                    </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-custom-primary mb-3 group-hover:text-custom-olive transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-custom-charcoal/70 font-body text-sm leading-relaxed mb-6 line-clamp-3 max-w-prose">
                    {description}
                </p>
                <div className="flex items-center text-custom-olive font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                    <span>Explore Case Study</span>
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
            </div>
        </Link>
    );
}
