import { HeroSection } from "./components/HeroSection";
import { TrustStripSection } from "./components/TrustStripSection";
import { AboutSection } from "./components/AboutSection";
import { CoreServicesSection } from "./components/CoreServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { InsightsSection } from "./components/InsightsSection";
import { PartnershipsSection } from "./components/PartnershipsSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            {/* <TrustStripSection /> */}
            <AboutSection />
            <CoreServicesSection />
            <ProjectsSection />
            <InsightsSection />
            <PartnershipsSection />
            <ContactSection />
        </>
    );
}
