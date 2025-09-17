import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export default function Home() {
  return (
    <div className="space-y-16 pb-32">
      <HeroSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
    </div>
  );
}

