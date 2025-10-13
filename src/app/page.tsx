"use client";

import { useState } from "react";
import Image from "next/image";
import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import Paragraph from "@/components/typography/Paragraph";
import Phrase from "@/components/typography/Phrase";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  BrowsersIcon,
  ChartLineUpIcon,
  CheckCircleIcon,
  LightningIcon,
  RocketLaunchIcon,
  SquaresFourIcon,
} from "@phosphor-icons/react";
import {
  assistedCompanies,
  contactChannels,
  heroHighlights,
  metricsHighlights,
  navigationLinks,
  productShowcase,
  servicesSummary,
  technologyStack,
} from "@/mocks/landing";

const BRAND_NAME = "CerboLabs";

const serviceIconMap: Record<string, JSX.Element> = {
  squares: <SquaresFourIcon size={28} className="text-secondary-400" />,
  rocket: <RocketLaunchIcon size={28} className="text-secondary-400" />,
  stack: <BrowsersIcon size={28} className="text-secondary-400" />,
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerContactItems = contactChannels.map((channel) => ({
    label: `${channel.label}: ${channel.value}`,
    href: channel.href,
    target: channel.href.startsWith("http") ? "_blank" : undefined,
  }));

  const footerNavItems = navigationLinks.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  const footerProductItems = productShowcase.map((product) => ({
    label: product.name,
    href: "#solucoes",
  }));

  const handleNavigate = (hash: string) => {
    const targetId = hash.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="w-full border-b border-primary-900/40 bg-primary-950/60 px-6 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-primary-200 sm:text-xs">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <span className="font-semibold">{BRAND_NAME}</span>
          <span className="font-light text-primary-300">Soluções que transformam negócios</span>
        </div>
      </div>

      <LandingHeader.Root className="bg-background/80 backdrop-blur-lg">
        <LandingHeader.Left>
          <LandingHeader.Logo src="/globe.svg" alt={BRAND_NAME} />
          <Phrase
            content={BRAND_NAME}
            className="hidden text-xs font-semibold uppercase tracking-[0.35em] text-primary-100 sm:block"
          />
        </LandingHeader.Left>
        <LandingHeader.Center>
          <LandingHeader.Nav>
            {navigationLinks.map((item) => (
              <LandingHeader.Nav.Item
                key={item.href}
                href={item.href}
                onClick={() => handleNavigate(item.href)}
              >
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>
        <LandingHeader.Right>
          <LandingHeader.MobileMenuToggle open={menuOpen} onToggle={setMenuOpen as never} />
          <LandingHeader.MobileMenuPanel
            open={menuOpen}
            cta={
              <LandingHeader.CTA
                label="Solicitar proposta"
                onClick={() => handleNavigate("#contato")}
              />
            }
          >
            {navigationLinks.map((item) => (
              <LandingHeader.Nav.Item
                key={`mobile-${item.href}`}
                href={item.href}
                onClick={() => handleNavigate(item.href)}
              >
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.MobileMenuPanel>
          <LandingHeader.CTA
            label="Solicitar proposta"
            onClick={() => handleNavigate("#contato")}
          />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex w-full flex-col">
        <section
          id="inicio"
          className="relative overflow-hidden bg-gradient-to-b from-[#031334] via-[#020817] to-[#01050f]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.2),_transparent_60%)]" />
          <Section
            size="middle"
            sectionClassName="relative z-[1] w-full items-start gap-16 py-20 lg:py-28"
          >
            <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <FadeContainer once className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <Phrase
                    content="Parceria completa em tecnologia"
                    className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200"
                  />
                  <Title
                    element="h1"
                    content="Desenvolvimento de soluções digitais que transformam negócios"
                    className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
                  />
                  <Subtitle
                    element="h2"
                    content="Criamos sistemas, plataformas e produtos digitais que aumentam performance, reduzem custos e elevam a experiência dos seus clientes."
                    className="max-w-2xl text-base text-foreground/70 sm:text-lg"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    label="👉 Solicitar Proposta"
                    onClick={() => handleNavigate("#contato")}
                  />
                  <Button
                    label="👉 Ver Portfólio"
                    variant="outlined"
                    onClick={() => handleNavigate("#solucoes")}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {heroHighlights.map((highlight) => (
                    <RevealContainer
                      once
                      key={highlight.id}
                      className="flex h-full flex-col gap-3 rounded-2xl border border-primary-800/40 bg-[#041229]/80 p-5"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-secondary-300">
                        <LightningIcon size={18} weight="fill" />
                        {highlight.title}
                      </div>
                      <Paragraph
                        content={highlight.description}
                        className="text-sm text-foreground/60"
                      />
                    </RevealContainer>
                  ))}
                </div>
              </FadeContainer>
              <RevealContainer
                once
                className="relative flex h-full w-full items-center justify-center"
              >
                <div className="relative w-full max-w-md rounded-[32px] border border-primary-900/40 bg-[#030b1f]/90 p-6 shadow-[0_0_80px_rgba(37,99,235,0.25)]">
                  <div className="mb-4 flex items-center justify-between rounded-xl border border-primary-800/50 bg-[#051535]/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary-200">
                    <span>Experiência imersiva</span>
                    <span className="text-primary-100">2024</span>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-primary-900/40 bg-[#04112a]">
                    <Image
                      src="/window.svg"
                      alt="Pré-visualização das soluções CerboLabs"
                      width={720}
                      height={480}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-primary-800/40 bg-[#06132d]/80 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-900/60 text-primary-200">
                      <ChartLineUpIcon size={22} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">
                        Tecnologia + Estratégia + Parceria
                      </span>
                      <span className="text-xs text-foreground/60">
                        Resultados previsíveis com squads dedicadas
                      </span>
                    </div>
                  </div>
                </div>
              </RevealContainer>
            </div>
          </Section>
        </section>

        <section id="servicos" className="bg-[#010912]">
          <Section
            size="middle"
            sectionClassName="w-full items-center gap-12 py-20"
          >
            <FadeContainer once className="flex flex-col items-center gap-3 text-center">
              <Phrase
                content="Serviços"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200"
              />
              <Title
                element="h2"
                content="Do planejamento ao crescimento contínuo"
                className="text-3xl text-white sm:text-4xl"
              />
              <Subtitle
                element="h3"
                content="Equipe completa para construir, lançar e evoluir plataformas digitais de alto impacto."
                className="max-w-3xl text-base text-foreground/60"
              />
            </FadeContainer>
            <div className="grid w-full gap-6 lg:grid-cols-3">
              {servicesSummary.map((service) => (
                <ZoomContainer
                  once
                  key={service.id}
                  className="h-full"
                >
                  <div className="flex h-full flex-col gap-4 rounded-3xl border border-primary-900/40 bg-[#041229]/80 p-8 text-left">
                    <div className="flex items-center gap-3 text-secondary-300">
                      {serviceIconMap[service.icon]}
                      <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                        {service.title}
                      </span>
                    </div>
                    <Paragraph
                      content={service.description}
                      className="text-sm text-foreground/60"
                    />
                  </div>
                </ZoomContainer>
              ))}
            </div>
          </Section>
        </section>

        <section id="solucoes" className="bg-[#030d21]">
          <Section
            size="middle"
            sectionClassName="w-full items-center gap-12 py-20"
          >
            <FadeContainer once className="flex flex-col items-center gap-3 text-center">
              <Phrase
                content="Soluções"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200"
              />
              <Title
                element="h2"
                content="Produtos com foco em resultado imediato"
                className="text-3xl text-white sm:text-4xl"
              />
              <Subtitle
                element="h3"
                content="Escolha soluções prontas para acelerar treinamentos, vendas e operações."
                className="max-w-3xl text-base text-foreground/60"
              />
            </FadeContainer>
            <div className="grid w-full gap-8 lg:grid-cols-2">
              {productShowcase.map((product) => (
                <ZoomContainer key={product.id} once className="h-full">
                  <div className="flex h-full flex-col gap-6 rounded-3xl border border-primary-900/40 bg-[#050f26]/85 p-10">
                    <div className="flex flex-col gap-2 text-left">
                      <Subtitle
                        element="h3"
                        content={`${product.name} – ${product.tagline}`}
                        className="text-lg font-semibold text-white"
                      />
                      <Paragraph
                        content={product.description}
                        className="text-sm text-foreground/60"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      {product.benefits.map((benefit) => (
                        <div
                          key={`${product.id}-${benefit}`}
                          className="flex items-start gap-3 text-left"
                        >
                          <CheckCircleIcon
                            size={18}
                            weight="fill"
                            className="mt-0.5 text-secondary-400"
                          />
                          <span className="text-sm text-foreground/70">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        label="Solicitar demonstração"
                        onClick={() => handleNavigate("#contato")}
                      />
                      <Button
                        label="Ver detalhes"
                        variant="outlined"
                        onClick={() => handleNavigate("#contato")}
                      />
                    </div>
                  </div>
                </ZoomContainer>
              ))}
            </div>
          </Section>
        </section>

        <section id="metricas" className="bg-[#010912]">
          <Section
            size="middle"
            sectionClassName="w-full items-center gap-12 py-20"
          >
            <FadeContainer once className="flex flex-col items-center gap-3 text-center">
              <Phrase
                content="Métricas"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200"
              />
              <Title
                element="h2"
                content="Resultados comprovados"
                className="text-3xl text-white sm:text-4xl"
              />
              <Subtitle
                element="h3"
                content="Performance e escala para empresas que não podem esperar."
                className="max-w-3xl text-base text-foreground/60"
              />
            </FadeContainer>
            <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metricsHighlights.map((metric) => (
                <RevealContainer
                  once
                  key={metric.id}
                  className="flex h-full flex-col items-center gap-3 rounded-3xl border border-primary-900/40 bg-[#041229]/80 p-8 text-center"
                >
                  <span className="text-3xl font-semibold text-secondary-300 sm:text-4xl">
                    {metric.value}
                  </span>
                  <span className="text-sm text-foreground/60">{metric.label}</span>
                </RevealContainer>
              ))}
            </div>
          </Section>
        </section>

        <section id="tecnologias" className="bg-[#030d21]">
          <Section
            size="middle"
            sectionClassName="w-full items-center gap-12 py-20"
          >
            <FadeContainer once className="flex flex-col items-center gap-3 text-center">
              <Phrase
                content="Tecnologias"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200"
              />
              <Title
                element="h2"
                content="Stack moderna para cada desafio"
                className="text-3xl text-white sm:text-4xl"
              />
              <Subtitle
                element="h3"
                content="Integramos ferramentas líderes para entregar segurança, escalabilidade e performance."
                className="max-w-3xl text-base text-foreground/60"
              />
            </FadeContainer>
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {technologyStack.map((tech) => (
                <FadeContainer
                  once
                  key={tech}
                  className="flex items-center justify-center rounded-2xl border border-primary-900/40 bg-[#041229]/70 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-100"
                >
                  {tech}
                </FadeContainer>
              ))}
            </div>
            <div className="w-full rounded-3xl border border-primary-900/40 bg-[#010912]/90 p-8">
              <FadeContainer once className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-left sm:text-center">
                  <Phrase
                    content="Empresas assistidas"
                    className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200"
                  />
                  <Subtitle
                    element="h3"
                    content="Parceiros que confiam na CerboLabs"
                    className="text-base text-foreground/60"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {assistedCompanies.map((company) => (
                    <div
                      key={company}
                      className="flex items-center justify-center rounded-2xl border border-primary-900/40 bg-[#041229]/70 px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </FadeContainer>
            </div>
          </Section>
        </section>

        <section id="contato" className="bg-[#010912]">
          <Section
            size="middle"
            sectionClassName="w-full items-center gap-12 py-20"
          >
            <ZoomContainer once className="w-full">
              <div className="grid w-full gap-8 rounded-3xl border border-primary-900/40 bg-[#041229]/80 p-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="flex flex-col gap-6 text-left">
                  <Phrase
                    content="Pronto para criar o próximo case?"
                    className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200"
                  />
                  <Title
                    element="h2"
                    content="Fale com a CerboLabs e receba um plano sob medida"
                    className="text-3xl text-white sm:text-4xl"
                  />
                  <Subtitle
                    element="h3"
                    content="Vamos entender seu desafio, propor a melhor estratégia e iniciar seu projeto com velocidade."
                    className="text-base text-foreground/60"
                  />
                  <div className="flex flex-wrap gap-4">
                    <Button
                      label="👉 Solicitar Orçamento"
                      onClick={() => handleNavigate("#contato")}
                    />
                    <Button
                      label="👉 Agendar uma Reunião"
                      variant="outlined"
                      onClick={() => handleNavigate("#contato")}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-2xl border border-primary-800/40 bg-[#030d21]/80 p-6">
                  <Subtitle
                    element="h3"
                    content="Canais de contato"
                    className="text-sm font-semibold text-white"
                  />
                  <div className="flex flex-col gap-4">
                    {contactChannels.map((channel) => (
                      <div
                        key={channel.label}
                        className="flex items-start justify-between gap-3 rounded-xl border border-primary-900/40 bg-[#041229]/70 px-4 py-3 text-left"
                      >
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-[0.3em] text-primary-200">
                            {channel.label}
                          </span>
                          <a
                            href={channel.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-white hover:text-primary-200"
                          >
                            {channel.value}
                          </a>
                        </div>
                        <CheckCircleIcon size={18} className="mt-1 text-secondary-400" weight="fill" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </Section>
        </section>
      </main>

      <Footer.Root bordered={false} className="bg-[#01050f]">
        <Footer.Top
          columns={3}
          bordered
          className="gap-8 border-primary-900/40"
        >
          <Footer.Column title="Contato" items={footerContactItems} />
          <Footer.Column title="Menu" items={footerNavItems} />
          <Footer.Column title="Soluções" items={footerProductItems} />
        </Footer.Top>
        <Footer.Bottom bordered className="border-primary-900/40">
          <div className="flex w-full flex-col items-center gap-3 text-xs text-foreground/60 sm:flex-row sm:justify-between">
            <span>© {currentYear} CerboLabs – Soluções de Software Profissionais</span>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#inicio" className="hover:text-primary-200">
                Início
              </a>
              <a href="#contato" className="hover:text-primary-200">
                Contato
              </a>
            </div>
          </div>
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
