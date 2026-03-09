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
            <div className="flex flex-col items-start p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out transform hover:-translate-y-2 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-custom-sand/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-custom-olive/10 transition-colors duration-300" />

                <div className="p-3 rounded-xl bg-custom-light-bg text-custom-primary mb-3 transition-all duration-300 group-hover:bg-custom-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                    {icon}
                </div>

                <h3 className="text-lg md:text-xl font-heading font-bold text-custom-primary mb-1.5 md:mb-2 group-hover:text-custom-olive transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-sm md:text-[15px] text-custom-charcoal/70 font-body leading-relaxed group-hover:text-custom-charcoal transition-colors duration-300">
                    {description}
                </p>

                <div className="mt-4 pt-4 border-t border-custom-accent/30 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-custom-olive flex items-center">
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
