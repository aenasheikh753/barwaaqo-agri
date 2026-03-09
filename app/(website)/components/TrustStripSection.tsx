import Link from "next/link";

export function TrustStripSection() {
  const items = [
    { label: "Seed & Agricultural Inputs", href: "/services/seeds" },
    { label: "Farm Advisory & Agronomy", href: "/services/advisory" },
    { label: "Irrigation Development", href: "/services/irrigation" },
    { label: "Farmer Programs", href: "/services/programs" },
  ];

  return (
    <section className="bg-white border-t border-custom-accent/20">
      <div className="max-w-[1200px] mx-auto px-6 py-4 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-center px-4 py-2 rounded-full bg-custom-light-bg hover:bg-custom-sand/40 border border-custom-accent/30 text-custom-primary text-xs font-bold uppercase tracking-widest transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
