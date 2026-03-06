import React from "react";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href?: string;
}

export function ServiceCard({ title, description, icon, href = "/services" }: ServiceCardProps) {
    return (
        <Link href={href} className="block group h-full cursor-pointer">
            <div className="flex flex-col items-start p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-custom-accent/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full">
                {/* Hover Accent Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-custom-sand/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-custom-olive/10 transition-colors duration-500" />

                <div className="p-5 rounded-2xl bg-custom-light-bg text-custom-primary mb-8 transition-all duration-500 group-hover:bg-custom-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                    {icon}
                </div>

                <h3 className="text-lg md:text-xl font-heading font-bold text-custom-primary mb-3 md:mb-4 group-hover:text-custom-olive transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-sm md:text-base text-custom-charcoal/70 font-body leading-relaxed group-hover:text-custom-charcoal transition-colors duration-300">
                    {description}
                </p>

                <div className="mt-8 pt-6 border-t border-custom-accent/30 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-custom-olive flex items-center">
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
