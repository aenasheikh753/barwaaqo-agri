import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center pt-20">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/images/hero_agriculture.png" // We can keep the same or change if another image is available
                    alt="Barwaaqo Agri Group Field"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center flex flex-col items-center">
                <span className="text-custom-sand font-bold tracking-[0.4em] text-xs md:text-sm uppercase mb-6 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                    Corporate Profile
                </span>
                <h1 className="text-4xl md:text-7xl font-heading font-bold text-white drop-shadow-2xl mb-8 leading-tight tracking-tight uppercase">
                    Our <span className="text-custom-sand italic">Foundations</span>
                </h1>

                <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-4xl font-body drop-shadow-lg">
                    Strategically transforming Somali agriculture through global innovation and local excellence.
                </p>
            </div>
        </section>
    );
}
