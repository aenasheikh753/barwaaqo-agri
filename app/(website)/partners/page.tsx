import { PartnersHeroSection } from "./components/PartnersHeroSection";
import { PartnershipsSection } from "../components/PartnershipsSection";
import { PartnershipBenefitsSection } from "./components/PartnershipBenefitsSection";

export default function PartnersPage() {
    return (
        <main className="bg-white">
            <PartnersHeroSection />
            <PartnershipsSection />
            <PartnershipBenefitsSection />
        </main>
    );
}