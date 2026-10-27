import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TimelineSection from "./TimelineSection";
import ResearchSection from "./ResearchSection";
import HodosSection from "./HodosSection";
import ProjectsSection from "./ProjectsSection";
import AchievementsSection from "./AchievementsSection";
import CVSection from "./CVSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ResearchSection />
        <HodosSection />
        <ProjectsSection />
        <AchievementsSection />
        <CVSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}