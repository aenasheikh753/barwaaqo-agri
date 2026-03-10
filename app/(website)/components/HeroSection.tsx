import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/Button";

export function HeroSection() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-28 pb-16 md:pt-28 md:pb-20 lg:pt-24 lg:pb-10 overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/images/hero_agriculture.png"
                    alt="Cinematic landscape of sophisticated irrigation and modern agricultural fields at sunrise"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50" />

                {/* Decorative Floating Elements */}
                <div className="absolute top-1/4 left-10 w-16 h-16 text-white/10 animate-float pointer-events-none hidden md:block">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>
                </div>
                <div className="absolute bottom-1/4 right-20 w-24 h-24 text-white/5 animate-float-delayed pointer-events-none hidden md:block">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" /></svg>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg lg:mb-6 sm:mb-4 leading-tight max-w-4xl tracking-tight">
                    Building Modern Agriculture in Somalia & East Africa
                </h1>

                <p className="text-lg md:text-xl text-slate-100/95 leading-9 md:leading-10 max-w-xl md:max-w-2xl mb-8 drop-shadow-md font-normal">
                    Barwaaqo Agri Group provides high-quality seeds, agricultural inputs, irrigation development, and farm advisory services to support productive and resilient farming systems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Link href="/services">
                        <Button
                            variant="primary"
                            className="shadow-[0_10px_30px_rgba(0,0,0,0.3)] px-12 py-4 rounded-full text-lg hover:-translate-y-1 transition-all active:scale-95"
                        >
                            Explore Our Services
                        </Button>
                    </Link>
                    <Link href="/partners">
                        <Button
                            variant="outline"
                            className="shadow-[0_10px_30px_rgba(0,0,0,0.2)] px-12 py-4 rounded-full text-lg border-white/40 text-white hover:bg-white/10 hover:-translate-y-1 transition-all active:scale-95"
                        >
                            Partner With Us
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
