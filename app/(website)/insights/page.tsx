import { InsightsHeroSection } from "./components/InsightsHeroSection";
import { InsightsSection } from "../components/InsightsSection";
import { KnowledgeHubSection } from "./components/KnowledgeHubSection";

export default function Insights() {
    return (
        <main className="bg-white">
            <InsightsHeroSection />
            <InsightsSection />
            <KnowledgeHubSection />
        </main>
    );
}