import { ProjectsHeroSection } from "./components/ProjectsHeroSection";
import { CaseStudies } from "./components/CaseStudies";
import { ProjectsSection } from "../components/ProjectsSection";
import { DetailedProjectsSection } from "./components/DetailedProjectsSection";
import { Approach } from "./components/Approach";

export default function ProjectsPage() {
    return (
        <main className="bg-white">
            <ProjectsHeroSection />
            <ProjectsSection />
            <DetailedProjectsSection />
            <CaseStudies />
            <Approach />
        </main>
    );
}