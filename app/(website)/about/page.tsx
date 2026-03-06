import { HeroSection } from "./components/HeroSection";
import { VisionMissionSection } from "./components/VisionMissionSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { FoundationSection } from "./components/FoundationSection";

export default function AboutPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <VisionMissionSection />
            <ExpertiseSection />
            <FoundationSection />
        </main>
    );
}
