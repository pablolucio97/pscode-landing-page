"use client";
import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import InfoCard from "@/components/cards/InfoCard";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  DesktopIcon,
  DesktopTowerIcon,
  DeviceMobileCameraIcon,
} from "@phosphor-icons/react";

export default function ServicesSection() {
  const services = [
    {
      title: "Desenvolvimento Web",
      description:
        "Criação de landing-pages, sites, blogs, e aplicações web personalizadas para atender às necessidades do seu negócio.",
      icon: <DesktopIcon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-500" />,
    },
    {
      title: "Desenvolvimento Mobile",
      description:
        "Desenvolvimento completo e publicação de aplicativos móveis para iOS e Android, proporcionando uma experiência nativa aos usuários.",
      icon: (
        <DeviceMobileCameraIcon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-500" />
      ),
    },
    {
      title: "Sistemas sob medida",
      description:
        "Desenvolvimento de sistemas personalizados para otimizar processos internos e melhorar a eficiência operacional.",
      icon: (
        <DesktopTowerIcon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-500" />
      ),
    },
  ];
  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="servicos"
    >
      <Title content="Serviços" />
      <Subtitle
        content="Veja como podemos ajudar o seu negócio."
        weight="light"
      />
      <div className="grid grid-cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {services.map((service, i) => (
          <FadeContainer key={service.title} delay={i * 2}>
            <InfoCard
              key={service.title}
              title={service.title}
              text={service.description}
              icon={service.icon}
            />
          </FadeContainer>
        ))}
      </div>
    </section>
  );
}
