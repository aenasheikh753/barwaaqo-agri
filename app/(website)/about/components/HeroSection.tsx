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
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 leading-tight tracking-tight">
                    About Barwaaqo Agri Group
                </h1>

                <p className="text-lg md:text-xl text-slate-100/90 leading-relaxed max-w-3xl drop-shadow-md font-normal">
                    Learn about our mission to transform agriculture in Somalia and East Africa through innovation and sustainable practices.
                </p>
            </div>
        </section>
    );
}
