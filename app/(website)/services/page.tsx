import { ServicesHeroSection } from "./components/ServicesHeroSection";
import { CoreServicesSection } from "../components/CoreServicesSection";
import { DetailedServicesSection } from "./components/DetailedServicesSection";
import { ProcessSection } from "./components/ProcessSection";

export default function ServicesPage() {
    return (
        <main className="bg-white">
            <ServicesHeroSection />
            <CoreServicesSection />
            <DetailedServicesSection />
            <ProcessSection />
        </main>
    );
}