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
  ChartLineUpIcon,
  CheckCircleIcon,
  CursorClickIcon,
  EnvelopeSimpleIcon,
  GlobeHemisphereWestIcon,
  HeadsetIcon,
  LightningIcon,
  MonitorPlayIcon,
  PhoneCallIcon,
  PlugsConnectedIcon,
  RocketLaunchIcon,
  SparkleIcon,
  StackIcon,
} from "@phosphor-icons/react";
import {
  contactChannels,
  heroHighlights,
  metricHighlights,
  navigationLinks,
  partnerLogos,
  productShowcase,
  servicesShowcase,
  technologyStack,
} from "@/mocks/landing";

const BRAND_NAME = "CerboLabs";

const heroHighlightIcons = [LightningIcon, SparkleIcon, RocketLaunchIcon];
const serviceIcons = [StackIcon, PlugsConnectedIcon, CursorClickIcon, HeadsetIcon];
const contactIcons = [
  EnvelopeSimpleIcon,
  PhoneCallIcon,
  GlobeHemisphereWestIcon,
];

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
      <div className="hidden w-full border-b border-primary-500/30 bg-primary-500/10 py-2 sm:flex">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <Phrase
            content="Parceria completa de tecnologia para escalar o seu negócio."
            className="text-xs uppercase tracking-[0.4em] text-foreground/70"
          />
          <Phrase
            content="Disponível para projetos no Brasil e exterior"
            className="text-xs text-foreground/60"
          />
        </div>
      </div>

      <LandingHeader.Root
        bordered
        className="border-primary-500/20 bg-[#020510]/90 backdrop-blur"
      >
        <LandingHeader.Left>
          <LandingHeader.Logo src="/globe.svg" alt={BRAND_NAME} />
          <Phrase
            content={BRAND_NAME}
            className="hidden text-sm font-semibold uppercase tracking-[0.25em] text-primary-300 sm:block"
          />
        </LandingHeader.Left>
        <LandingHeader.Center>
          <LandingHeader.Nav>
            {navigationLinks.map((item, index) => (
              <LandingHeader.Nav.Item
                key={item.href}
                href={item.href}
                onClick={() => handleNavigate(item.href)}
                active={index === 0}
              >
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>
        <LandingHeader.Right>
          <LandingHeader.MobileMenuToggle
            open={menuOpen}
            onToggle={setMenuOpen as never}
          />
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
            className="bg-primary-500/90 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-primary-500"
          />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex w-full flex-col gap-24 pb-24">
        <div id="inicio">
          <Section
            size="middle"
            sectionClassName="relative gap-16 pt-24 pb-16 items-start"
          >
            <div className="absolute inset-x-0 -top-40 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.45),_transparent_65%)]" />
            <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:items-center">
              <FadeContainer once className="flex w-full flex-col gap-8">
                <Phrase
                  content="Tecnologia que transforma negócios"
                  className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300"
                />
                <HeroSection
                  size="full"
                  title="Desenvolvimento de soluções digitais que transformam negócios"
                  subtitle="Criamos produtos, plataformas e integrações que elevam performance, reduzem custos e geram resultados reais para empresas modernas."
                  sectionClassName="!px-0 !py-0 items-start gap-6 text-left"
                  titleClassName="text-4xl sm:text-5xl lg:text-[52px] leading-tight text-white"
                  subtitleClassName="text-base sm:text-lg text-foreground/80 max-w-xl"
                />
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    label="👉 Solicitar Proposta"
                    onClick={() => handleNavigate("#contato")}
                    className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_15px_35px_rgba(37,99,235,0.35)] hover:bg-primary-400"
                  />
                  <Button
                    label="👉 Ver Portfólio"
                    variant="outlined"
                    className="rounded-full border-primary-300 px-6 py-3 text-sm font-semibold text-primary-200 hover:bg-primary-500/10"
                    onClick={() => handleNavigate("#solucoes")}
                  />
                </div>
                <div className="grid w-full gap-3 sm:grid-cols-3">
                  {heroHighlights.map((highlight, index) => {
                    const Icon = heroHighlightIcons[index % heroHighlightIcons.length];
                    return (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-bg-card/70 px-4 py-3"
                      >
                        <Icon className="h-5 w-5 text-primary-300" />
                        <Phrase
                          content={highlight}
                          className="text-sm text-foreground/80"
                        />
                      </div>
                    );
                  })}
                </div>
              </FadeContainer>
              <RevealContainer once className="relative flex w-full justify-center">
                <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1f4f] via-[#051128] to-[#00040f] p-6 shadow-[0_25px_60px_rgba(37,99,235,0.35)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_70%)]" />
                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <Phrase
                        content="Visão em tempo real do seu produto"
                        className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200"
                      />
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-400/40 bg-primary-500/20">
                        <MonitorPlayIcon className="h-5 w-5 text-primary-200" />
                      </span>
                    </div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#030915]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1d4ed8]/40 via-transparent to-[#020617]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_55%)]" />
                      <div className="absolute inset-6 rounded-2xl border border-white/10 bg-[#050b1b]/80" />
                      <div className="relative flex h-full w-full items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary-400/40 bg-primary-500/30">
                          <MonitorPlayIcon className="h-8 w-8 text-primary-200" />
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                        <Phrase
                          content="Demo em tela cheia"
                          className="text-xs text-foreground/70"
                        />
                        <Phrase
                          content="Atualizado há 2 min"
                          className="text-xs text-foreground/60"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-400" />
                        <Phrase
                          content="Deploy contínuo ativo"
                          className="text-xs text-foreground/70"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <ChartLineUpIcon className="h-5 w-5 text-primary-200" />
                        <Phrase
                          content="+38% crescimento médio"
                          className="text-xs text-foreground/70"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </RevealContainer>
            </div>
          </Section>
        </div>

        <div id="servicos">
          <Section
            size="middle"
            sectionClassName="gap-12 items-start rounded-[32px] border border-white/10 bg-[#050b1b]/80"
          >
            <FadeContainer once className="flex w-full flex-col gap-3 text-left">
              <Phrase
                content="Serviços"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300"
              />
              <Title
                content="Experiência ponta a ponta em produtos digitais"
                element="h2"
                className="text-left text-3xl sm:text-4xl text-white"
              />
              <Paragraph
                content="Da ideação ao suporte contínuo, entregamos squads dedicados para construir, lançar e evoluir soluções digitais de alto impacto."
                className="max-w-3xl text-foreground/70"
              />
            </FadeContainer>
            <RevealContainer once className="grid w-full gap-6 md:grid-cols-2">
              {servicesShowcase.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                return (
                  <ItemListCard
                    key={service.title}
                    icon={<Icon className="h-8 w-8 text-primary-200" />}
                    title={service.title}
                    description={service.description}
                    containerClassName="h-full rounded-3xl border border-white/10 bg-bg-card/80 p-6 shadow-[0_20px_40px_rgba(8,11,27,0.45)]"
                    titleClassName="text-lg font-semibold text-white"
                    descriptionClassName="text-foreground/70"
                  />
                );
              })}
            </RevealContainer>
          </Section>
        </div>

        <div id="solucoes">
          <Section
            size="middle"
            sectionClassName="gap-10 items-start"
          >
            <FadeContainer once className="flex w-full flex-col gap-3 text-left">
              <Phrase
                content="Soluções"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300"
              />
              <Title
                content="Produtos próprios que aceleram o seu roadmap"
                element="h2"
                className="text-left text-3xl sm:text-4xl text-white"
              />
            </FadeContainer>
            <div className="grid w-full gap-8 lg:grid-cols-2">
              {productShowcase.map((product) => (
                <ZoomContainer key={product.id} once className="h-full">
                  <div className="flex h-full flex-col gap-6 rounded-[28px] border border-primary-500/20 bg-[#050b1b]/80 p-8 shadow-[0_25px_50px_rgba(15,23,42,0.45)]">
                    <div className="flex flex-col gap-2">
                      <Subtitle
                        content={`${product.name} · ${product.tagline}`}
                        element="h3"
                        className="text-left text-xl font-semibold text-white"
                      />
                      <Paragraph
                        content={product.description}
                        className="text-foreground/75"
                      />
                    </div>
                    <ul className="flex flex-col gap-3">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-primary-200" />
                          <Phrase
                            content={benefit}
                            className="text-sm text-foreground/75"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </ZoomContainer>
              ))}
            </div>
          </Section>
        </div>

        <div id="metricas">
          <Section
            size="middle"
            sectionClassName="gap-10 items-start rounded-[32px] border border-primary-500/20 bg-gradient-to-br from-[#07112a] via-[#040814] to-[#02040b]"
          >
            <FadeContainer once className="flex w-full flex-col gap-3 text-left">
              <Phrase
                content="Métricas"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300"
              />
              <Title
                content="Resultados que sustentam o crescimento dos nossos clientes"
                element="h2"
                className="text-left text-3xl sm:text-4xl text-white"
              />
            </FadeContainer>
            <RevealContainer once className="grid w-full gap-6 md:grid-cols-4">
              {metricHighlights.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-bg-card/70 p-6 text-left"
                >
                  <Subtitle
                    content={metric.value}
                    element="h3"
                    className="text-3xl font-semibold text-primary-200"
                  />
                  <Paragraph
                    content={metric.label}
                    className="text-sm text-foreground/70"
                  />
                </div>
              ))}
            </RevealContainer>
          </Section>
        </div>

        <div>
          <Section
            size="middle"
            sectionClassName="gap-12 items-start"
          >
            <FadeContainer once className="flex w-full flex-col gap-3 text-left">
              <Phrase
                content="Tecnologias"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300"
              />
              <Title
                content="Stack moderno para construir hoje o futuro do seu produto"
                element="h2"
                className="text-left text-3xl sm:text-4xl text-white"
              />
            </FadeContainer>
            <FadeContainer once className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {technologyStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-bg-card/70 p-5"
                >
                  <Subtitle
                    content={tech.name}
                    element="h3"
                    className="text-lg font-semibold text-primary-200"
                  />
                  <Paragraph
                    content={tech.description}
                    className="text-sm text-foreground/65"
                  />
                </div>
              ))}
            </FadeContainer>
          </Section>
        </div>

        <div>
          <Section
            size="middle"
            sectionClassName="gap-10 items-start"
          >
            <FadeContainer once className="flex w-full flex-col gap-3 text-left">
              <Phrase
                content="Empresas atendidas"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300"
              />
              <Title
                content="Parcerias que confiam na CerboLabs"
                element="h2"
                className="text-left text-3xl sm:text-4xl text-white"
              />
            </FadeContainer>
            <RevealContainer once className="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-[#050b1b]/80 text-center"
                >
                  <Phrase
                    content={partner.name}
                    className="text-base font-semibold uppercase tracking-[0.25em] text-foreground/70"
                  />
                </div>
              ))}
            </RevealContainer>
          </Section>
        </div>

        <div id="contato">
          <Section
            size="middle"
            sectionClassName="gap-10 items-start rounded-[32px] border border-primary-500/20 bg-gradient-to-br from-primary-500/20 via-[#050b1b] to-[#02060f]"
          >
            <FadeContainer once className="flex w-full flex-col gap-4 text-left">
              <Phrase
                content="Contato"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200"
              />
              <Title
                content="Pronto para tirar sua ideia do papel ou evoluir seu produto atual?"
                element="h2"
                className="text-left text-3xl sm:text-4xl text-white"
              />
              <Paragraph
                content="Converse com nosso time e receba um plano personalizado para o seu próximo capítulo digital."
                className="max-w-3xl text-foreground/75"
              />
              <div className="flex flex-wrap gap-4">
                <Button
                  label="👉 Solicitar Orçamento"
                  onClick={() => handleNavigate("#contato")}
                  className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_15px_35px_rgba(37,99,235,0.35)] hover:bg-primary-400"
                />
                <Button
                  label="👉 Agendar uma Reunião"
                  variant="outlined"
                  className="rounded-full border-primary-300 px-6 py-3 text-sm font-semibold text-primary-200 hover:bg-primary-500/10"
                  onClick={() => handleNavigate("#contato")}
                />
              </div>
            </FadeContainer>
            <ZoomContainer once className="w-full">
              <div className="grid gap-6 md:grid-cols-3">
                {contactChannels.map((channel, index) => {
                  const Icon = contactIcons[index % contactIcons.length];
                  return (
                    <div
                      key={channel.label}
                      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-bg-card/70 p-6"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary-200" />
                        <Subtitle
                          content={channel.label}
                          element="h3"
                          className="text-base font-semibold text-white"
                        />
                      </div>
                      <a
                        href={channel.href}
                        className="text-sm font-semibold text-foreground hover:text-primary-200"
                      >
                        {channel.value}
                      </a>
                    </div>
                  );
                })}
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
                    className="text-xs sm:text-sm text-foreground/80 hover:text-primary-200"
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
          iconsClassName="text-foreground hover:text-primary-200"
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
