"use client";
import InfoCard from "@/components/cards/InfoCard";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { PuzzlePieceIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function SolutionsSection() {
  const services = [
    {
      title: "TreinaHub",
      description:
        "A TreinaHub é uma moderna e completa plataforma de treinamentos online criada para empresas e profissionais que desejam escalar seus treinamentos online e potencializar seus resultados.",
      icon: <Image width={48} height={48} src="/logo-treinahub.png" alt="logo-treinahub" />,
      children: (
        <a
          href="https://www.treinahub.com.br"
          target="_blank"
          className="bg-gradient-to-r from-primary-500 to-primary-600 border border-primary-600 rounded-md font-semibold p-2 self-end mt-2 text-center text-xs sm:text-sm text-white"
        >
          Conhecer solução
        </a>
      ),
    },
    {
      title: "React Collections",
      description:
        "Uma biblioteca de componentes prontos do React para acelerar o desenvolvimento de landing pages, sites, e-commerces e sistemas web sem depender de preços baseados no dólar.",
      icon: (
        <PuzzlePieceIcon className="w-12 h-12 text-primary-500" />
      ),
      children: (
        <button
          disabled
          className="bg-amber-50 border border-amber-600 rounded-md font-semibold p-2 self-end mt-2 text-center text-xs sm:text-sm text-amber-600 opacity-50"
        >
          Em construção
        </button>
      ),
    },
  ];
  return (
    <section
      className="w-full flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="solucoes"
    >
      <Title content="Soluções" />
      <Subtitle
        content="Conheça nossas soluções personalizadas para o seu negócio."
        weight="light"
      />
      <div className="grid grid-cols grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {services.map((service) => (
          <InfoCard
            key={service.title}
            title={service.title}
            text={service.description}
            icon={service.icon}
            children={service.children}
          />
        ))}
      </div>
    </section>
  );
}
