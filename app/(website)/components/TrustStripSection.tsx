import Link from "next/link";

export function TrustStripSection() {
  const items = [
    "🌱 Seed & Agricultural Inputs",
    "🌾 Farm Advisory & Agronomy",
    "💧 Irrigation Development",
    "👨‍🌾 Farmer Programs",
  ];

  return (
    <section className="border-t bg-custom-sand border-custom-accent/20 overflow-hidden">

      <div className="text-center pt-16 px-4">
        <span className="inline-block bg-custom-accent/10 text-custom-primary px-4 py-1 rounded-full text-base font-bold uppercase tracking-widest">
          10+ Years of Field Excellence
        </span>
        <h2 className="text-custom-primary text-4xl md:text-5xl font-heading font-bold leading-tight">
          The Foundation of Trusted Farming
        </h2>
        <p className="text-custom-olive text-xs  md:text-sm uppercase tracking-widest mt-2">
          From Seed to Harvest — We Support Every Step
        </p>
      </div>

      <div className="whitespace-nowrap animate-scroll flex gap-6 pt-10 pb-16 sm:pb-16 items-center">
        {items.concat(items).map((item, i) => (
          <Link
            key={i}
            href="/services"
            className="text-custom-primary font-semibold uppercase tracking-wider text-[12px] md:text-sm 
                       border border-custom-olive px-4 py-2 rounded-full 
                       hover:bg-custom-accent/10 hover:border-custom-accent transition-all duration-300"
          >
            {item}
          </Link>
        ))}
      </div>
    </section>
  );
}