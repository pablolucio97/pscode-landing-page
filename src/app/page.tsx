"use client";

import Image from "next/image";
import { useState } from "react";
import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import ItemListCard from "@/components/cards/ItemListCard";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import Paragraph from "@/components/typography/Paragraph";
import Phrase from "@/components/typography/Phrase";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  ArrowRightIcon,
  BrowsersIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  TargetIcon,
} from "@phosphor-icons/react";
import {
  contactChannels,
  introOverview,
  navigationLinks,
  partnerLogos,
  productShowcase,
  servicesOverview,
  technologyStack,
} from "@/mocks/landing";

const BRAND_NAME = "PS Code";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (hash: string) => {
    const targetId = hash.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  const highlightIconMap: Record<string, JSX.Element> = {
    target: <TargetIcon size={32} className="text-secondary-400" weight="duotone" />,
    layout: <BrowsersIcon size={32} className="text-secondary-400" weight="duotone" />,
    rocket: <RocketLaunchIcon size={32} className="text-secondary-400" weight="duotone" />,
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <LandingHeader.Root className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <LandingHeader.Left>
          <LandingHeader.Logo src="/window.svg" alt={BRAND_NAME} />
          <div className="hidden flex-col sm:flex">
            <Phrase
              content={BRAND_NAME}
              className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground/80"
            />
            <Phrase
              content="Soluções digitais sob medida"
              className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary-400"
            />
          </div>
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
                label="Fale com o time"
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
            label="Contato"
            onClick={() => handleNavigate("#contato")}
          />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex w-full flex-col gap-24 pb-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_65%)]" />
          <div className="absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.18),_transparent_70%)] blur-3xl" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 md:flex-row md:items-center">
            <FadeContainer once className="flex-1 space-y-6">
              <Phrase
                content="Início"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-400"
              />
              <Title
                element="h1"
                content="Desenvolvimento de soluções digitais que transformam negócios"
                className="max-w-2xl text-left text-4xl leading-tight sm:text-5xl"
              />
              <Paragraph
                content="Sistemas sob medida, plataformas SaaS e produtos digitais com performance, segurança e resultados reais."
                className="max-w-xl text-base text-foreground/70 sm:text-lg"
              />
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  label="👉 Solicitar proposta"
                  onClick={() => handleNavigate("#contato")}
                  className="flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
                />
                <Button
                  label="👉 Ver portfólio"
                  variant="outlined"
                  onClick={() => handleNavigate("#solucoes")}
                  className="flex items-center justify-center rounded-full border-secondary-500 text-secondary-400 transition-colors hover:bg-secondary-500/10"
                />
              </div>
            </FadeContainer>
            <RevealContainer className="flex flex-1 items-center justify-center">
              <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.6)]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.25),_transparent_65%)]" />
                <div className="flex items-center justify-between text-xs text-foreground/60">
                  <span>Dashboard • Projetos ativos</span>
                  <ArrowRightIcon size={16} />
                </div>
                <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <Image
                    src="/window.svg"
                    alt="Interface de projetos da PS Code"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                <Paragraph
                  content="Acompanhamento em tempo real de releases, métricas e suporte contínuo."
                  className="mt-6 text-sm text-foreground/70"
                />
              </div>
            </RevealContainer>
          </div>
          <div className="border-t border-white/5" />
          <div id="inicio">
            <Section size="middle" sectionClassName="gap-10 px-6 pb-0 pt-12">
              <FadeContainer once className="max-w-3xl">
                <Paragraph
                  content={introOverview.tagline}
                  className="text-lg text-foreground/70"
                />
              </FadeContainer>
              <div className="grid gap-6 md:grid-cols-3">
                {introOverview.highlights.map((item) => (
                  <ZoomContainer key={item.id} once>
                    <ItemListCard
                      icon={highlightIconMap[item.icon]}
                      title={item.title}
                      description={item.description}
                      containerClassName="h-full gap-4 rounded-2xl border-white/10 bg-bg-card/80 p-6 backdrop-blur"
                      titleClassName="text-lg"
                      descriptionClassName="text-sm text-foreground/60"
                    />
                  </ZoomContainer>
                ))}
              </div>
            </Section>
          </div>
        </section>

        <div id="servicos">
          <Section size="middle" sectionClassName="gap-10">
            <FadeContainer once className="flex flex-col gap-4 text-left">
              <Phrase
                content={servicesOverview.title}
                className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-400"
              />
              <Title
                element="h2"
                content="Serviços que cobrem todo o ciclo digital"
                className="max-w-3xl text-3xl"
              />
              <Paragraph
                content={servicesOverview.description}
                className="max-w-2xl text-base text-foreground/70"
              />
            </FadeContainer>
            <RevealContainer once className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                {servicesOverview.items.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircleIcon size={20} weight="fill" className="mt-1 text-secondary-400" />
                    <Paragraph content={service} className="text-sm text-foreground/70" />
                  </div>
                ))}
              </div>
            </RevealContainer>
          </Section>
        </div>

        <div id="solucoes">
          <Section size="middle" sectionClassName="gap-12">
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Phrase
                content="Soluções"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-400"
              />
              <Title
                element="h2"
                content="Produtos prontos para acelerar seus resultados"
                className="text-3xl"
              />
              <Paragraph
                content="Tecnologia proprietária para entregar impacto imediato ao seu negócio."
                className="max-w-2xl text-base text-foreground/70"
              />
            </FadeContainer>
            <div className="grid gap-8 lg:grid-cols-2">
              {productShowcase.map((product) => (
                <ZoomContainer key={product.id} className="h-full">
                  <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-bg-card/90 p-8 shadow-xl">
                    <div className="flex flex-col gap-2 text-left">
                      <Subtitle
                        element="h3"
                        content={`${product.name} — ${product.tagline}`}
                        className="text-xl"
                      />
                      <Paragraph
                        content={product.description}
                        className="text-sm text-foreground/70"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      {product.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3">
                          <CheckCircleIcon size={18} weight="duotone" className="text-secondary-400" />
                          <Paragraph
                            content={benefit}
                            className="text-sm text-foreground/70"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </ZoomContainer>
              ))}
            </div>
          </Section>
        </div>

        <div id="tecnologias">
          <Section size="middle" sectionClassName="gap-10">
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Phrase
                content="Tecnologias"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-400"
              />
              <Title
                element="h2"
                content="Stack moderna para construir o futuro"
                className="text-3xl"
              />
              <Paragraph
                content="Utilizamos tecnologias líderes do mercado para garantir performance, segurança e escalabilidade."
                className="max-w-3xl text-base text-foreground/70"
              />
            </FadeContainer>
            <RevealContainer className="flex flex-wrap items-center justify-center gap-4">
              {technologyStack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex h-24 w-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-lg font-semibold uppercase tracking-widest text-foreground"
                >
                  {tech.label}
                </div>
              ))}
            </RevealContainer>
          </Section>
        </div>

        <div id="empresas">
          <Section size="middle" sectionClassName="gap-8">
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Phrase
                content="Empresas atendidas"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-400"
              />
              <Paragraph
                content="Parcerias que confiam na PS Code para criar produtos de alto impacto."
                className="max-w-2xl text-base text-foreground/70"
              />
            </FadeContainer>
            <RevealContainer className="flex flex-wrap items-center justify-center gap-6">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.id}
                  className="flex h-20 w-40 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-lg font-semibold uppercase tracking-[0.5em] text-foreground/70"
                >
                  {partner.label}
                </div>
              ))}
            </RevealContainer>
          </Section>
        </div>

        <div id="contato">
          <Section size="middle" sectionClassName="gap-10">
            <FadeContainer once className="flex flex-col gap-4 text-center">
              <Phrase
                content="Contato"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-400"
              />
              <Title
                element="h2"
                content="Pronto para tirar sua ideia do papel?"
                className="text-3xl"
              />
              <Paragraph
                content="Fale com a PS Code e tenha uma solução profissional do início ao fim."
                className="mx-auto max-w-3xl text-base text-foreground/70"
              />
            </FadeContainer>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  label="👉 Solicitar orçamento"
                  onClick={() => handleNavigate("#contato")}
                  className="flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
                />
                <Button
                  label="👉 Agendar uma reunião"
                  variant="outlined"
                  onClick={() => handleNavigate("#contato")}
                  className="flex items-center justify-center rounded-full border-secondary-500 text-secondary-400 transition-colors hover:bg-secondary-500/10"
                />
              </div>
              <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-bg-card/90 p-4 text-center transition-colors hover:border-secondary-500 hover:text-secondary-400"
                  >
                    <Phrase
                      content={channel.label}
                      className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground/60"
                    />
                    <Subtitle
                      element="h3"
                      content={channel.value}
                      className="text-base"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </main>

      <Footer.Root bordered={false} className="bg-background/90">
        <Footer.Bottom bordered className="border-white/5">
          <Paragraph
            content="© PS Code – Soluções de Software Profissionais"
            className="w-full text-center text-xs text-foreground/60 sm:text-sm"
          />
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
