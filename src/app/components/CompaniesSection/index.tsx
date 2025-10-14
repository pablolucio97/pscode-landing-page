"use client";
import BrandMarquee, { BrandLogo } from "@/components/marketing/BrandMarquee";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";

export default function CompaniesSection() {
  const companies: BrandLogo[] = [
    {
      href: "https://www.ajxcapital.com.br",
      src: "/companies/ajx.png",
      alt: "Ajx",
    },
    {
      href: "https://www.agsistemas.com.br",
      src: "/companies/agsistemas.png",
      alt: "Ag Sistemas",
    },
    {
      href: "https://www.avodtech.com",
      src: "/companies/avod.png",
      alt: "Avod",
    },
    {
      href: "https://www.buybye.com.br",
      src: "/companies/buybye.png",
      alt: "Buybye",
    },
    {
      href: "https://www.instagram.com/terraizsacolao/?hl=en",
      src: "/companies/terraiz.png",
      alt: "Terraiz",
    },
    {
      href: "https://www.optimizeit.com.br",
      src: "/companies/optimizeit.png",
      alt: "Buybye",
    },
    {
      href: "https://www.instagram.com/hygiasaude/",
      src: "/companies/hygia.png",
      alt: "Hygia",
    },
  ];
  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="empresas"
    >
      <Title content="Empresas assistidas" />
      <Subtitle
        content="Empresas que já foram impactadas pelos nossos serviços"
        weight="light"
      />
      <div className="flex w-full mt-4">
        <BrandMarquee logos={companies} imageFilter="grayscale" />
      </div>
    </section>
  );
}
