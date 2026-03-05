import { HeroSection } from "./components/HeroSection";
import { VisionMissionSection } from "./components/VisionMissionSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { FoundationSection } from "./components/FoundationSection";
import { AboutSection } from "../components/AboutSection";

export default function AboutPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <AboutSection />
            <VisionMissionSection />
            <ExpertiseSection />
            <FoundationSection />
        </main>
    );
}
