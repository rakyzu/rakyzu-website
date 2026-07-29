import LanguageProvider from "../i18n/LanguageProvider";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceTimeline from "./ExperienceTimeline";
import Guestbook from "./Guestbook";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <Guestbook />
      <ContactForm />
      <Footer />
    </LanguageProvider>
  );
}
