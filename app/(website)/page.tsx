import { HeroSection } from "./components/HeroSection";
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
            <AboutSection />
            <CoreServicesSection />
            <ProjectsSection />
            <InsightsSection />
            <PartnershipsSection />
            <ContactSection />
        </>
    );
}
