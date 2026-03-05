import Image from "next/image";
import { Button } from "../../components/ui/Button";

export function HeroSection() {
    return (
        <section className="relative h-[90vh] min-h-[550px] flex items-center justify-center pt-20">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/images/hero_agriculture.png"
                    alt="Cinematic landscape of sophisticated irrigation and modern agricultural fields at sunrise"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-6 leading-tight max-w-4xl tracking-tight">
                    Building Modern Agriculture in Somalia & East Africa
                </h1>

                <p className="text-lg md:text-xl text-slate-100/90 leading-relaxed max-w-3xl mb-10 drop-shadow-md font-normal">
                    Barwaaqo Agri Group provides high-quality seeds, agricultural inputs, irrigation development, and farm advisory services to support productive and resilient farming systems.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mt-4">
                    <Button
                        variant="primary"
                        className="shadow-[0_10px_30px_rgba(0,0,0,0.3)] px-12 py-4 rounded-full text-lg hover:-translate-y-1 transition-transform"
                    >
                        Explore Our Services
                    </Button>
                    <Button
                        variant="outline"
                        className="shadow-[0_10px_30px_rgba(0,0,0,0.2)] px-12 py-4 rounded-full text-lg border-white/40 text-white hover:bg-white/10 hover:-translate-y-1 transition-transform"
                    >
                        Partner With Us
                    </Button>
                </div>
            </div>
        </section>
    );
}
