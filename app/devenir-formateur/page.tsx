import FAQ from "@/components/faq";
import PartnersSection from "@/components/UI/Partners/PartnersSection";
import ContactFormFormateur from "./contact-form-formateur";
import HeroSection from "./hero";
import Step from "./step";

const faqItems = [
  {
    question: "Qu'est-ce que Learni ?",
    answer: "Learni est une plateforme de formation en ligne.",
  },
];

export default function page() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <Step />
      <ContactFormFormateur />
      <FAQ items={faqItems} />
    </main>
  );
}
