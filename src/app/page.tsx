"use client";

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
import { CheckCircleIcon, SquaresFourIcon } from "@phosphor-icons/react";
import {
  clientsServed,
  contactChannels,
  heroStats,
  introContent,
  navigationLinks,
  productShowcase,
  serviceHighlights,
  technologyStack,
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
      <LandingHeader.Root className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <LandingHeader.Left>
          <LandingHeader.Logo src="/file.svg" alt={BRAND_NAME} />
          <Phrase
            content="PS Code para empresas"
            className="hidden text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 sm:block"
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

      <main className="flex w-full flex-col gap-24 pb-24">
        <section
          id="inicio"
          className="relative w-full overflow-hidden bg-gradient-to-b from-[#030b18] via-[#020613] to-[#01040f]"
        >
          <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_70%)]" />
          <Section size="middle" sectionClassName="!px-6 !py-24 md:!px-10 items-stretch gap-12">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <FadeContainer once className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <Phrase
                    content="Tecnologia estratégica que entrega crescimento"
                    className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-300"
                  />
                  <Section
                    size="full"
                    sectionClassName="!px-0 !py-0 items-start gap-6"
                  >
                    <Title
                      content="Desenvolvimento de soluções digitais que transformam negócios"
                      element="h1"
                      className="text-left text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
                    />
                    <Paragraph
                      content="Sistemas, plataformas e produtos digitais criados para aumentar performance, reduzir custos e gerar resultados reais."
                      className="max-w-2xl text-left text-foreground/70"
                    />
                    <div className="flex flex-wrap items-center gap-4">
                      <Button
                        label="👉 Solicitar Proposta"
                        className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-colors hover:bg-primary-400"
                        onClick={() => handleNavigate("#contato")}
                      />
                      <Button
                        label="👉 Ver Portfólio"
                        variant="outlined"
                        className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-primary-400 hover:text-primary-300"
                        onClick={() => handleNavigate("#solucoes")}
                      />
                    </div>
                  </Section>
                </div>
                <RevealContainer once className="grid gap-4 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#050d1e]/80 p-4 text-left shadow-[0_0_25px_rgba(15,118,230,0.08)]"
                    >
                      <Subtitle
                        content={stat.value}
                        element="h3"
                        className="text-2xl font-semibold text-primary-300"
                      />
                      <Phrase
                        content={stat.label}
                        className="text-sm text-foreground/60"
                      />
                    </div>
                  ))}
                </RevealContainer>
              </FadeContainer>
              <ZoomContainer once>
                <div className="relative flex h-full flex-col justify-between gap-6 rounded-3xl border border-primary-500/30 bg-gradient-to-br from-[#061b3f] via-[#041028] to-[#01050f] p-8 shadow-[0_40px_120px_rgba(12,74,173,0.35)]">
                  <div className="flex flex-col gap-4">
                    <Phrase
                      content="Visão em tempo real"
                      className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200"
                    />
                    <Title
                      content="Operações acompanhadas em dashboards unificados"
                      element="h3"
                      className="text-left text-xl text-white"
                    />
                    <Paragraph
                      content="Automatize treinamentos, monitore performance e evolua seu produto com dados confiáveis."
                      className="text-sm text-foreground/60"
                    />
                  </div>
                  <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0a152b] p-4">
                    <img
                      src="/window.svg"
                      alt="Demonstração TreinaHub"
                      className="h-28 w-full object-contain"
                    />
                    <Phrase
                      content="TreinaHub em ação"
                      className="text-sm font-semibold text-white"
                    />
                    <Paragraph
                      content="Fluxos de aprendizado personalizados e relatórios instantâneos."
                      className="text-xs text-foreground/60"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-foreground/50">
                    <span>Atualizado diariamente</span>
                    <span>Integração com suas ferramentas</span>
                  </div>
                </div>
              </ZoomContainer>
            </div>
          </Section>
        </section>

        <div id="servicos">
          <Section size="middle" sectionClassName="!px-6 md:!px-10 gap-12">
            <FadeContainer once className="flex w-full flex-col items-center gap-3 text-center">
              <Title
                content="Início"
                element="h2"
                className="text-3xl text-white"
              />
              <Paragraph
                content={introContent.description}
                className="max-w-3xl text-foreground/65"
              />
            </FadeContainer>
            <RevealContainer className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#050d1e] p-8 shadow-[0_35px_90px_rgba(8,47,109,0.18)]">
                <Subtitle
                  content="Como entregamos resultados"
                  element="h3"
                  className="text-left text-xl text-white"
                />
                <Paragraph
                  content="Tecnologia com visão estratégica, squads multidisciplinares e acompanhamento constante para cada fase do projeto."
                  className="text-foreground/60"
                />
                <ul className="flex flex-col gap-4">
                  {introContent.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-1 h-5 w-5 text-primary-300" />
                      <Phrase
                        content={item}
                        className="text-left text-sm text-foreground/70"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <ZoomContainer className="h-full">
                <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-primary-500/30 bg-gradient-to-br from-[#021025] via-[#041d3c] to-[#01060f] p-8">
                  <Subtitle
                    content="Serviços focados em crescimento"
                    element="h3"
                    className="text-left text-xl text-white"
                  />
                  <Paragraph
                    content="Nossa equipe atua como parceira de produto para lançar, evoluir e manter suas soluções digitais."
                    className="text-foreground/65"
                  />
                  <div className="flex flex-col gap-4">
                    <Button
                      label="Agendar discovery"
                      className="self-start rounded-full bg-primary-500 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-primary-400"
                      onClick={() => handleNavigate("#contato")}
                    />
                    <Paragraph
                      content="Roadmap definido com base em dados e objetivos de negócio."
                      className="text-xs text-foreground/50"
                    />
                  </div>
                </div>
              </ZoomContainer>
            </RevealContainer>
          </Section>
        </div>

        <div id="solucoes">
          <Section size="middle" sectionClassName="!px-6 md:!px-10 gap-10">
            <FadeContainer once className="flex flex-col items-center gap-3 text-center">
              <Title
                content="Serviços"
                element="h2"
                className="text-3xl text-white"
              />
              <Paragraph
                content="Do planejamento à operação, oferecemos uma estrutura completa para construir e escalar produtos digitais."
                className="max-w-3xl text-foreground/65"
              />
            </FadeContainer>
            <FadeContainer className="grid w-full gap-6 md:grid-cols-3">
              {serviceHighlights.map((service) => (
                <ItemListCard
                  key={service.title}
                  icon={<SquaresFourIcon size={28} className="text-primary-300" />}
                  title={service.title}
                  description={service.description}
                  containerClassName="h-full rounded-3xl border border-white/10 bg-[#050d1e]/90 p-6 text-left shadow-[0_35px_90px_rgba(8,47,109,0.18)]"
                  titleClassName="text-lg font-semibold text-white"
                  descriptionClassName="text-sm text-foreground/60"
                />
              ))}
            </FadeContainer>
          </Section>
        </div>

        <Section
          size="middle"
          sectionClassName="!px-6 md:!px-10 gap-10"
        >
          <FadeContainer once className="flex flex-col items-center gap-3 text-center">
            <Title
              content="Soluções"
              element="h2"
              className="text-3xl text-white"
            />
            <Paragraph
              content="Produtos proprietários que aceleram a entrega de valor para sua empresa."
              className="max-w-3xl text-foreground/65"
            />
          </FadeContainer>
          <div className="grid w-full gap-8 lg:grid-cols-2">
            {productShowcase.map((product) => (
              <ZoomContainer key={product.id} once className="h-full">
                <div className="flex h-full flex-col gap-6 rounded-3xl border border-primary-500/25 bg-gradient-to-br from-[#02152f] via-[#041d3c] to-[#01060f] p-8 shadow-[0_40px_110px_rgba(8,47,109,0.32)]">
                  <div className="flex flex-col gap-2 text-left">
                    <Subtitle
                      content={`${product.name} — ${product.tagline}`}
                      element="h3"
                      className="text-lg text-white"
                    />
                    <Paragraph
                      content={product.description}
                      className="text-sm text-foreground/65"
                    />
                  </div>
                  <ul className="flex flex-col gap-3">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircleIcon className="mt-1 h-5 w-5 text-primary-300" />
                        <Phrase
                          content={benefit}
                          className="text-left text-sm text-foreground/70"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </ZoomContainer>
            ))}
          </div>
        </Section>

        <div id="tecnologias">
          <Section size="middle" sectionClassName="!px-6 md:!px-10 gap-10">
            <FadeContainer once className="flex flex-col items-center gap-3 text-center">
              <Title
                content="Tecnologias"
                element="h2"
                className="text-3xl text-white"
              />
              <Paragraph
                content="Stack moderna para garantir performance, segurança e escalabilidade."
                className="max-w-3xl text-foreground/65"
              />
            </FadeContainer>
            <RevealContainer once className="flex w-full flex-wrap items-center justify-center gap-6">
              {technologyStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex min-w-[150px] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#050d1e]/80 px-6 py-5 text-center shadow-[0_25px_70px_rgba(12,74,173,0.18)]"
                >
                  <Subtitle
                    content={tech.name}
                    element="h3"
                    className="text-lg text-white"
                  />
                  <Phrase
                    content={tech.detail}
                    className="text-sm text-foreground/60"
                  />
                </div>
              ))}
            </RevealContainer>
          </Section>
        </div>

        <div id="clientes">
          <Section size="middle" sectionClassName="!px-6 md:!px-10 gap-10">
            <FadeContainer once className="flex flex-col items-center gap-3 text-center">
              <Title
                content="Empresas atendidas"
                element="h2"
                className="text-3xl text-white"
              />
              <Paragraph
                content="Negócios de diferentes segmentos confiam na CerboLabs para evoluir produtos digitais."
                className="max-w-3xl text-foreground/65"
              />
            </FadeContainer>
            <RevealContainer className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {clientsServed.map((client) => (
                <div
                  key={client.name}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#050d1e]/70 px-6 py-6 text-center shadow-[0_30px_80px_rgba(8,47,109,0.18)]"
                >
                  <Subtitle
                    content={client.name}
                    element="h3"
                    className="text-lg text-white"
                  />
                  <Phrase
                    content={client.caption}
                    className="text-sm text-foreground/55"
                  />
                </div>
              ))}
            </RevealContainer>
          </Section>
        </div>

        <div id="contato">
          <Section size="middle" sectionClassName="!px-6 md:!px-10 gap-10">
            <ZoomContainer once className="w-full">
              <div className="flex w-full flex-col gap-8 rounded-3xl border border-primary-500/30 bg-gradient-to-br from-[#021125] via-[#041d3c] to-[#01060f] p-10 text-center shadow-[0_45px_120px_rgba(12,74,173,0.35)]">
                <FadeContainer once className="flex flex-col items-center gap-4 text-center">
                  <Title
                    content="Pronto para criar seu próximo produto?"
                    element="h2"
                    className="text-3xl text-white"
                  />
                  <Paragraph
                    content="Fale com a CerboLabs e receba um plano personalizado para lançar ou escalar sua solução digital."
                    className="max-w-2xl text-foreground/65"
                  />
                </FadeContainer>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    label="👉 Solicitar Orçamento"
                    className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-primary-400"
                    onClick={() => handleNavigate("#contato")}
                  />
                  <Button
                    label="👉 Agendar uma Reunião"
                    variant="outlined"
                    className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:border-primary-400 hover:text-primary-300"
                    onClick={() => handleNavigate("#contato")}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {contactChannels.map((channel) => (
                    <div
                      key={channel.label}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#050d1e]/80 p-4"
                    >
                      <Subtitle
                        content={channel.label}
                        element="h4"
                        className="text-sm text-primary-200"
                      />
                      <a
                        href={channel.href}
                        className="text-sm font-semibold text-white transition-colors hover:text-primary-300"
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
                content="Soluções digitais com foco em performance, segurança e escala para empresas que precisam crescer rápido."
                className="text-foreground/70"
              />
              <Phrase
                content="© CerboLabs — Transformando ideias em produtos digitais."
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
                    className="text-xs sm:text-sm text-foreground/80 transition-colors hover:text-primary-300"
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
          iconsClassName="text-foreground hover:text-primary-300"
          iconsWeight="regular"
        >
          <Phrase
            content="Acompanhe insights e cases da CerboLabs nas redes."
            className="text-foreground/70"
          />
        </Footer.SocialRow>
        <Footer.Bottom>
          <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
            <Phrase
              content="CerboLabs — Software sob medida para escalar negócios."
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
