"use client";
import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import MetricsCard from "@/components/cards/MetricsCard";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { DeviceMobileCameraIcon } from "@phosphor-icons/react";

export default function MetricsSection() {
  const metrics = [
    {
      preTitle: "+ de",
      title: "usuários impactados",
      value: 200000,
    },
    {
      preTitle: "+ de",
      title: "clientes satisfeitos",
      value: 10,
    },
    {
      preTitle: "+ de",
      title: "projetos entregues",
      value: 25,
      icon: (
        <DeviceMobileCameraIcon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-500" />
      ),
    },
  ];
  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="metricas"
    >
      <Title content="Nossas marcas" />
      <Subtitle content="Números que falam por nós." weight="light" />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {metrics.map((metric) => (
          <FadeContainer key={metric.title} delay={metrics.indexOf(metric) * 2}>
            <MetricsCard
              preTitle={metric.preTitle}
              key={metric.title}
              title={metric.title}
              value={metric.value}
              countDuration={8}
              className={"bg-transparent border-none flex shadow-none"}
              titleClassName="text-lg sm:text-xl"
              valueClassName="text-2xl sm:text-5xl"
            />
          </FadeContainer>
        ))}
      </div>
    </section>
  );
}
