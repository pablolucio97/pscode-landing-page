"use client";

import { useState } from "react";
import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import ItemListCard from "@/components/cards/ItemListCard";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import { HeroSection } from "@/components/elements/HeroSection";
import { Section } from "@/components/elements/Section";
import Paragraph from "@/components/typography/Paragraph";
import Phrase from "@/components/typography/Phrase";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  CheckCircleIcon,
  LightningIcon,
  RocketLaunchIcon,
  SquaresFourIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import {
  capabilityHighlights,
  contactChannels,
  differentiators,
  idealForList,
  navigationLinks,
  processSteps,
  productShowcase,
  servicesOffered,
} from "@/mocks/landing";

const BRAND_NAME = "CerboLabs";

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

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <LandingHeader.Root className="bg-background/60 backdrop-blur-lg">
        <LandingHeader.Left>
          <LandingHeader.Logo src="/globe.svg" alt={BRAND_NAME} />
          <Phrase content={BRAND_NAME} className="hidden sm:block text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70" />
        </LandingHeader.Left>
        <LandingHeader.Center>
          <LandingHeader.Nav>
            {navigationLinks.map((item) => (
              <LandingHeader.Nav.Item
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
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

      <main className="flex w-full flex-col gap-24 pb-24">
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#140f3a] via-[#0f172a] to-[#0b1320] pb-16">
          <div className="absolute inset-x-0 -top-24 -z-10 h-96 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_60%)]" />
          <div className="absolute inset-y-0 right-[-20%] -z-10 h-full w-[60%] bg-[radial-gradient(circle,_rgba(6,182,212,0.15),_transparent_70%)]" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-20">
            <ZoomContainer once>
              <HeroSection
                size="middle"
                title="Soluções de Software Sob Medida para Escalar Seu Negócio"
                subtitle="Desenvolvemos sistemas, plataformas e produtos digitais que aumentam performance, reduzem custos e entregam resultados reais para empresas."
                buttonText="👉 Solicitar Proposta"
                onButtonClick={() => handleNavigate("#contato")}
                sectionClassName="items-start text-left gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-primary-800/80 via-primary-900/80 to-[#0b0f24]/80 px-8 py-16 shadow-[0_0_60px_rgba(124,58,237,0.35)]"
                titleClassName="text-3xl sm:text-4xl md:text-5xl text-white leading-tight"
                subtitleClassName="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl"
                buttonClassName="mt-6 rounded-full bg-secondary-500 px-6 py-3 text-sm font-semibold text-[#1c143a] shadow-lg transition-colors hover:bg-secondary-400"
              />
            </ZoomContainer>
            <FadeContainer once className="flex flex-wrap items-center gap-4">
              <Button
                label="👉 Ver Portfólio"
                variant="outlined"
                className="border-secondary-500 text-secondary-400 hover:bg-secondary-500/10"
                onClick={() => handleNavigate("#nossos-produtos")}
              />
              <Phrase
                content="Projetos digitais guiados por estratégia, dados e crescimento contínuo."
                className="text-white/70"
              />
            </FadeContainer>
          </div>
        </div>

        <div id="o-que-fazemos">
          <Section
            size="middle"
            sectionClassName="gap-12"
          >
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Title
                content="O que fazemos"
                element="h2"
                className="text-foreground"
              />
              <Subtitle
                content="Tecnologia sob medida com performance, escalabilidade e design profissional"
                element="h3"
                className="text-foreground/80"
              />
              <Paragraph
                content={capabilityHighlights.description}
                className="max-w-3xl text-foreground/70"
              />
            </FadeContainer>
            <FadeContainer once className="grid w-full gap-6 md:grid-cols-2">
              {capabilityHighlights.pillars.map((pillar) => (
                <ItemListCard
                  key={pillar}
                  icon={<LightningIcon size={32} className="text-secondary-400" />}
                  title={pillar}
                  description="Experiência dedicada e squads multidisciplinares para acelerar resultados."
                  containerClassName="bg-bg-card/70 backdrop-blur border border-white/5"
                  descriptionClassName="text-foreground/60"
                />
              ))}
            </FadeContainer>
            <RevealContainer once className="flex justify-center">
              <Paragraph
                content={capabilityHighlights.objective}
                className="max-w-3xl text-center text-foreground/60"
              />
            </RevealContainer>
          </Section>
        </div>

        <div id="nossos-produtos">
          <Section size="middle" sectionClassName="gap-10">
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Title
                content="Nossos produtos"
                element="h2"
                className="text-foreground"
              />
              <Subtitle
                content="Plataformas e bibliotecas pensadas para acelerar o seu crescimento"
                element="h3"
                className="text-foreground/80"
              />
            </FadeContainer>
            <div className="grid w-full gap-8 lg:grid-cols-2">
              {productShowcase.map((product) => (
                <ZoomContainer key={product.id} once className="h-full">
                  <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-bg-card/80 p-8 shadow-lg">
                    <div className="flex flex-col gap-2">
                      <Subtitle
                        content={`${product.name} – ${product.tagline}`}
                        element="h3"
                        className="text-foreground"
                      />
                      <Paragraph
                        content={product.description}
                        className="text-foreground/70"
                      />
                    </div>
                    <ul className="flex flex-col gap-3">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-tertiary-400" />
                          <Phrase content={benefit} className="text-foreground/75" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </ZoomContainer>
              ))}
            </div>
          </Section>
        </div>

        <div id="nossos-servicos">
          <Section size="middle" sectionClassName="gap-12">
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Title
                content="Nossos serviços"
                element="h2"
                className="text-foreground"
              />
              <Subtitle
                content="Do planejamento ao suporte contínuo, cuidamos de todo o ciclo digital"
                element="h3"
                className="text-foreground/80"
              />
              <Paragraph
                content="Você tem a ideia. Nós desenvolvemos, lançamos e mantemos para você."
                className="text-foreground/70"
              />
            </FadeContainer>
            <FadeContainer once className="grid w-full gap-6 md:grid-cols-2">
              {servicesOffered.map((service) => (
                <ItemListCard
                  key={service}
                  icon={<SquaresFourIcon size={28} className="text-primary-300" />}
                  title={service}
                  containerClassName="bg-bg-card/70 backdrop-blur border border-white/5"
                  titleClassName="text-foreground"
                />
              ))}
            </FadeContainer>
          </Section>
        </div>

        <div id="diferenciais">
          <Section size="middle" sectionClassName="gap-10">
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Title
                content="Por que escolher a CerboLabs"
                element="h2"
                className="text-foreground"
              />
              <Subtitle
                content="Parceria estratégica com foco em performance e resultados"
                element="h3"
                className="text-foreground/80"
              />
            </FadeContainer>
            <FadeContainer className="grid w-full gap-6 md:grid-cols-2">
              {differentiators.map((item) => (
                <ItemListCard
                  key={item}
                  icon={<RocketLaunchIcon size={28} className="text-secondary-400" />}
                  title={item}
                  containerClassName="bg-bg-card/70 backdrop-blur border border-white/5"
                  titleClassName="text-foreground"
                />
              ))}
            </FadeContainer>
          </Section>
        </div>

        <div id="como-trabalhamos">
          <Section size="middle" sectionClassName="gap-10">
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Title
                content="Como trabalhamos"
                element="h2"
                className="text-foreground"
              />
              <Subtitle
                content="Processo simples, transparente e orientado a impacto"
                element="h3"
                className="text-foreground/80"
              />
            </FadeContainer>
            <RevealContainer once className="grid gap-6 md:grid-cols-5">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-bg-card/70 p-6 text-center shadow-md"
                >
                  <Subtitle
                    content={step.step}
                    element="h3"
                    className="text-secondary-400"
                  />
                  <Paragraph
                    content={step.title}
                    className="text-foreground/75"
                  />
                </div>
              ))}
            </RevealContainer>
            <Paragraph
              content="Tecnologia + Estratégia + Parceria = Sucesso do seu projeto."
              className="text-center text-foreground/70"
            />
          </Section>
        </div>

        <div id="para-quem">
          <Section size="middle" sectionClassName="gap-10">
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Title
                content="Para quem é ideal"
                element="h2"
                className="text-foreground"
              />
              <Subtitle
                content="Atendemos negócios que precisam de tecnologia confiável para crescer"
                element="h3"
                className="text-foreground/80"
              />
            </FadeContainer>
            <FadeContainer className="grid w-full gap-6 md:grid-cols-2">
              {idealForList.map((item) => (
                <ItemListCard
                  key={item}
                  icon={<UsersThreeIcon size={28} className="text-tertiary-400" />}
                  title={item}
                  containerClassName="bg-bg-card/70 backdrop-blur border border-white/5"
                  titleClassName="text-foreground"
                />
              ))}
            </FadeContainer>
          </Section>
        </div>

        <div id="contato">
          <Section size="middle" sectionClassName="gap-8">
            <FadeContainer once className="flex flex-col items-center gap-4 text-center">
              <Title
                content="Pronto para tirar sua ideia do papel?"
                element="h2"
                className="text-foreground"
              />
              <Paragraph
                content="Fale com a CerboLabs e tenha uma solução profissional do início ao fim."
                className="max-w-2xl text-foreground/70"
              />
            </FadeContainer>
            <ZoomContainer className="w-full">
              <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-primary-900/70 via-primary-800/70 to-[#0d1328] p-10 text-center shadow-[0_0_50px_rgba(124,58,237,0.25)]">
                <Paragraph
                  content="Escolha a melhor forma de contato e vamos acelerar seu próximo capítulo digital."
                  className="text-foreground/75"
                />
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    label="👉 Solicitar Orçamento"
                    onClick={() => handleNavigate("#contato")}
                  />
                  <Button
                    label="👉 Agendar uma Reunião"
                    variant="outlined"
                    className="border-secondary-500 text-secondary-400 hover:bg-secondary-500/10"
                    onClick={() => handleNavigate("#contato")}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {contactChannels.map((channel) => (
                    <div
                      key={channel.label}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-bg-card/80 p-4"
                    >
                      <Subtitle
                        content={channel.label}
                        element="h4"
                        className="text-secondary-400"
                      />
                      <a
                        href={channel.href}
                        className="text-sm font-semibold text-foreground hover:text-secondary-400"
                      >
                        {channel.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </ZoomContainer>
          </Section>
        </div>
      </main>

      <Footer.Root>
        <Footer.Top columns={3}>
          <Footer.Column title={BRAND_NAME}>
            <div className="flex flex-col gap-3">
              <Paragraph
                content="Soluções de software profissionais com foco em crescimento previsível e experiências memoráveis."
                className="text-foreground/70"
              />
              <Phrase
                content="© CerboLabs – Soluções de Software Profissionais"
                className="text-foreground/60"
              />
            </div>
          </Footer.Column>
          <Footer.Column
            title="Mapa do site"
            items={navigationLinks.map((item) => ({
              label: item.label,
              href: item.href,
            }))}
          />
          <Footer.Column title="Contato">
            <ul className="flex flex-col gap-2 text-center sm:text-left">
              {contactChannels.map((channel) => (
                <li key={`footer-${channel.label}`}>
                  <a
                    href={channel.href}
                    className="text-xs sm:text-sm text-foreground/80 hover:text-secondary-400"
                  >
                    {`${channel.label}: ${channel.value}`}
                  </a>
                </li>
              ))}
            </ul>
          </Footer.Column>
        </Footer.Top>
        <Footer.SocialRow
          items={[
            { iconName: "instagram", href: "https://instagram.com" },
            { iconName: "x", href: "https://x.com" },
            { iconName: "youtube", href: "https://youtube.com" },
            { iconName: "whatsapp", href: "https://wa.me/551140009090" },
          ]}
          iconsClassName="text-foreground hover:text-secondary-400"
          iconsWeight="regular"
        >
          <Phrase
            content="Acompanhe insights, cases e conteúdos exclusivos para líderes digitais."
            className="text-foreground/70"
          />
        </Footer.SocialRow>
        <Footer.Bottom>
          <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
            <Phrase
              content="CerboLabs – transformando ideias em tecnologia escalável."
              className="text-foreground/60"
            />
            <Phrase
              content="CNPJ 12.345.678/0001-99"
              className="text-foreground/60"
            />
          </div>
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
