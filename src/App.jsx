import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
