import { ContactHeroSection } from "./components/ContactHeroSection";
import { ContactInfoSection } from "./components/ContactInfoSection";
import { ContactSection } from "../components/ContactSection";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactSection />
    </main>
  );
}
