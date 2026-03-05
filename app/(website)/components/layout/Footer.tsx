import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-custom-primary text-custom-light-bg py-16 mt-20">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                <div className="md:col-span-2 space-y-4">
                    <div className="relative h-16 w-56 mb-6">
                        <Image
                            src="/images/barwaaqo-logo.jpg"
                            alt="Barwaaqo Agri Group Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-custom-light-bg/80 leading-relaxed font-body max-w-sm">
                        Supporting modern farming systems across Somalia and East Africa through reliable inputs, expert agronomy, and scalable irrigation development.
                    </p>
                </div>

                <div>
                    <h4 className="font-heading font-semibold text-xl mb-6 text-custom-sand">Quick Links</h4>
                    <ul className="space-y-3 font-body opacity-90">
                        <li>
                            <Link href="/about" className="hover:text-custom-sand transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-custom-sand transition-colors">
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-custom-sand transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/insights" className="hover:text-custom-sand transition-colors">
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link href="/partners" className="hover:text-custom-sand transition-colors">
                                Partners
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-custom-sand transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-semibold text-xl mb-6 text-custom-sand">Contact</h4>
                    <ul className="space-y-3 font-body opacity-90">
                        <li className="flex items-start space-x-3">
                            <span className="text-custom-sand">📍</span>
                            <span>Mogadishu, Somalia</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-custom-sand">✉️</span>
                            <a href="mailto:contact@barwaaqoagri.com" className="hover:text-custom-sand transition-colors">
                                contact@barwaaqoagri.com
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="max-w-[1200px] mx-auto px-6 mt-12 pt-8 border-t border-custom-light-bg/10 flex flex-col md:flex-row justify-between items-center text-sm font-body text-custom-light-bg/60">
                <p>&copy; {new Date().getFullYear()} Barwaaqo Agri Group. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-custom-sand transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-custom-sand transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
