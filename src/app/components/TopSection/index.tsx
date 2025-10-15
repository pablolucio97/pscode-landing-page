"use client";
import TypeWriter from "@/components/animations-and-loading/TextWritter";
import { HeroSection } from "@/components/elements/HeroSection";

export default function TopSection() {
  const handleNavigateToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HeroSection
      title="Desenvolvimento de soluções digitais que transformam negócios"
      buttonText="Entrar em contato"
      buttonClassName="bg-gradient-to-r from-primary-700 to-primary-400 text-white font-bold"
      size="middle"
      sectionClassName="bg-gradient-to-r from-black to-primary-600 via-gray-900"
      titleClassName="text-white"
      subtitleClassName="text-gray-200"
      onButtonClick={handleNavigateToContact}
      children={
        <TypeWriter
          className="text-2xl font-semibold text-white my-8 text-center"
          repeat={Infinity}
          showsCursor
          speed={20}
          textDelayMs={1500}
          textList={[
            "Precisa de um site, landing page ou blog? ",
            "Precisa de um aplicativo iOS e Android? ",
            "Precisa de uma solução personalizada? ",
            "Precisa desenvolver um software sob medida? ",
          ]}
          wrapper="h2"
        />
      }
    />
  );
}
